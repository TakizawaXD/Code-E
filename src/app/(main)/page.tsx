import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { learningPaths } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseCard } from "@/components/course-card";

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'course-react');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Desbloquea tu Potencial en Programación
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Únete a Code-E y transforma tu carrera con cursos diseñados por expertos de la industria. Aprende a tu propio ritmo.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group">
                    <Link href="/courses">
                      Explorar Cursos
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src={heroImage?.imageUrl ?? ''}
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                data-ai-hint={heroImage?.imageHint}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Rutas de Aprendizaje</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sigue nuestras rutas de aprendizaje estructuradas para dominar una habilidad desde los fundamentos hasta un nivel avanzado.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {learningPaths.map((path) => (
                <Link key={path.id} href="/paths">
                  <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Cursos Populares</h2>
                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Echa un vistazo a nuestros cursos más populares y empieza a aprender hoy mismo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
                {learningPaths.slice(0, 1).flatMap(path => path.courses).map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
            <div className="text-center">
                <Button asChild variant="outline">
                    <Link href="/courses">Ver todos los cursos</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
