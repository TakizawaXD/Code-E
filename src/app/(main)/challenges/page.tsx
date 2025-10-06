
"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { weeklyChallenges, type WeeklyChallenge } from '@/lib/data';
import { Github, Swords, CalendarClock, Send, Loader2, Award, Star, Shield, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { submitChallengeAction } from './actions';
import { endOfWeek } from 'date-fns';
import { SiJavascript, SiPython, SiTypescript, SiRust, SiGo, SiPhp, SiKotlin, SiSwift, SiCodio } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const ICONS: Record<string, React.ReactNode> = {
    javascript: <SiJavascript className="w-5 h-5" />,
    python: <SiPython className="w-5 h-5" />,
    java: <FaJava className="w-5 h-5" />,
    go: <SiGo className="w-5 h-5" />,
    rust: <SiRust className="w-5 h-5" />,
    php: <SiPhp className="w-5 h-5" />,
    csharp: <SiCodio className="w-5 h-5" />,
    swift: <SiSwift className="w-5 h-5" />,
    kotlin: <SiKotlin className="w-5 h-5" />,
    typescript: <SiTypescript className="w-5 h-5" />,
};

const DIFFICULTY_LEVELS: { id: WeeklyChallenge['difficulty'], label: string, icon: React.ReactNode }[] = [
    { id: 'Fácil', label: 'Fácil', icon: <Star className="w-4 h-4" /> },
    { id: 'Mediano', label: 'Mediano', icon: <Shield className="w-4 h-4" /> },
    { id: 'Complicado', label: 'Complicado', icon: <Award className="w-4 h-4" /> },
    { id: 'Experto', label: 'Experto', icon: <Trophy className="w-4 h-4" /> },
];

function Countdown({ to }: { to: Date }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    React.useEffect(() => {
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

function ChallengeSubmissionForm({ challenge }: { challenge: WeeklyChallenge }) {
    const [githubUrl, setGithubUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!githubUrl.trim()) {
            toast({ variant: 'destructive', title: 'Error', description: 'Por favor, introduce la URL de tu repositorio de GitHub.' });
            return;
        }

        setIsSubmitting(true);
        const result = await submitChallengeAction({
            challengeTitle: challenge.title,
            language: challenge.language,
            githubUrl: githubUrl
        });
        setIsSubmitting(false);

        if (result.success) {
            toast({
                title: '¡Reto Enviado!',
                description: 'Hemos recibido tu entrega. ¡Excelente trabajo!',
            });
            setGithubUrl('');
        } else {
            toast({
                variant: 'destructive',
                title: 'Error al enviar',
                description: result.error || 'Ocurrió un problema al enviar tu reto. Por favor, inténtalo de nuevo.',
            });
        }
    };

    return (
        <Card className="bg-muted/50 mt-8">
            <CardHeader>
                <CardTitle>Entregar Reto</CardTitle>
                <CardDescription>
                    Una vez que hayas completado el proyecto y lo hayas subido a un repositorio público en GitHub, pega la URL aquí para enviarlo.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <div className="grid w-full max-w-lg items-center gap-1.5">
                        <Label htmlFor="github-url">URL del Repositorio de GitHub</Label>
                        <Input
                            id="github-url"
                            type="url"
                            placeholder="https://github.com/tu-usuario/nombre-del-proyecto"
                            value={githubUrl}
                            onChange={(e) => setGithubUrl(e.target.value)}
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                        {isSubmitting ? 'Enviando...' : 'Enviar Entrega'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

export default function WeeklyChallengePage() {
    const [selectedChallenge, setSelectedChallenge] = useState<WeeklyChallenge | null>(null);
    const [endDate, setEndDate] = useState<Date>(new Date());
    
    React.useEffect(() => {
        const now = new Date();
        const endOfWeekDate = endOfWeek(now, { weekStartsOn: 1 }); // Monday is the start
        setEndDate(endOfWeekDate);
    }, []);

    const challengesByDifficulty = useMemo(() => {
        return weeklyChallenges.reduce((acc, challenge) => {
            const { difficulty } = challenge;
            if (!acc[difficulty]) {
                acc[difficulty] = [];
            }
            acc[difficulty].push(challenge);
            return acc;
        }, {} as Record<WeeklyChallenge['difficulty'], WeeklyChallenge[]>);
    }, []);

    const handleSelectChallenge = (challenge: WeeklyChallenge) => {
        setSelectedChallenge(challenge);
    }
    
    return (
        <div className="container py-8 md:py-12">
            <header className="mb-8 md:mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl flex items-center justify-center gap-4">
                    <Swords className="w-10 h-10 text-primary" />
                    Retos Semanales
                </h1>
                <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Elige una dificultad y un lenguaje para aceptar un desafío diseñado para llevar tus habilidades al siguiente nivel. Tienes hasta el final de la semana para completarlo.
                </p>
            </header>

            <Tabs defaultValue="Fácil" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                    {DIFFICULTY_LEVELS.map(level => (
                         <TabsTrigger key={level.id} value={level.id} className="py-2 gap-2" onClick={() => setSelectedChallenge(null)}>
                            {level.icon} {level.label}
                         </TabsTrigger>
                    ))}
                </TabsList>

                {DIFFICULTY_LEVELS.map(level => (
                    <TabsContent key={level.id} value={level.id} className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                            <div className="md:col-span-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Elige tu Tecnología</CardTitle>
                                        <CardDescription>Selecciona el lenguaje con el que quieres afrontar el reto de nivel {level.label}.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-2">
                                        {(challengesByDifficulty[level.id] || []).map((challenge) => (
                                            <Button
                                                key={challenge.title}
                                                variant={selectedChallenge?.title === challenge.title ? 'default' : 'outline'}
                                                onClick={() => handleSelectChallenge(challenge)}
                                                className="w-full justify-start"
                                            >
                                                <span className="w-6">{ICONS[challenge.iconKey]}</span>
                                                {challenge.language}
                                            </Button>
                                        ))}
                                    </CardContent>
                                </Card>
                                 <Card className="mt-8">
                                    <CardHeader>
                                        <CardTitle className="text-center flex items-center justify-center gap-2">
                                        <CalendarClock className="w-5 h-5"/>
                                        Tiempo Restante
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Countdown to={endDate} />
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="md:col-span-3">
                                {selectedChallenge && selectedChallenge.difficulty === level.id ? (
                                    <Card className="border-2 border-primary shadow-lg sticky top-24">
                                        <CardHeader>
                                            <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                                                <span className="w-8">{ICONS[selectedChallenge.iconKey]}</span>
                                                {selectedChallenge.title}
                                            </CardTitle>
                                            <CardDescription className="text-base pt-2">
                                                {selectedChallenge.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-semibold mb-2">Tecnologías Sugeridas:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedChallenge.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">Requisitos del README:</h4>
                                                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                        <li>Explicación detallada de la arquitectura del proyecto.</li>
                                                        <li>Instrucciones claras de instalación y ejecución local.</li>
                                                        <li>Documentación de los endpoints de la API (si aplica).</li>
                                                        <li>Análisis de decisiones técnicas y compromisos (trade-offs).</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ChallengeSubmissionForm challenge={selectedChallenge} />
                                        </CardContent>
                                    </Card>
                                ) : (
                                     <Card className="h-full flex flex-col items-center justify-center text-center p-8 min-h-[400px]">
                                        <CardContent>
                                            <Swords className="mx-auto h-16 w-16 text-muted-foreground" />
                                            <h3 className="mt-4 text-xl font-semibold">Selecciona un Reto</h3>
                                            <p className="mt-2 text-muted-foreground">
                                                Elige un lenguaje de la lista de la izquierda para ver los detalles del desafío de esta semana.
                                            </p>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
