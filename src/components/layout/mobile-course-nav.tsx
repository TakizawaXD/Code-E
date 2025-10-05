
"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle2, Lock } from "lucide-react";
import type { Course } from "@/lib/types";
import { useMemo } from "react";

interface MobileCourseNavProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  course: Course;
  currentLesson: { moduleId: string; lessonId: string } | null;
  completedLessons: Set<string>;
  handleSetLesson: (moduleId: string, lessonId: string) => void;
}

export function MobileCourseNav({
  isOpen,
  onOpenChange,
  course,
  currentLesson,
  completedLessons,
  handleSetLesson,
}: MobileCourseNavProps) {
    
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

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[80%] flex flex-col">
        <SheetHeader>
          <SheetTitle>{course.title}</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <Accordion
            type="single"
            collapsible
            defaultValue={currentLesson?.moduleId}
            className="w-full"
            value={currentLesson?.moduleId || ""}
          >
            {course.modules.map((moduleItem, moduleIndex) => {
              let lessonFlatIndexOffset = 0;
              for (let i = 0; i < moduleIndex; i++) {
                lessonFlatIndexOffset += course.modules[i].lessons.length;
              }

              return (
                <AccordionItem value={moduleItem.id} key={moduleItem.id}>
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
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
                        const isLocked = flatIndex > lastCompletedLessonIndex + 1;

                        return (
                          <li key={lessonItem.id}>
                            <Button
                              variant={isCurrent ? "secondary" : "ghost"}
                              className="w-full justify-start h-auto py-2 px-4 text-left"
                              onClick={() => handleSetLesson(moduleItem.id, lessonItem.id)}
                              disabled={isLocked}
                            >
                              <div className="flex items-center gap-3">
                                {isLocked ? (
                                  <Lock className="w-4 h-4 shrink-0 text-muted-foreground" />
                                ) : isCompleted ? (
                                  <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" />
                                ) : (
                                  <PlayCircle className="w-4 h-4 shrink-0 text-muted-foreground" />
                                )}
                                <span className="font-normal text-sm leading-snug">
                                  {lessonItem.title}
                                </span>
                              </div>
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
