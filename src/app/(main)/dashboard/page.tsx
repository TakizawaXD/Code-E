
"use client";

import { useUser, useFirestore, useDoc, useMemoFirebase, useCollection } from "@/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Edit, BookOpen, GraduationCap, Trophy, HelpCircle, MessageSquare } from "lucide-react";
import type { UserProfile, Course, Comment } from "@/lib/types";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { collection, query, where, doc } from "firebase/firestore";
import Link from "next/link";
import { courses } from "@/lib/data";
import { CourseCard } from "@/components/course-card";

function UserStats() {
    const { user } = useUser();
    const firestore = useFirestore();

    const userProfileRef = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return doc(firestore, "users", user.uid);
    }, [user, firestore]);
    const { data: userProfile, isLoading: isProfileLoading } = useDoc<UserProfile>(userProfileRef);
    
    if (isProfileLoading) {
      return (
        <Card className="grid grid-cols-3 gap-4 p-6">
          <div className="text-center"><Loader2 className="animate-spin mx-auto"/></div>
          <div className="text-center"><Loader2 className="animate-spin mx-auto"/></div>
          <div className="text-center"><Loader2 className="animate-spin mx-auto"/></div>
        </Card>
      )
    }

    // TEMPORARY: Using static data to avoid permission errors
    const enrolledCoursesCount = 0; 
    const userCommentsCount = 0;

    return (
        <Card className="grid grid-cols-3 divide-x">
          <div className="p-6 text-center">
            <Trophy className="mx-auto h-8 w-8 text-yellow-500 mb-2"/>
            <p className="text-2xl font-bold">{userProfile?.points ?? 0}</p>
            <p className="text-xs text-muted-foreground uppercase">Puntos</p>
          </div>
           <div className="p-6 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-blue-500 mb-2"/>
            <p className="text-2xl font-bold">{enrolledCoursesCount}</p>
            <p className="text-xs text-muted-foreground uppercase">Cursos</p>
          </div>
           <div className="p-6 text-center">
            <MessageSquare className="mx-auto h-8 w-8 text-green-500 mb-2"/>
            <p className="text-2xl font-bold">{userCommentsCount}</p>
            <p className="text-xs text-muted-foreground uppercase">Comentarios</p>
          </div>
        </Card>
    );
}

export default function DashboardPage() {
    const { user, isUserLoading } = useUser();
    
    // For demonstration, we'll show a few courses as "in progress"
    const inProgressCourses: Course[] = useMemo(() => courses.slice(0, 4), []);

    if (isUserLoading) {
        return (
            <div className="container py-8 text-center flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }
    
    if (!user) {
        // Redirect or show a message if the user is not logged in
        return (
            <div className="container py-8 text-center">
                <p>Por favor, <Link href="/auth/login" className="text-primary hover:underline">inicia sesión</Link> para ver tu panel.</p>
            </div>
        );
    }

    const displayName = user.displayName || "Usuario";
    const userInitial = displayName ? displayName.charAt(0).toUpperCase() : '?';

    return (
        <div className="bg-secondary/40 min-h-screen">
            <div className="bg-background">
                <div className="container py-6">
                    <header className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <Avatar className="h-20 w-20 border-4 border-primary">
                            {user.photoURL && <AvatarImage src={user.photoURL} alt={displayName} />}
                            <AvatarFallback className="text-3xl">{userInitial}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold tracking-tight">{displayName}</h1>
                            <p className="text-muted-foreground text-sm">{user.email}</p>
                            <Button variant="outline" size="sm" className="mt-2" asChild>
                               <Link href="/dashboard/settings">
                                <Edit className="mr-2 h-3 w-3" />
                                Editar Perfil
                               </Link>
                            </Button>
                        </div>
                    </header>
                </div>
            </div>
            
            <div className="container py-6 md:py-8">
                <div className="mx-auto max-w-4xl space-y-8">
                    
                    <UserStats />

                    <section>
                        <h2 className="text-xl font-bold mb-4">Cursos en progreso</h2>
                        {inProgressCourses.length > 0 ? (
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {inProgressCourses.map(course => (
                                    <CourseCard key={course.id} course={course} progress={Math.floor(Math.random() * 80) + 10} />
                                ))}
                             </div>
                        ): (
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <BookOpen className="w-8 h-8 text-muted-foreground"/>
                                    </div>
                                    <p className="text-muted-foreground mb-4">Aún no has comenzado ningún curso.</p>
                                    <Button asChild>
                                        <Link href="/courses">Explorar Cursos</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">Tus carreras</h2>
                        <Card className="border-2 border-dashed">
                           <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <GraduationCap className="w-8 h-8 text-muted-foreground"/>
                                </div>
                                <p className="text-muted-foreground mb-4">Explora nuestras rutas de aprendizaje para convertirte en un experto.</p>
                                <Button variant="outline" asChild>
                                    <Link href="/paths">Ver Carreras</Link>
                                </Button>
                           </CardContent>
                        </Card>
                    </section>
                    
                    <section>
                        <h2 className="text-xl font-bold mb-4">Tu actividad reciente</h2>
                        <Card>
                             <CardContent className="p-6 text-center text-muted-foreground">
                                 <p>Aún no tienes actividad reciente en la comunidad.</p>
                             </CardContent>
                        </Card>
                    </section>

                </div>
            </div>
        </div>
    );
}
