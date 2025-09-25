
"use client";

import { notFound, useSearchParams, useRouter } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useFirebase, useUser, useFirestore, useCollection, useMemoFirebase, useDoc } from "@/firebase";
import { setDocumentNonBlocking, addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { courses as allCourses } from "@/lib/data";
import type { Course, Lesson, CourseModule, Progress } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PlayCircle,
  CheckCircle2,
  Lock,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { QuizComponent } from "@/components/quiz";
import { Badge } from "@/components/ui/badge";
import { collection, query, where, doc, getDocs, serverTimestamp, addDoc } from "firebase/firestore";
import { CommentSection } from "@/components/comment-section";

function getNextLesson(course: Course, currentModuleId: string, currentLessonId: string): { moduleId: string; lessonId: string } | null {
  const currentModuleIndex = course.modules.findIndex(m => m.id === currentModuleId);
  if (currentModuleIndex === -1) return null;

  const currentModule = course.modules[currentModuleIndex];
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLessonId);
  if (currentLessonIndex === -1) return null;

  if (currentLessonIndex < currentModule.lessons.length - 1) {
    return { moduleId: currentModuleId, lessonId: currentModule.lessons[currentLessonIndex + 1].id };
  }

  if (currentModuleIndex < course.modules.length - 1) {
    const nextModule = course.modules[currentModuleIndex + 1];
    if (nextModule.lessons.length > 0) {
      return { moduleId: nextModule.id, lessonId: nextModule.lessons[0].id };
    }
  }

  return null;
}

export default function CourseDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useUser();
  const firestore = useFirestore();

  const course = useMemo(() => allCourses.find(c => c.id === id), [id]);

  const progressQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(collection(firestore, `users/${user.uid}/progress`), where("courseId", "==", id));
  }, [firestore, user, id]);

  const { data: progressData } = useCollection<Progress>(progressQuery);
  const progress = useMemo(() => progressData?.[0], [progressData]);


  const [currentLesson, setCurrentLesson] = useState<{
    moduleId: string;
    lessonId: string;
  } | null>(null);

  const { lesson, module } = useMemo(() => {
    if (!course || !currentLesson) {
      return { lesson: null, module: null };
    }

    const foundModule = course.modules.find(m => m.id === currentLesson.moduleId);
    if (!foundModule) {
      return { lesson: null, module: null };
    }
    
    const foundLesson = foundModule.lessons.find(l => l.id === currentLesson.lessonId);
    return { lesson: foundLesson, module: foundModule };

  }, [course, currentLesson]);


  useEffect(() => {
    const moduleId = searchParams.get("module");
    const lessonId = searchParams.get("lesson");

    if (moduleId && lessonId) {
      setCurrentLesson({ moduleId, lessonId });
    } else if (course && course.modules.length > 0 && course.modules[0].lessons.length > 0) {
      const firstModule = course.modules[0];
      const firstLesson = firstModule.lessons[0];
      handleSetLesson(firstModule.id, firstLesson.id);
    }
  }, [searchParams, course]);

  const completedLessons = useMemo(() => {
    return new Set(progress?.completedLessons || []);
  }, [progress]);
  
  const lastCompletedLessonIndex = useMemo(() => {
    if (!course || !progress || progress.completedLessons.length === 0) return -1;

    let flatIndex = -1;
    let lastIndex = -1;
    
    for (const mod of course.modules) {
        for (const less of mod.lessons) {
            flatIndex++;
            if (completedLessons.has(less.id)) {
                lastIndex = flatIndex;
            }
        }
    }
    return lastIndex;
  }, [course, progress, completedLessons]);

  const handleSetLesson = (moduleId: string, lessonId: string) => {
    setCurrentLesson({ moduleId, lessonId });
    const newUrl = `/courses/${id}?module=${moduleId}&lesson=${lessonId}`;
    router.push(newUrl, { scroll: false });
  };
  
  const handleMarkAsCompleted = async () => {
    if (!user || !course || !currentLesson || !firestore) return;
  
    const nextLesson = getNextLesson(course, currentLesson.moduleId, currentLesson.lessonId);
    const newCompletedLessons = Array.from(new Set([...completedLessons, currentLesson.lessonId]));
    const isCourseComplete = !nextLesson;
  
    const progressRef = collection(firestore, `users/${user.uid}/progress`);
  
    // Check if progress document exists
    const q = query(progressRef, where("courseId", "==", course.id));
    const querySnapshot = await getDocs(q);
  
    let progressDocRef;
    if (querySnapshot.empty) {
      // Create new progress document if it doesn't exist
      progressDocRef = doc(progressRef);
      setDocumentNonBlocking(progressDocRef, {
        courseId: course.id,
        completedLessons: newCompletedLessons,
        completed: isCourseComplete,
        startedAt: serverTimestamp(),
      }, { merge: true });
    } else {
      // Update existing progress document
      progressDocRef = querySnapshot.docs[0].ref;
      setDocumentNonBlocking(progressDocRef, {
        completedLessons: newCompletedLessons,
        completed: isCourseComplete,
        lastUpdatedAt: serverTimestamp(),
        ...(isCourseComplete && { completedAt: serverTimestamp() })
      }, { merge: true });
    }
  
    if (isCourseComplete) {
      const notificationsRef = collection(firestore, `users/${user.uid}/notifications`);
      addDocumentNonBlocking(notificationsRef, {
        title: `¡Curso completado!`,
        description: `Has completado "${course.title}". ¡Tu certificado ya está disponible!`,
        date: serverTimestamp(),
      });
    }
  
    if (nextLesson) {
      handleSetLesson(nextLesson.moduleId, nextLesson.lessonId);
    }
  };

  if (!course) {
    notFound();
  }

  const instructorAvatar = { imageUrl: course?.instructorAvatarUrl, name: course?.instructor };

  const getDifficultyBadge = (difficulty: 'Fácil' | 'Medio' | 'Difícil' | undefined) => {
    switch (difficulty) {
        case 'Fácil':
            return <Badge variant="secondary" className="bg-green-100 text-green-800">Fácil</Badge>;
        case 'Medio':
            return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Medio</Badge>;
        case 'Difícil':
            return <Badge variant="secondary" className="bg-red-100 text-red-800">Difícil</Badge>;
        default:
            return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-headline">{lesson?.title || course.title}</h1>
            <div className="flex gap-2 items-center">
                {lesson?.difficulty && getDifficultyBadge(lesson.difficulty)}
                <Button variant="outline" onClick={handleMarkAsCompleted} disabled={completedLessons.has(lesson?.id || "")}>
                    <CheckCircle2 className="mr-2"/>
                    Marcar como completada
                </Button>
            </div>
          </div>
          
          <Separator />
          
           {lesson?.content ? (
                <Card>
                    <CardContent className="prose dark:prose-invert max-w-none pt-6" dangerouslySetInnerHTML={{ __html: lesson.content }} />
                </Card>
           ) : null}

          {lesson?.quiz ? (
             <QuizComponent quiz={lesson.quiz} />
          ) : (
             !lesson?.content && (
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

          <Separator />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MessageSquare className="w-6 h-6" /> Comentarios
            </h2>
             {course.id && currentLesson?.moduleId && currentLesson?.lessonId && (
                <CommentSection 
                    courseId={course.id} 
                    moduleId={currentLesson.moduleId} 
                    lessonId={currentLesson.lessonId}
                />
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold mb-4">{course.title}</h2>
             <div className="flex items-center gap-4 mb-4">
                <Avatar>
                    <AvatarImage src={instructorAvatar?.imageUrl} alt={course.instructor} />
                    <AvatarFallback>{course.instructor?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{course.instructor}</p>
                    <p className="text-sm text-muted-foreground">Instructor Experto</p>
                </div>
            </div>
            <Accordion
              type="single"
              collapsible
              defaultValue={currentLesson?.moduleId}
              className="w-full"
              value={currentLesson?.moduleId || ""}
            >
              {course.modules.map((moduleItem, moduleIndex) => {
                let lessonFlatIndexOffset = 0;
                for(let i = 0; i < moduleIndex; i++) {
                    lessonFlatIndexOffset += course.modules[i].lessons.length;
                }

                return (
                <AccordionItem value={moduleItem.id} key={moduleItem.id}>
                  <AccordionTrigger className="text-base font-semibold">
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">
                        Sección {moduleIndex + 1}
                      </p>
                      <p>{moduleItem.title}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {moduleItem.lessons.map((lessonItem, lessonIndex) => {
                        const flatIndex = lessonFlatIndexOffset + lessonIndex;
                        const isCompleted = completedLessons.has(lessonItem.id);
                        const isCurrent = currentLesson?.lessonId === lessonItem.id;
                        const isLocked = !isCompleted && flatIndex > lastCompletedLessonIndex + 1;

                        return (
                          <li key={lessonItem.id}>
                            <Button
                              variant={isCurrent ? "secondary" : "ghost"}
                              className="w-full justify-start h-auto py-2"
                              onClick={() =>
                                handleSetLesson(moduleItem.id, lessonItem.id)
                              }
                              disabled={isLocked}
                            >
                              {isLocked ? (
                                <Lock className="w-4 h-4 mr-3" />
                              ) : isCompleted ? (
                                <CheckCircle2 className="w-4 h-4 mr-3 text-green-500" />
                              ) : (
                                <PlayCircle className="w-4 h-4 mr-3" />
                              )}
                              <div className="flex flex-col items-start">
                                <span className="font-normal text-sm text-left">
                                  {lessonItem.title}
                                </span>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span>{lessonItem.duration}</span>
                                    {lessonItem.difficulty && (
                                        <>
                                            <span className="text-muted-foreground/50">·</span>
                                            <div className="flex items-center gap-1">
                                                <BarChart3 className="w-3 h-3" />
                                                <span>{lessonItem.difficulty}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                              </div>
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )})}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
