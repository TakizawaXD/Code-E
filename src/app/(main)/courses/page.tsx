
"use client";

import { useMemo } from "react";
import { CourseCard } from "@/components/course-card";
import { useFirebase, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, where } from 'firebase/firestore';
import type { Course, LearningPath } from "@/lib/types";
import { useSearchParams } from "next/navigation";

export default function CoursesPage() {
    const { firestore } = useFirebase();
    const searchParams = useSearchParams();
    const pathFilter = searchParams.get('path');
    
    const pathsQuery = useMemoFirebase(() => firestore ? query(collection(firestore, 'learningPaths'), orderBy('title')) : null, [firestore]);
    const { data: learningPaths, isLoading: pathsLoading } = useCollection<LearningPath>(pathsQuery);

    const coursesQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        if (pathFilter) {
            return query(collection(firestore, 'courses'), where('pathId', '==', pathFilter), orderBy('title'));
        }
        return query(collection(firestore, 'courses'), orderBy('title'));
    }, [firestore, pathFilter]);
    const { data: courses, isLoading: coursesLoading } = useCollection<Course>(coursesQuery);

    const coursesByPath = useMemo(() => {
        if (!courses || !learningPaths) return {};
        
        const pathsById = learningPaths.reduce((acc, path) => {
            acc[path.id] = { ...path, courses: [] };
            return acc;
        }, {} as { [key: string]: LearningPath & { courses: Course[] } });

        courses.forEach(course => {
            if (pathsById[course.pathId]) {
                pathsById[course.pathId].courses.push(course);
            }
        });

        // if there's a filter, only return that path
        if (pathFilter && pathsById[pathFilter]) {
            return { [pathFilter]: pathsById[pathFilter] };
        }

        return pathsById;
    }, [courses, learningPaths, pathFilter]);

    const isLoading = pathsLoading || coursesLoading;

    if (isLoading) {
        return <div className="container py-8 md:py-12 text-center">Cargando...</div>;
    }
    
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
                {pathsToRender.map((path) => (
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
                ))}
            </div>
        </div>
    );
}
