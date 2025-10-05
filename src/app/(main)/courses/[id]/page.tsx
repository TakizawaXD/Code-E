
"use client";

import { notFound, useSearchParams, useRouter } from "next/navigation";
import React, { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import { useUser } from "@/firebase";
import { courses as allCourses } from "@/lib/data";
import type { Course, Lesson, CourseModule } from "@/lib/types";
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
  Youtube,
  Loader2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { QuizComponent } from "@/components/quiz";
import { Badge } from "@/components/ui/badge";

function getNextLesson(modules: CourseModule[], currentModuleId: string, currentLessonId: string): { moduleId: string; lessonId: string } | null {
  const currentModuleIndex = modules.findIndex(m => m.id === currentModuleId);
  if (currentModuleIndex === -1) return null;

  const currentModule = modules[currentModuleIndex];
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLessonId);
  if (currentLessonIndex === -1) return null;

  if (currentLessonIndex < currentModule.lessons.length - 1) {
    return { moduleId: currentModuleId, lessonId: currentModule.lessons[currentLessonIndex + 1].id };
  }

  if (currentModuleIndex < modules.length - 1) {
    const nextModule = modules[currentModuleIndex + 1];
    if (nextModule.lessons.length > 0) {
      return { moduleId: nextModule.id, lessonId: nextModule.lessons[0].id };
    }
  }

  return null;
}


function CourseDetailContent({ courseId }: { courseId: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user } = useUser();

    const course = useMemo(() => {
        return allCourses.find((c) => c.id === courseId);
    }, [courseId]);

    const [currentLesson, setCurrentLesson] = useState<{
        moduleId: string;
        lessonId: string;
    } | null>(null);

    const { lesson, module } = useMemo(() => {
        if (!course || !currentLesson) return { lesson: null, module: null };
        const foundModule = course.modules.find(m => m.id === currentLesson.moduleId);
        if (!foundModule) return { lesson: null, module: null };
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

    // Mock progress
    const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

    const lastCompletedLessonIndex = useMemo(() => {
        if (!course || completedLessons.size === 0) return -1;
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
    }, [course, completedLessons]);

    const handleSetLesson = (moduleId: string, lessonId: string) => {
        if (!course) return;
        setCurrentLesson({ moduleId, lessonId });
        const newUrl = `/courses/${course.id}?module=${moduleId}&lesson=${lessonId}`;
        router.push(newUrl, { scroll: false });
    };

    const handleMarkAsCompleted = () => {
        if (!user || !course || !currentLesson || completedLessons.has(currentLesson.lessonId)) return;
        
        setCompletedLessons(prev => new Set(prev).add(currentLesson.lessonId));

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
            case 'Fácil': return <Badge variant="secondary" className="bg-green-100 text-green-800">Fácil</Badge>;
            case 'Medio': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Medio</Badge>;
            case 'Difícil': return <Badge variant="secondary" className="bg-red-100 text-red-800">Difícil</Badge>;
            default: return null;
        }
    };
    
    if (!course || !currentLesson) {
        return <div className="container flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin" /></div>;
    }

    const instructorAvatar = { imageUrl: course.instructorAvatarUrl, name: course.instructor };

    return (
    <div className="container mx-auto py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1 lg:order-last">
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
                                        {lessonItem.youtubeVideoId && (
                                            <>
                                                <span className="text-muted-foreground/50">·</span>
                                                <div className="flex items-center gap-1">
                                                    <Youtube className="w-3 h-3 text-red-500" />
                                                    <span>Video</span>
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

        <div className="lg:col-span-2 space-y-6 lg:order-first">
            <div className="flex justify-between items-start flex-wrap gap-4">
                <h1 className="text-2xl font-bold font-headline animate-in fade-in slide-in-from-top-4 duration-500">{lesson?.title || course.title}</h1>
                <div className="flex gap-2 items-center animate-in fade-in slide-in-from-top-4 duration-500">
                    {lesson?.difficulty && getDifficultyBadge(lesson.difficulty)}
                    <Button variant="outline" onClick={handleMarkAsCompleted} disabled={completedLessons.has(lesson?.id || "")}>
                        <CheckCircle2 className="mr-2"/>
                        {completedLessons.has(lesson?.id || "") ? "Completada" : "Marcar como completada"}
                    </Button>
                </div>
            </div>
            
            <Separator />

            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                {lesson?.imageUrl && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                    src={lesson.imageUrl}
                    alt={lesson.title}
                    fill
                    className="object-cover"
                    data-ai-hint="lesson topic"
                    />
                </div>
                )}

                {lesson?.youtubeVideoId && (
                <div className="aspect-video w-full">
                    <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${lesson.youtubeVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                )}

                {lesson?.content ? (
                    <Card>
                        <CardContent className="prose dark:prose-invert max-w-none pt-6" dangerouslySetInnerHTML={{ __html: lesson.content }} />
                    </Card>
                ) : null}

                {lesson?.quiz ? (
                <QuizComponent quiz={lesson.quiz} />
                ) : (
                !lesson?.content && !lesson.imageUrl && !lesson.youtubeVideoId && (
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

            <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                <MessageSquare className="w-6 h-6" /> Comentarios
                </h2>
                <Card>
                <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                    La sección de comentarios estará disponible próximamente.
                    </p>
                </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
    );
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="container flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin" /></div>}>
        <CourseDetailContent courseId={id} />
    </Suspense>
  );
}
