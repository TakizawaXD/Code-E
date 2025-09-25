"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, LayoutGrid, MessageSquare, Trophy } from "lucide-react";

const communityFeatures = [
    {
        title: "Foros de Discusión",
        description: "Participa en conversaciones, haz preguntas y comparte tus conocimientos con otros estudiantes e instructores en foros dedicados para cada curso.",
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        link: "#forums"
    },
    {
        title: "Tabla de Clasificación",
        description: "Compite de forma amistosa con otros estudiantes. Gana puntos, sube en el ranking y demuestra tu dedicación.",
        icon: <Trophy className="w-8 h-8 text-primary" />,
        link: "#leaderboard"
    },
    {
        title: "Proyectos Colaborativos",
        description: "Únete a otros estudiantes para trabajar en proyectos del mundo real. Una gran oportunidad para construir tu portafolio y aprender en equipo.",
        icon: <Users className="w-8 h-8 text-primary" />,
        link: "#projects"
    },
    {
        title: "Galería de Proyectos",
        description: "Muestra los proyectos que has construido y obtén feedback de la comunidad. Inspírate viendo el trabajo de otros.",
        icon: <LayoutGrid className="w-8 h-8 text-primary" />,
        link: "#gallery"
    }
]

export default function CommunityPage() {
    return (
        <div className="container py-12 md:py-20">
            <header className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
                    Comunidad Code-E
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Aprender es mejor juntos. Conéctate, colabora y crece con miles de estudiantes y profesionales.
                </p>
            </header>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {communityFeatures.map((feature) => (
                    <Card key={feature.title} className="flex flex-col">
                        <CardHeader className="flex flex-row items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <CardTitle>{feature.title}</CardTitle>
                                <CardDescription className="mt-2">{feature.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-end">
                            <Button variant="outline" className="w-full" disabled>
                                Próximamente
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
