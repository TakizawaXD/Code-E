
"use client";

import { notFound, useSearchParams, useRouter } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  useFirebase,
  useCollection,
  useDoc,
  useMemoFirebase,
} from "@/firebase";
import type { Course, Lesson, CourseModule, Progress } from "@/lib/types";
import {
  collection,
  doc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
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
  BarChart3,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { QuizComponent } from "@/components/quiz";
import { addDocumentNonBlocking, setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { Badge } from "@/components/ui/badge";

function getNextLesson(course: Course, currentModuleId: string, currentLessonId: string): { moduleId: string; lessonId: string } | null {
  const currentModuleIndex = course.modules.findIndex(m => m.id === currentModuleId);
  if (currentModuleIndex === -1) return null;

  const currentModule = course.modules[currentModuleIndex];
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLessonId);
  if (currentLessonIndex === -1) return null;

  // Try to find the next lesson in the current module
  if (currentLessonIndex < currentModule.lessons.length - 1) {
    return { moduleId: currentModuleId, lessonId: currentModule.lessons[currentLessonIndex + 1].id };
  }

  // Try to find the first lesson in the next module
  if (currentModuleIndex < course.modules.length - 1) {
    const nextModule = course.modules[currentModuleIndex + 1];
    if (nextModule.lessons.length > 0) {
      return { moduleId: nextModule.id, lessonId: nextModule.lessons[0].id };
    }
  }

  return null;
}

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { firestore, user } = useFirebase();

  const courseRef = useMemoFirebase(
    () => (firestore ? doc(firestore, "courses", params.id) : null),
    [firestore, params.id]
  );
  const { data: course, isLoading: isCourseLoading } = useDoc<Course>(courseRef);

  const modulesRef = useMemoFirebase(
    () =>
      course
        ? query(collection(firestore, "courses", course.id, "modules"), orderBy("order"))
        : null,
    [firestore, course]
  );
  const { data: modules, isLoading: areModulesLoading } =
    useCollection<CourseModule>(modulesRef);

  const lessonsRefs = useMemo(
    () =>
      modules?.map((m) =>
        query(collection(firestore, "courses", params.id, "modules", m.id, "lessons"), orderBy("order"))
      ),
    [modules, params.id]
  );
  
  const lessonsData = lessonsRefs?.map(ref => useCollection<Lesson>(ref));
  const areLessonsLoading = lessonsData?.some(l => l.isLoading);

  const courseWithLessons = useMemo(() => {
    if (!course || !modules || !lessonsData) return null;
    
    const lessonsAreLoaded = lessonsData.every(l => !l.isLoading && l.data);
    if (!lessonsAreLoaded) return null;

    const populatedModules = modules.map((module, index) => {
      return {
        ...module,
        lessons: lessonsData[index].data || [],
      };
    });

    return { ...course, modules: populatedModules };
  }, [course, modules, lessonsData, areLessonsLoading]);

  const progressRef = useMemoFirebase(
    () =>
      user && course
        ? query(
            collection(firestore, "users", user.uid, "progress"),
            where("courseId", "==", course.id),
            limit(1)
          )
        : null,
    [user, course]
  );
  const { data: progressData, isLoading: isProgressLoading } =
    useCollection<Progress>(progressRef);
  const progress = progressData?.[0];
  
  const [currentLesson, setCurrentLesson] = useState<{
    moduleId: string;
    lessonId: string;
  } | null>(null);

  const { lesson, module, lessonIndex, moduleIndex, totalLessons, currentLessonFlatIndex } = useMemo(() => {
    if (!courseWithLessons || !currentLesson) {
      return { lesson: null, module: null, lessonIndex: -1, moduleIndex: -1, totalLessons: 0, currentLessonFlatIndex: -1 };
    }

    let flatIndex = 0;
    let currentLessonFlatIndex = -1;
    let totalLessonsCount = 0;
    
    let foundModule = null;
    let foundLesson = null;
    let foundModuleIndex = -1;
    let foundLessonIndex = -1;

    for(let mIdx = 0; mIdx < courseWithLessons.modules.length; mIdx++) {
      const mod = courseWithLessons.modules[mIdx];
      totalLessonsCount += mod.lessons.length;
      for(let lIdx = 0; lIdx < mod.lessons.length; lIdx++) {
        const less = mod.lessons[lIdx];
        if (mod.id === currentLesson.moduleId && less.id === currentLesson.lessonId) {
          foundModule = mod;
          foundLesson = less;
          foundModuleIndex = mIdx;
          foundLessonIndex = lIdx;
          currentLessonFlatIndex = flatIndex;
        }
        flatIndex++;
      }
    }

    return { 
      lesson: foundLesson, 
      module: foundModule, 
      lessonIndex: foundLessonIndex, 
      moduleIndex: foundModuleIndex, 
      totalLessons: totalLessonsCount, 
      currentLessonFlatIndex 
    };

  }, [courseWithLessons, currentLesson]);


  useEffect(() => {
    const moduleId = searchParams.get("module");
    const lessonId = searchParams.get("lesson");

    if (moduleId && lessonId) {
      setCurrentLesson({ moduleId, lessonId });
    } else if (courseWithLessons && courseWithLessons.modules.length > 0 && courseWithLessons.modules[0].lessons.length > 0) {
      const firstLesson = courseWithLessons.modules[0].lessons[0];
      handleSetLesson(courseWithLessons.modules[0].id, firstLesson.id);
    }
  }, [searchParams, courseWithLessons]);

  const completedLessons = useMemo(() => {
    return new Set(progress?.completedLessons || []);
  }, [progress]);
  
  const lastCompletedLessonIndex = useMemo(() => {
    if (!courseWithLessons || !progress || progress.completedLessons.length === 0) return -1;

    let flatIndex = -1;
    let lastIndex = -1;
    
    for (const mod of courseWithLessons.modules) {
        for (const less of mod.lessons) {
            flatIndex++;
            if (completedLessons.has(less.id)) {
                lastIndex = flatIndex;
            }
        }
    }
    return lastIndex;
  }, [courseWithLessons, progress, completedLessons]);

  const handleSetLesson = (moduleId: string, lessonId: string) => {
    setCurrentLesson({ moduleId, lessonId });
    const newUrl = `/courses/${params.id}?module=${moduleId}&lesson=${lessonId}`;
    router.push(newUrl, { scroll: false });
  };
  
  const handleMarkAsCompleted = async () => {
    if (!user || !firestore || !courseWithLessons || !currentLesson) return;

    const nextLesson = getNextLesson(courseWithLessons, currentLesson.moduleId, currentLesson.lessonId);
    
    const newCompletedLessons = Array.from(new Set([...completedLessons, currentLesson.lessonId]));

    if (progress) {
      const progressDocRef = doc(firestore, "users", user.uid, "progress", progress.id);
      await setDocumentNonBlocking(progressDocRef, { completedLessons: newCompletedLessons }, { merge: true });
    } else {
       const progressColRef = collection(firestore, "users", user.uid, "progress");
       await addDocumentNonBlocking(progressColRef, {
        courseId: courseWithLessons.id,
        completedLessons: newCompletedLessons,
        completed: false,
       });
    }

    if (nextLesson) {
      handleSetLesson(nextLesson.moduleId, nextLesson.lessonId);
    } else {
      // Last lesson completed
      if (progress) {
        const progressDocRef = doc(firestore, "users", user.uid, "progress", progress.id);
        await setDocumentNonBlocking(progressDocRef, { completed: true }, { merge: true });
      }
    }
  };

  if (isCourseLoading || areModulesLoading || areLessonsLoading || isProgressLoading) {
    return <div>Cargando...</div>;
  }
  
  if (!courseWithLessons) {
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
              value={currentLesson?.moduleId}
            >
              {courseWithLessons.modules.map((moduleItem, moduleIndex) => {
                let lessonFlatIndexOffset = 0;
                for(let i = 0; i < moduleIndex; i++) {
                    lessonFlatIndexOffset += courseWithLessons.modules[i].lessons.length;
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

    