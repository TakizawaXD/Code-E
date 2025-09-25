
"use client";

import { useMemo, Suspense } from "react";
import { CourseCard } from "@/components/course-card";
import { courses as allCourses, learningPaths as allLearningPaths } from "@/lib/data";
import type { Course, LearningPath } from "@/lib/types";
import { useSearchParams } from "next/navigation";

function CoursesContent() {
    const searchParams = useSearchParams();
    const pathFilter = searchParams.get('path');
    const searchQuery = searchParams.get('q');
    
    const learningPaths = allLearningPaths;
    
    const filteredCourses = useMemo(() => {
        let courses = allCourses;

        if (pathFilter) {
            courses = courses.filter(c => c.pathId === pathFilter);
        }

        if (searchQuery) {
            const lowercasedQuery = searchQuery.toLowerCase();
            courses = courses.filter(c => 
                c.title.toLowerCase().includes(lowercasedQuery) ||
                c.description.toLowerCase().includes(lowercasedQuery) ||
                c.instructor.toLowerCase().includes(lowercasedQuery)
            );
        }

        return courses;
    }, [pathFilter, searchQuery]);

    const coursesByPath = useMemo(() => {
        return filteredCourses.reduce((acc, course) => {
            const path = learningPaths.find(p => p.id === course.pathId);
            if (path) {
                if (!acc[path.id]) {
                    acc[path.id] = { ...path, courses: [] };
                }
                acc[path.id].courses.push(course);
            }
            return acc;
        }, {} as { [key: string]: LearningPath & { courses: Course[] } });

    }, [filteredCourses, learningPaths]);
    
    let pathsToRender;
    if (pathFilter) {
        pathsToRender = learningPaths?.filter(p => p.id === pathFilter) || [];
    } else if (searchQuery) {
        // If there's a search query, render all paths that have matching courses
        pathsToRender = learningPaths?.filter(p => coursesByPath[p.id]?.courses.length > 0) || [];
    } else {
        pathsToRender = learningPaths || [];
    }
    
    const pageTitle = searchQuery ? `Resultados para "${searchQuery}"` : "Catálogo de Cursos";
    const pageDescription = searchQuery 
        ? `Se encontraron ${filteredCourses.length} cursos.`
        : "Explora nuestra completa colección de cursos. Hay algo para todos, sin importar tu nivel de experiencia.";

    return (
        <div className="container py-8 md:py-12">
            <header className="mb-8 md:mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl">
                    {pageTitle}
                </h1>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {pageDescription}
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

export default function CoursesPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <CoursesContent />
        </Suspense>
    );
}
