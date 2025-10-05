

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Book, BrainCircuit, Blocks, Briefcase, BookText, Cloud, Code, Database, Film, Landmark, Laptop, LineChart, Paintbrush, PenTool, Shield, Smartphone, TrendingUp, Users, Rocket, HeartPulse, Scale, Video, Languages, Lightbulb, Search, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CourseCard } from "@/components/course-card";
import { courses as allCourses, learningPaths as allLearningPaths } from "@/lib/data";
import { cn } from "@/lib/utils";
import images from "@/lib/placeholder-images.json";

function PopularCourses() {
    const courses = allCourses.slice(0, 3);

    return (
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {courses?.map(course => <CourseCard key={course.id} course={course} />)}
        </div>
    );
}

const learningCategories = [
    { name: "Desarrollo Web", paths: 16, icon: <Code /> },
    { name: "Inteligencia Artificial y Data Science", paths: 6, icon: <BrainCircuit /> },
    { name: "Diseño de Producto y UX", paths: 13, icon: <PenTool /> },
    { name: "Cloud Computing y DevOps", paths: 9, icon: <Cloud /> },
    { name: "Recursos Humanos", paths: 8, icon: <Users /> },
    { name: "Negocios", paths: 11, icon: <Briefcase /> },
    { name: "English Academy", paths: 7, icon: <Languages /> },
    { name: "Ciberseguridad", paths: 5, icon: <Shield /> },
    { name: "Desarrollo Móvil", paths: 9, icon: <Smartphone /> },
    { name: "Blockchain y Web3", paths: 7, icon: <Blocks /> },
    { name: "Finanzas e Inversiones", paths: 6, icon: <LineChart /> },
    { name: "Diseño Gráfico y Arte Digital", paths: 7, icon: <Paintbrush /> },
    { name: "Marketing Digital", paths: 15, icon: <TrendingUp /> },
    { name: "Liderazgo y Habilidades Blandas", paths: 10, icon: <Lightbulb /> },
    { name: "Contenido Audiovisual", paths: 7, icon: <Video /> },
    { name: "Programación", paths: 12, icon: <Laptop /> },
    { name: "Startups", paths: 10, icon: <Rocket /> }
];

function LearningCategories() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Explora Nuestras Categorías</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Desde desarrollo web hasta inteligencia artificial, tenemos una ruta de aprendizaje para ti.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-2 gap-4 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {learningCategories.map((category) => (
                        <Link key={category.name} href={`/paths#${category.name.toLowerCase().replace(/ y | & /g, '-').replace(/ /g, '-')}`}>
                            <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center p-4 text-center">
                                <div className="mb-3 text-primary h-8 w-8 flex items-center justify-center">{category.icon}</div>
                                <CardTitle className="text-sm font-semibold">{category.name}</CardTitle>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default function HomePage() {
  const learningPaths = allLearningPaths.slice(0, 5); // Show first 5 paths on home
  const heroImage = images['hero-image'];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Domina las habilidades más demandadas del mercado laboral
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Aprende sin límite con los más de 1.900 cursos online de programación, IA, inglés, marketing, ciberseguridad, liderazgo y más.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group">
                    <Link href="/paths">
                      Explorar Rutas
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src={heroImage}
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                data-ai-hint="programming abstract"
                priority
              />
            </div>
          </div>
        </section>

        <LearningCategories />

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
            <PopularCourses />
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
