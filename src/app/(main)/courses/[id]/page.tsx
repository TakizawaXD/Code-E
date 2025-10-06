
"use client";

import { notFound, useSearchParams, useRouter, useParams } from "next/navigation";
import React, { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import { useUser, useFirestore, useDoc, useCollection, useMemoFirebase } from "@/firebase";
import { courses as allCourses } from "@/lib/data";
import type { Course, Lesson, CourseModule, Progress } from "@/lib/types";
import { setDoc, doc, serverTimestamp, collection } from "firebase/firestore";
import allVideos from "@/app/lib/placeholder-videos.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { QuizComponent } from "@/components/quiz";
import { Badge } from "@/components/ui/badge";
import { BottomBar } from "@/components/layout/bottom-bar";
import { MobileCourseNav } from "@/components/layout/mobile-course-nav";
import { awardPointsForLesson } from "./actions";
import { CommentSection } from "@/components/comment-section";

function getNextLesson(modules: CourseModule[], currentModuleId: string, currentLessonId: string): { moduleId: string; lessonId: string } | null {
  const currentModuleIndex = modules.findIndex(m => m.id === currentModuleId);
  if (currentModuleIndex === -1) return null;

  const currentModule = modules[currentModuleIndex];
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLessonId);
  if (currentLessonIndex === -1) return null;

  // Next lesson in the same module
  if (currentLessonIndex < currentModule.lessons.length - 1) {
    return { moduleId: currentModuleId, lessonId: currentModule.lessons[currentLessonIndex + 1].id };
  }

  // First lesson of the next module
  if (currentModuleIndex < modules.length - 1) {
    const nextModule = modules[currentModuleIndex + 1];
    if (nextModule.lessons.length > 0) {
      return { moduleId: nextModule.id, lessonId: nextModule.lessons[0].id };
    }
  }

  // No next lesson
  return null;
}


function CourseDetailContent() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const { user } = useUser();
    const firestore = useFirestore();

    const courseId = params.id as string;

    const course = useMemo(() => {
        return allCourses.find((c) => c.id === courseId);
    }, [courseId]);

    const [currentLesson, setCurrentLesson] = useState<{
        moduleId: string;
        lessonId: string;
    } | null>(null);

    const [isNavOpen, setIsNavOpen] = useState(false);

    const { lesson, module } = useMemo(() => {
        if (!course || !currentLesson) return { lesson: null, module: null };
        const foundModule = course.modules.find(m => m.id === currentLesson.moduleId);
        if (!foundModule) return { lesson: null, module: null };
        const foundLesson = foundModule.lessons.find(l => l.id === currentLesson.lessonId);
        return { lesson: foundLesson, module: foundModule };
    }, [course, currentLesson]);
    
    // Set initial lesson from URL or default to the first one
    useEffect(() => {
        if (!course) return;
        const moduleId = searchParams.get("module");
        const lessonId = searchParams.get("lesson");

        if (moduleId && lessonId) {
            setCurrentLesson({ moduleId, lessonId });
        } else if (course.modules.length > 0 && course.modules[0].lessons.length > 0) {
            const firstModule = course.modules[0];
            const firstLesson = firstModule.lessons[0];
            handleSetLesson(firstModule.id, firstLesson.id, 'replace');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [course, searchParams]);

    // Mark course as started for the user
    useEffect(() => {
        if (user && firestore && courseId && course) {
            const enrolledCourseRef = doc(firestore, 'users', user.uid, 'enrolledCourses', courseId);
            setDoc(enrolledCourseRef, { 
                courseId: courseId,
                title: course.title,
                imageUrl: course.imageUrl,
                startedAt: serverTimestamp(),
            }, { merge: true });
        }
    }, [user, firestore, courseId, course]);

    // Fetch user progress for this course
    const progressCollectionRef = useMemoFirebase(() => {
        if (!user || !firestore || !courseId) return null;
        return collection(firestore, `users/${user.uid}/progress/${courseId}/lessons`);
    }, [user, firestore, courseId]);

    const { data: progressData } = useCollection<Progress>(progressCollectionRef);

    const completedLessons = useMemo(() => {
        if (!progressData) return new Set<string>();
        return new Set(progressData.map(p => p.id));
    }, [progressData]);

    const handleSetLesson = (moduleId: string, lessonId: string, method: 'push' | 'replace' = 'push') => {
        if (!course) return;
        setCurrentLesson({ moduleId, lessonId });
        const newUrl = `/courses/${course.id}?module=${moduleId}&lesson=${lessonId}`;
        if (method === 'push') {
          router.push(newUrl, { scroll: false });
        } else {
          router.replace(newUrl, { scroll: false });
        }
        setIsNavOpen(false); // Close nav on selection
    };

    const handleMarkAsCompleted = async () => {
        if (!user || !firestore || !course || !currentLesson || completedLessons.has(currentLesson.lessonId)) return;
        
        await awardPointsForLesson(user.uid, currentLesson.lessonId);
        
        const progressRef = doc(firestore, `users/${user.uid}/progress/${course.id}/lessons`, currentLesson.lessonId);
        await setDoc(progressRef, { completedAt: serverTimestamp() });

        const nextLesson = getNextLesson(course.modules, currentLesson.moduleId, currentLesson.lessonId);
        if (nextLesson) {
            handleSetLesson(nextLesson.moduleId, nextLesson.lessonId);
        } else {
            // Course completed
            alert("¡Felicidades, has completado el curso!");
        }
    };

    const getDifficultyBadge = (difficulty: 'Fácil' | 'Medio' | 'Difícil' | undefined) => {
        switch (difficulty) {
            case 'Fácil': return <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Fácil</Badge>;
            case 'Medio': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Medio</Badge>;
            case 'Difícil': return <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Difícil</Badge>;
            default: return null;
        }
    };
    
    if (!course) {
        return <div className="container flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin" /></div>;
    }

    const completedCount = completedLessons.size;
    const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
    const courseProgress = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;
    
    const videoId = lesson ? allVideos[lesson.id as keyof typeof allVideos] || lesson.youtubeVideoId : undefined;

    return (
    <div className="container mx-auto py-8 pb-24 md:pb-8">
        <main className="space-y-6 min-w-0">
            {(!lesson && currentLesson) ? (
                <div className="flex justify-center items-center h-96"><Loader2 className="w-8 h-8 animate-spin" /></div>
            ) : lesson ? (
                <>
                    <div className="flex justify-between items-start flex-wrap gap-4">
                        <h1 className="text-2xl font-bold font-headline animate-in fade-in slide-in-from-top-4 duration-500">{lesson.title}</h1>
                        <div className="flex gap-2 items-center animate-in fade-in slide-in-from-top-4 duration-500">
                            {lesson.difficulty && getDifficultyBadge(lesson.difficulty)}
                            {user && (
                                <Button variant="outline" onClick={handleMarkAsCompleted} disabled={completedLessons.has(lesson.id)}>
                                    <CheckCircle2 className="mr-2"/>
                                    {completedLessons.has(lesson.id) ? "Completada" : "Marcar como completada"}
                                </Button>
                            )}
                        </div>
                    </div>
                    
                    <Separator />

                    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                        {videoId && (
                        <div className="aspect-video w-full">
                            <iframe
                            className="w-full h-full rounded-lg border"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>
                        )}
                        
                        {lesson.imageUrl && !videoId && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                            <Image
                            src={lesson.imageUrl}
                            alt={lesson.title}
                            fill
                            className="object-cover"
                            data-ai-hint="lesson topic"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        )}

                        {lesson.content && (
                            <Card>
                                <CardContent className="prose dark:prose-invert max-w-none pt-6" dangerouslySetInnerHTML={{ __html: lesson.content }} />
                            </Card>
                        ) }

                        {lesson.quiz ? (
                          <QuizComponent key={lesson.id} quiz={lesson.quiz} />
                        ) : (
                           !lesson.content && !lesson.imageUrl && !videoId && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contenido de la Lección</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">El contenido de esta lección estará disponible pronto.</p>
                                </CardContent>
                            </Card>
                          )
                        )}
                    </div>

                    <Separator />

                    {currentLesson && (
                        <CommentSection lessonId={currentLesson.lessonId} />
                    )}
                </>
            ) : (
                 <div className="flex justify-center items-center h-96">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">Bienvenido a {course.title}</h2>
                        <p className="text-muted-foreground mt-2">Selecciona una lección en la barra de navegación para comenzar.</p>
                    </div>
                </div>
            )}
        </main>

         <MobileCourseNav
            isOpen={isNavOpen}
            onOpenChange={setIsNavOpen}
            course={course}
            currentLesson={currentLesson}
            completedLessons={completedLessons}
            handleSetLesson={handleSetLesson}
        />
        
        <BottomBar 
            onNavOpen={() => setIsNavOpen(true)}
            courseProgress={courseProgress}
        />
    </div>
    );
}

export default function CourseDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const course = allCourses.find(c => c.id === id);

  if (!id || !course) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="container flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin" /></div>}>
        <CourseDetailContent />
    </Suspense>
  );
}

    