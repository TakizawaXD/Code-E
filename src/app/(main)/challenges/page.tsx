"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { allSchools } from '@/lib/data';
import type { Project } from '@/lib/types';
import { Github, Swords, CalendarClock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getWeek, getDay, addWeeks, startOfWeek, endOfWeek, format } from 'date-fns';
import { es } from 'date-fns/locale';

function getWeekNumber(date: Date) {
  // getWeek uses ISO 8601 week numbering.
  return getWeek(date);
}

function Countdown({ to }: { to: Date }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = to.getTime() - now.getTime();

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [to]);

    return (
        <div className="flex justify-center gap-4 sm:gap-6 text-center">
            <div>
                <div className="text-2xl sm:text-4xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground uppercase">Días</div>
            </div>
             <div>
                <div className="text-2xl sm:text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground uppercase">Horas</div>
            </div>
             <div>
                <div className="text-2xl sm:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground uppercase">Minutos</div>
            </div>
             <div>
                <div className="text-2xl sm:text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground uppercase">Segundos</div>
            </div>
        </div>
    );
}


export default function WeeklyChallengePage() {
    const allProjects = useMemo(() => {
        return allSchools.flatMap(school => school.learningPaths.flatMap(path => path.projects || []));
    }, []);

    const [weeklyProject, setWeeklyProject] = useState<Project | null>(null);
    const [endDate, setEndDate] = useState<Date>(new Date());
    
    useEffect(() => {
        const now = new Date();
        const currentWeek = getWeekNumber(now);
        const year = now.getFullYear();
        
        // Consistent "randomness" based on the week number and year
        const seed = currentWeek + year;
        const randomIndex = seed % allProjects.length;
        setWeeklyProject(allProjects[randomIndex]);

        const endOfWeekDate = endOfWeek(now, { weekStartsOn: 1 }); // Monday is the start
        setEndDate(endOfWeekDate);

    }, [allProjects]);

    const getLevelBadge = (level: 'Fácil' | 'Intermedio' | 'Avanzado') => {
        switch (level) {
            case 'Fácil': return <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Fácil</Badge>;
            case 'Intermedio': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Intermedio</Badge>;
            case 'Avanzado': return <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Avanzado</Badge>;
            default: return null;
        }
    };

    if (!weeklyProject) {
        return <div>Cargando reto...</div>;
    }

    return (
        <div className="container py-8 md:py-12">
            <header className="mb-8 md:mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl flex items-center justify-center gap-4">
                    <Swords className="w-10 h-10 text-primary" />
                    Reto de la Semana
                </h1>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Cada semana, un nuevo proyecto para poner a prueba tus habilidades. ¡Acepta el desafío!
                </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-8">
                 <Card className="border-2 border-primary shadow-lg">
                    <CardHeader className="text-center">
                        <div className="flex justify-center items-center gap-4 mb-2">
                           <CardTitle className="text-2xl md:text-3xl">{weeklyProject.title}</CardTitle>
                           {getLevelBadge(weeklyProject.level)}
                        </div>
                        <CardDescription className="text-base">
                            {weeklyProject.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground text-center mb-6">
                           Este proyecto está diseñado para ayudarte a practicar los conceptos del desarrollo de software en un escenario realista. ¡No te preocupes por hacerlo perfecto, enfócate en aprender y completar el reto!
                        </p>
                         <div className="text-center">
                             <Button asChild>
                                <a href={weeklyProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Ver en GitHub y Empezar
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center flex items-center justify-center gap-2">
                           <CalendarClock className="w-5 h-5"/>
                           Tiempo Restante
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Countdown to={endDate} />
                    </CardContent>
                    <CardFooter className="text-center text-xs text-muted-foreground justify-center">
                       <p>El reto cambia cada Lunes a las 00:00.</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}