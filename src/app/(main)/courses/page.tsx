"use client";

import { CourseCard } from "@/components/course-card";
import { useFirebase, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from 'firebase/firestore';
import type { Course, LearningPath } from "@/lib/types";

function CoursesList({ pathId }: { pathId: string }) {
    const { firestore } = useFirebase();
    const coursesQuery = useMemoFirebase(() => query(collection(firestore, 'learningPaths', pathId, 'courses')), [firestore, pathId]);
    const { data: courses, isLoading } = useCollection<Course>(coursesQuery);

    if (isLoading) {
        return <p>Cargando cursos...</p>;
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses?.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
}

export default function CoursesPage() {
    const { firestore } = useFirebase();
    const pathsQuery = useMemoFirebase(() => query(collection(firestore, 'learningPaths'), orderBy('title')), [firestore]);
    const { data: learningPaths, isLoading } = useCollection<LearningPath>(pathsQuery);

    if (isLoading) {
        return <div className="container py-8 md:py-12 text-center">Cargando...</div>;
    }

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
                {learningPaths?.map((path) => (
                    <section key={path.id}>
                        <h2 className="text-2xl font-bold tracking-tight font-headline md:text-3xl border-b pb-2 mb-6">
                            {path.title}
                        </h2>
                        <CoursesList pathId={path.id} />
                    </section>
                ))}
            </div>
        </div>
    );
}
