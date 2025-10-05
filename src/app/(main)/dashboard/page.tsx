
"use client";

import { useUser, useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Edit, BookOpen, HelpCircle, GraduationCap } from "lucide-react";
import type { UserProfile, ForumThread } from "@/lib/types";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { collection, query, where } from "firebase/firestore";
import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/lib/data";

function UserStats() {
    const { user } = useUser();
    const firestore = useFirestore();

    const userProfileQuery = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return query(collection(firestore, "users"), where("email", "==", user.email));
    }, [user, firestore]);
    const { data: userProfileData } = useCollection<UserProfile>(userProfileQuery);
    const userProfile = userProfileData?.[0];

    const userThreadsQuery = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return query(collection(firestore, "forumThreads"), where("authorId", "==", user.uid));
    }, [user, firestore]);

    const { data: userThreads } = useCollection<ForumThread>(userThreadsQuery);

    // Note: Counting replies would be inefficient. We'll stick to questions for now.
    const questionsCount = userThreads?.length ?? 0;
    const repliesCount = 0; // Placeholder

    return (
        <Card className="bg-muted/50">
            <CardContent className="p-4 flex justify-around text-center">
                <div className="w-20">
                    <p className="text-2xl font-bold text-green-500">{userProfile?.points ?? 0}</p>
                    <p className="text-xs text-muted-foreground">Puntos</p>
                </div>
                <div className="w-20">
                    <p className="text-2xl font-bold">{questionsCount}</p>
                    <p className="text-xs text-muted-foreground">Preguntas</p>
                </div>
                <div className="w-20">
                    <p className="text-2xl font-bold">{repliesCount}</p>
                    <p className="text-xs text-muted-foreground">Respuestas</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default function DashboardPage() {
    const { user, isUserLoading } = useUser();
    
    // Mocking progress data for suggested course
    const suggestedCourse = useMemo(() => courses.find(c => c.id === 'english-entrevistas'), []);

    if (isUserLoading) {
        return (
            <div className="container py-8 text-center flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }
    
    if (!user) {
        return <div className="container py-8 text-center">Inicia sesión para ver tu panel.</div>;
    }

    const displayName = user.displayName || user.email;
    const userInitial = displayName ? displayName.charAt(0).toUpperCase() : '?';

    return (
        <div className="bg-secondary/40">
            <div className="bg-background">
                <div className="container py-6">
                    <header className="flex flex-col sm:flex-row items-center gap-6">
                        <Avatar className="h-24 w-24 border-4 border-primary">
                            {user.photoURL && <AvatarImage src={user.photoURL} alt={displayName || "User"} />}
                            <AvatarFallback className="text-4xl">{userInitial}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 text-center sm:text-left">
                            <h1 className="text-3xl font-bold tracking-tight">{displayName}</h1>
                            <Button variant="outline" size="sm" className="mt-2">
                                <Edit className="mr-2 h-3 w-3" />
                                Completa tu perfil
                            </Button>
                        </div>
                        <div className="w-full sm:w-auto">
                            <UserStats />
                        </div>
                    </header>
                </div>
            </div>
            
            <div className="container py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-10">
                        <Card className="bg-gradient-to-r from-teal-500 to-cyan-500 text-primary-foreground">
                            <CardContent className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold">Aprende diseño, desarrollo y marketing con líderes de la industria</h3>
                                </div>
                                <Button asChild variant="secondary" className="bg-green-400 hover:bg-green-500 text-black font-bold">
                                    <Link href="/pricing">$1.499.000 al año</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Tus cursos</h2>
                            {suggestedCourse ? (
                                 <Card className="overflow-hidden">
                                     <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                            <BookOpen className="w-8 h-8 text-muted-foreground"/>
                                        </div>
                                        <div className="flex-1 text-center sm:text-left">
                                            <p className="text-sm text-muted-foreground">Te sugerimos iniciar con el</p>
                                            <p className="font-semibold">{suggestedCourse.title}</p>
                                        </div>
                                        <Button asChild className="bg-green-500 hover:bg-green-600">
                                            <Link href={`/courses/${suggestedCourse.id}`}>Comenzar ahora</Link>
                                        </Button>
                                     </CardContent>
                                 </Card>
                            ): (
                                <p className="text-muted-foreground">No tienes cursos en progreso.</p>
                            )}
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Tus carreras</h2>
                            <Card className="border-2 border-dashed">
                               <CardContent className="p-6 text-center">
                                    <div className="w-24 h-24 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <GraduationCap className="w-12 h-12 text-muted-foreground"/>
                                    </div>
                                    <p className="text-muted-foreground mb-4">Te recomendamos iniciar:</p>
                                    <Button variant="outline" asChild className="bg-green-100 dark:bg-green-900/50 border-green-500 text-green-700 dark:text-green-400 hover:bg-green-200">
                                        <Link href="/paths">Ver cursos</Link>
                                    </Button>
                               </CardContent>
                            </Card>
                        </section>

                    </div>

                    {/* Right Column */}
                    <div className="space-y-10">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Tutoriales</h2>
                            <Card>
                                <CardContent className="p-6">
                                    <p className="font-semibold">Aún no has creado tutoriales</p>
                                    <p className="text-sm text-muted-foreground mt-1">Comparte tus conocimientos. Tus tutoriales pueden ser parte de los cursos y llegar a muchas personas.</p>
                                </CardContent>
                            </Card>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Tus preguntas</h2>
                            <Card>
                                 <CardContent className="p-6">
                                     <p className="font-semibold">Aún no has hecho preguntas</p>
                                     <p className="text-sm text-muted-foreground mt-1">La comunidad de profesores y estudiantes responderá a todas tus dudas.</p>
                                 </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
