
"use client";

import { useUser, useFirestore, useDoc, useMemoFirebase, useCollection } from "@/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Edit, BookOpen, GraduationCap } from "lucide-react";
import type { UserProfile, ForumThread } from "@/lib/types";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { collection, query, where, doc } from "firebase/firestore";
import Link from "next/link";
import { courses } from "@/lib/data";

function UserStats() {
    const { user } = useUser();
    const firestore = useFirestore();

    const userProfileRef = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return doc(firestore, "users", user.uid);
    }, [user, firestore]);
    const { data: userProfile } = useDoc<UserProfile>(userProfileRef);

    const userThreadsQuery = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return query(collection(firestore, "forumThreads"), where("authorId", "==", user.uid));
    }, [user, firestore]);

    const { data: userThreads } = useCollection<ForumThread>(userThreadsQuery);

    const questionsCount = userThreads?.length ?? 0;
    const repliesCount = 0; // Placeholder

    return (
        <Card className="bg-muted/50">
            <CardContent className="p-4 flex justify-around text-center">
                <div className="w-24">
                    <p className="text-2xl font-bold text-green-500">{userProfile?.points ?? 0}</p>
                    <p className="text-xs text-muted-foreground">Puntos</p>
                </div>
                <div className="w-24">
                    <p className="text-2xl font-bold">{questionsCount}</p>
                    <p className="text-xs text-muted-foreground">Preguntas</p>
                </div>
                <div className="w-24">
                    <p className="text-2xl font-bold">{repliesCount}</p>
                    <p className="text-xs text-muted-foreground">Respuestas</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default function DashboardPage() {
    const { user, isUserLoading } = useUser();
    
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
        <div className="bg-secondary/40 min-h-screen">
            <div className="bg-background">
                <div className="container py-6">
                    <header className="flex items-center gap-4">
                        <Avatar className="h-20 w-20 border-4 border-primary">
                            {user.photoURL && <AvatarImage src={user.photoURL} alt={displayName || "User"} />}
                            <AvatarFallback className="text-3xl">{userInitial}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold tracking-tight">{displayName}</h1>
                            <Button variant="outline" size="sm" className="mt-2">
                                <Edit className="mr-2 h-3 w-3" />
                                Editar Perfil
                            </Button>
                        </div>
                    </header>
                </div>
            </div>
            
            <div className="container py-6 md:py-8">
                <div className="mx-auto max-w-4xl space-y-8">
                    
                    <UserStats />

                    <section>
                        <h2 className="text-xl font-bold mb-4">Tus cursos</h2>
                        {suggestedCourse ? (
                             <Card className="overflow-hidden">
                                 <CardContent className="p-4 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                        <BookOpen className="w-6 h-6 text-muted-foreground"/>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-muted-foreground">Te sugerimos iniciar con el</p>
                                        <p className="font-semibold line-clamp-1">{suggestedCourse.title}</p>
                                    </div>
                                    <Button asChild size="sm" className="bg-green-500 hover:bg-green-600 flex-shrink-0">
                                        <Link href={`/courses/${suggestedCourse.id}`}>Comenzar</Link>
                                    </Button>
                                 </CardContent>
                             </Card>
                        ): (
                            <p className="text-muted-foreground">No tienes cursos en progreso.</p>
                        )}
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">Tus carreras</h2>
                        <Card className="border-2 border-dashed">
                           <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <GraduationCap className="w-8 h-8 text-muted-foreground"/>
                                </div>
                                <p className="text-muted-foreground mb-4">Te recomendamos iniciar:</p>
                                <Button variant="outline" asChild className="bg-green-100 dark:bg-green-900/50 border-green-500 text-green-700 dark:text-green-400 hover:bg-green-200">
                                    <Link href="/paths">Ver Carreras</Link>
                                </Button>
                           </CardContent>
                        </Card>
                    </section>
                    
                    <section>
                        <h2 className="text-xl font-bold mb-4">Tutoriales</h2>
                        <Card>
                            <CardContent className="p-4">
                                <p className="font-semibold">Aún no has creado tutoriales</p>
                                <p className="text-sm text-muted-foreground mt-1">Comparte tus conocimientos con la comunidad.</p>
                            </CardContent>
                        </Card>
                    </section>
                    
                    <section>
                        <h2 className="text-xl font-bold mb-4">Tus preguntas</h2>
                        <Card>
                             <CardContent className="p-4">
                                 <p className="font-semibold">Aún no has hecho preguntas</p>
                                 <p className="text-sm text-muted-foreground mt-1">La comunidad está lista para ayudarte.</p>
                             </CardContent>
                        </Card>
                    </section>

                </div>
            </div>
        </div>
    );
}
