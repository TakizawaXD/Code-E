import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { learningPaths } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PathsPage() {
  return (
    <div className="container py-8 md:py-12">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl">
          Rutas de Aprendizaje
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Nuestras rutas de aprendizaje te guían desde cero hasta convertirte en un profesional en un área específica.
        </p>
      </header>
      
      <div className="space-y-16">
        {learningPaths.map((path) => (
          <section key={path.id} className="border-b last:border-b-0 pb-12 last:pb-0">
            <div className="mb-6">
              <h2 className="text-3xl font-bold tracking-tight font-headline">{path.title}</h2>
              <p className="mt-2 text-muted-foreground max-w-3xl">{path.description}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {path.courses.slice(0, 4).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {path.courses.length > 4 && (
                <div className="mt-6 text-center">
                    <Button variant="outline" asChild>
                        <Link href="/courses">
                            Ver todos los cursos de la ruta <ChevronRight className="w-4 h-4 ml-2"/>
                        </Link>
                    </Button>
                </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
