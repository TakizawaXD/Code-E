"use client";

import { notFound, useSearchParams } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { allCourses, user } from "@/lib/data";
import type { Course, Lesson, CourseModule } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
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
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { QuizComponent } from "@/components/quiz";

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const searchParams = useSearchParams();
  const course = allCourses.find((c) => c.id === params.id);

  const [currentLesson, setCurrentLesson] = useState<{
    moduleId: string;
    lessonId: string;
  } | null>(null);

  const { lesson, module, lessonIndex, moduleIndex, totalLessons, currentLessonIndex } = useMemo(() => {
    if (!course || !currentLesson) {
      return { lesson: null, module: null, lessonIndex: -1, moduleIndex: -1, totalLessons: 0, currentLessonIndex: -1 };
    }

    const moduleIndex = course.modules.findIndex(
      (m) => m.id === currentLesson.moduleId
    );
    const module = course.modules[moduleIndex];
    const lessonIndex = module?.lessons.findIndex(
      (l) => l.id === currentLesson.lessonId
    );
    const lesson = module?.lessons[lessonIndex];

    let totalLessons = 0;
    let lessonsSoFar = 0;
    let currentLessonIdx = -1;

    course.modules.forEach((mod, mIdx) => {
      totalLessons += mod.lessons.length;
      if (mIdx < moduleIndex) {
        lessonsSoFar += mod.lessons.length;
      } else if (mIdx === moduleIndex) {
        lessonsSoFar += lessonIndex;
        currentLessonIdx = lessonsSoFar;
      }
    });

    return { lesson, module, lessonIndex, moduleIndex, totalLessons, currentLessonIndex: currentLessonIdx };
  }, [course, currentLesson]);

  useEffect(() => {
    const moduleId = searchParams.get("module");
    const lessonId = searchParams.get("lesson");

    if (moduleId && lessonId) {
      setCurrentLesson({ moduleId, lessonId });
    } else if (course && course.modules.length > 0 && course.modules[0].lessons.length > 0) {
      // Set the first lesson as default
      setCurrentLesson({
        moduleId: course.modules[0].id,
        lessonId: course.modules[0].lessons[0].id,
      });
    }
  }, [searchParams, course]);


  if (!course) {
    notFound();
  }

  const handleSetLesson = (moduleId: string, lessonId: string) => {
    setCurrentLesson({ moduleId, lessonId });
    // Update URL without reloading the page
    const newUrl = `/courses/${course.id}?module=${moduleId}&lesson=${lessonId}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };
  
  const handleNextLesson = () => {
    if (!course || !module || lessonIndex === -1) return;
    
    if (lessonIndex < module.lessons.length - 1) {
      handleSetLesson(module.id, module.lessons[lessonIndex + 1].id);
    } else if (moduleIndex < course.modules.length - 1) {
      const nextModule = course.modules[moduleIndex + 1];
      if (nextModule.lessons.length > 0) {
        handleSetLesson(nextModule.id, nextModule.lessons[0].id);
      }
    }
  };

  const handlePrevLesson = () => {
    if (!course || !module || lessonIndex === -1) return;

    if (lessonIndex > 0) {
      handleSetLesson(module.id, module.lessons[lessonIndex - 1].id);
    } else if (moduleIndex > 0) {
      const prevModule = course.modules[moduleIndex - 1];
      if (prevModule.lessons.length > 0) {
        handleSetLesson(prevModule.id, prevModule.lessons[prevModule.lessons.length - 1].id);
      }
    }
  };

  const instructorAvatar = PlaceHolderImages.find(
    (img) => img.id === course.instructorAvatar
  );
  
  const isFirstLesson = currentLessonIndex === 0;
  const isLastLesson = currentLessonIndex === totalLessons - 1;


  return (
    <div className="container mx-auto py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-video w-full bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
            <PlayCircle className="w-20 h-20 text-muted-foreground" />
             {lesson?.videoUrl && (
              <iframe
                src={lesson.videoUrl}
                title={lesson.title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-headline">{lesson?.title || course.title}</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handlePrevLesson} disabled={isFirstLesson}>
                <ArrowLeft />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNextLesson} disabled={isLastLesson}>
                <ArrowRight />
              </Button>
            </div>
          </div>
          
          <Separator />
          
           {lesson?.content && <p className="text-muted-foreground">{lesson.content}</p>}

          {lesson?.quiz ? (
             <QuizComponent quiz={lesson.quiz} />
          ) : (
             <Card>
                <CardHeader>
                    <CardTitle>Contenido de la Lección</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{lesson?.content || "El contenido de esta lección estará disponible pronto."}</p>
                </CardContent>
            </Card>
          )}

          <Separator />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MessageSquare className="w-6 h-6" /> Comentarios
            </h2>
            <div className="text-center text-muted-foreground border rounded-lg p-8">
              La sección de comentarios estará disponible próximamente.
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold mb-4">{course.title}</h2>
             <div className="flex items-center gap-4 mb-4">
                <Avatar>
                    <AvatarImage src={instructorAvatar?.imageUrl} alt={course.instructor} />
                    <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
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
            >
              {course.modules.map((moduleItem, index) => (
                <AccordionItem value={moduleItem.id} key={moduleItem.id}>
                  <AccordionTrigger className="text-base font-semibold">
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">
                        Sección {index + 1}
                      </p>
                      <p>{moduleItem.title}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {moduleItem.lessons.map((lessonItem, lessonIndex) => {
                        const isCompleted = false; // Logic to determine completion
                        const isCurrent =
                          currentLesson?.lessonId === lessonItem.id;
                        const isLocked = false; // Logic to lock/unlock lessons

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
                                <span className="text-xs text-muted-foreground">
                                  {lessonItem.duration}
                                </span>
                              </div>
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
