
"use client";

import { useUser, useFirestore, useCollection, useMemoFirebase, useDoc } from "@/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/course-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Download, Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { Course, Progress, UserProfile } from "@/lib/types";
import { courses as allCourses } from "@/lib/data";
import { useMemo } from "react";
import { collection, query, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();

    const userProfileQuery = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return doc(firestore, `users/${user.uid}`);
    }, [firestore, user]);

    const { data: userProfile } = useDoc<UserProfile>(userProfileQuery);

    const progressQuery = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return collection(firestore, `users/${user.uid}/progress`);
    }, [firestore, user]);

    const { data: progressData, isLoading: isProgressLoading } = useCollection<Progress>(progressQuery);

    const { coursesInProgress, completedCourses } = useMemo(() => {
        if (!progressData) return { coursesInProgress: [], completedCourses: [] };

        const inProgress: (Course & { progress: number })[] = [];
        const completed: Course[] = [];

        progressData.forEach(progressItem => {
            const course = allCourses.find(c => c.id === progressItem.courseId);
            if (!course) return;

            if (progressItem.completed) {
                completed.push(course);
            } else {
                const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
                const progressPercentage = totalLessons > 0 
                    ? Math.round((progressItem.completedLessons.length / totalLessons) * 100) 
                    : 0;
                inProgress.push({ ...course, progress: progressPercentage });
            }
        });

        return { coursesInProgress: inProgress, completedCourses: completed };
    }, [progressData]);
    
    if (isUserLoading || isProgressLoading) {
        return (
            <div className="container py-8 text-center flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }
    
    if (!user) {
        return <div className="container py-8 text-center">Inicia sesión para ver tu panel.</div>;
    }

    const displayName = user.displayName || userProfile?.name || user.email;
    const userInitial = displayName ? displayName.charAt(0).toUpperCase() : '?';

    return (
        <div className="container py-8 md:py-12">
            <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                        {user.photoURL && <AvatarImage src={user.photoURL} alt={displayName || "User"} />}
                        <AvatarFallback className="text-3xl">{userInitial}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm text-muted-foreground">Bienvenido de nuevo,</p>
                        <h1 className="text-3xl font-bold tracking-tight font-headline">{displayName}</h1>
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Cursos Completados</CardTitle>
                            <Award className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{completedCourses.length}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Cursos en Progreso</CardTitle>
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{coursesInProgress.length}</div>
                        </CardContent>
                    </Card>
                </div>
            </header>

            <Separator className="my-8" />

            <Tabs defaultValue="in-progress" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                    <TabsTrigger value="in-progress">En Progreso</TabsTrigger>
                    <TabsTrigger value="certificates">Certificados</TabsTrigger>
                </TabsList>
                <TabsContent value="in-progress">
                    <section className="mt-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {coursesInProgress.map((course) => (
                                <CourseCard key={course.id} course={course} progress={course.progress} />
                            ))}
                        </div>
                        {coursesInProgress.length === 0 && <p className="text-muted-foreground mt-4">Aún no has comenzado ningún curso.</p>}
                    </section>
                </TabsContent>
                <TabsContent value="certificates">
                <section className="mt-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {completedCourses.map((course) => (
                            <Card key={course.id} className="flex flex-col justify-between overflow-hidden">
                                <CardContent className="p-6 text-center flex flex-col items-center justify-center flex-grow">
                                    <Award className="w-16 h-16 text-yellow-500 mb-4" />
                                    <p className="font-semibold text-lg">Certificado de Finalización</p>
                                    <p className="text-muted-foreground text-sm mt-1">{course.title}</p>
                                </CardContent>
                                <CardHeader className="p-0">
                                    <Button variant="secondary" className="w-full rounded-t-none">
                                        <Download className="mr-2 h-4 w-4" />
                                        Descargar Certificado
                                    </Button>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                    {completedCourses.length === 0 && <p className="text-muted-foreground mt-4">No has completado ningún curso todavía.</p>}
                </section>
                </TabsContent>
            </Tabs>
        </div>
    );
}
