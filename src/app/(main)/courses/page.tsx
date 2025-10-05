
"use client";

import { useMemo, Suspense } from "react";
import { CourseCard } from "@/components/course-card";
import { allSchools } from "@/lib/data";
import type { Course, LearningPath } from "@/lib/types";
import { useSearchParams } from "next/navigation";

function CoursesContent() {
    const searchParams = useSearchParams();
    const pathFilter = searchParams.get('path');
    const searchQuery = searchParams.get('q');
    
    // Flatten courses and learning paths from schools for easier lookup
    const allCourses = useMemo(() => allSchools.flatMap(school => school.learningPaths.flatMap(path => path.courses)), []);
    const allLearningPaths = useMemo(() => allSchools.flatMap(school => school.learningPaths), []);

    const filteredCourses = useMemo(() => {
        let courses = allCourses;
        
        if (pathFilter) {
            const school = allSchools.find(s => s.id === pathFilter);
            if (school) {
                courses = school.learningPaths.flatMap(p => p.courses);
            }
        }

        if (searchQuery) {
            const lowercasedQuery = searchQuery.toLowerCase();
            courses = courses.filter(c => {
                const instructorMatch = Array.isArray(c.instructor) 
                    ? c.instructor.some(i => i.toLowerCase().includes(lowercasedQuery))
                    : c.instructor.toLowerCase().includes(lowercasedQuery);
                
                return c.title.toLowerCase().includes(lowercasedQuery) ||
                       (c.description || '').toLowerCase().includes(lowercasedQuery) ||
                       instructorMatch;
            });
        }
        return courses;
    }, [pathFilter, searchQuery, allCourses, allSchools]);

    const coursesByPath = useMemo(() => {
        const pathsMap: { [key: string]: LearningPath & { courses: Course[] } } = {};
        
        filteredCourses.forEach(course => {
            const path = allLearningPaths.find(p => p.courses.some(pc => pc.id === course.id));
            if (path) {
                if (!pathsMap[path.id]) {
                    pathsMap[path.id] = { ...path, courses: [] };
                }
                pathsMap[path.id].courses.push(course);
            }
        });

        // If filtering by a specific school, make sure we show all its paths, even if empty after a search
        if (pathFilter) {
            const school = allSchools.find(s => s.id === pathFilter);
            school?.learningPaths.forEach(path => {
                if (!pathsMap[path.id]) {
                    pathsMap[path.id] = { ...path, courses: [] };
                }
            });
        }

        return pathsMap;
    }, [filteredCourses, allLearningPaths, pathFilter, allSchools]);
    
    const pathsToRender = useMemo(() => {
        const pathIds = Object.keys(coursesByPath);
        
        // If there are filters, render all paths that match the filters, even if they end up with no courses
        if (searchQuery || pathFilter) {
            return allLearningPaths
                .filter(p => pathIds.includes(p.id))
                .sort((a,b) => {
                    // Prioritize paths with courses
                    const aHasCourses = coursesByPath[a.id]?.courses.length > 0;
                    const bHasCourses = coursesByPath[b.id]?.courses.length > 0;
                    if (aHasCourses && !bHasCourses) return -1;
                    if (!aHasCourses && bHasCourses) return 1;
                    return 0;
                });
        }
        
        // If no filters, only render paths that actually have courses
        return allLearningPaths.filter(p => coursesByPath[p.id]?.courses.length > 0);

    }, [coursesByPath, allLearningPaths, searchQuery, pathFilter]);
    
    const currentSchool = allSchools.find(s => s.id === pathFilter);
    const pageTitle = currentSchool?.title || (searchQuery ? `Resultados para "${searchQuery}"` : "Catálogo de Cursos");
    const pageDescription = searchQuery 
        ? `Se encontraron ${filteredCourses.length} cursos.`
        : currentSchool 
        ? `Explora todos los cursos de la Escuela de ${currentSchool.title}.`
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
                        {coursesByPath[path.id]?.courses.length > 0 ? (
                             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {coursesByPath[path.id].courses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted-foreground text-sm">No se encontraron cursos en esta ruta para tu búsqueda actual.</p>
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
