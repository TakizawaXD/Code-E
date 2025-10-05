

"use client";

import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { allSchools } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PathsPage() {
  return (
    <div className="container py-8 md:py-12">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl">
          Rutas de Aprendizaje por Escuela
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora nuestras escuelas y sigue una ruta de aprendizaje estructurada para dominar una habilidad desde cero hasta un nivel experto.
        </p>
      </header>
      
      <div className="space-y-16">
        {allSchools.map((school) => (
          <section key={school.id} id={school.id} className="scroll-mt-20">
            <h2 className="text-3xl font-bold tracking-tight font-headline border-b pb-3 mb-8">{school.title}</h2>
            <div className="space-y-12">
                {school.learningPaths.map((path) => (
                    <div key={path.id} className="border-b last:border-b-0 pb-10">
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold">{path.title}</h3>
                            <p className="mt-1 text-muted-foreground">{path.description}</p>
                        </div>
                        
                        {path.courses.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {path.courses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted-foreground">No hay cursos disponibles para esta ruta.</p>
                        )}
                        
                        <div className="mt-6">
                             <Button variant="outline" size="sm">Agregar ruta</Button>
                        </div>
                    </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
