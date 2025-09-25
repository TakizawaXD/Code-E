
"use client";

import { useMemo } from "react";
import { CourseCard } from "@/components/course-card";
import { courses as allCourses, learningPaths as allLearningPaths } from "@/lib/data";
import type { Course, LearningPath } from "@/lib/types";
import { useSearchParams } from "next/navigation";

export default function CoursesPage() {
    const searchParams = useSearchParams();
    const pathFilter = searchParams.get('path');
    
    const learningPaths = allLearningPaths;
    const courses = useMemo(() => {
        if (pathFilter) {
            return allCourses.filter(c => c.pathId === pathFilter);
        }
        return allCourses;
    }, [pathFilter]);

    const coursesByPath = useMemo(() => {
        return courses.reduce((acc, course) => {
            const path = learningPaths.find(p => p.id === course.pathId);
            if (path) {
                if (!acc[path.id]) {
                    acc[path.id] = { ...path, courses: [] };
                }
                acc[path.id].courses.push(course);
            }
            return acc;
        }, {} as { [key: string]: LearningPath & { courses: Course[] } });

    }, [courses, learningPaths]);
    
    const pathsToRender = pathFilter ? (learningPaths?.filter(p => p.id === pathFilter) || []) : (learningPaths || []);

    return (
        <div className="container py-8 md:py-12">
            <header className="mb-8 md:mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl">
                    Catálogo de Cursos
                </h1>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explora nuestra completa colección de cursos. Hay algo para todos, sin importar tu nivel de experiencia.
                </p>
            </header>

            <div className="space-y-12">
                {pathsToRender.length > 0 ? pathsToRender.map((path) => (
                    <section key={path.id}>
                        <h2 className="text-2xl font-bold tracking-tight font-headline md:text-3xl border-b pb-2 mb-6">
                            {path.title}
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {coursesByPath[path.id]?.courses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                        {(!coursesByPath[path.id]?.courses || coursesByPath[path.id].courses.length === 0) && (
                            <p className="text-muted-foreground">No hay cursos disponibles en esta ruta de aprendizaje por el momento.</p>
                        )}
                    </section>
                )) : (
                    <div className="text-center py-10">
                        <p className="text-muted-foreground">No se encontraron cursos que coincidan con tu búsqueda.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
