
"use client";

import Link from "next/link";
import { useUser, useCollection, useMemoFirebase, useFirestore } from "@/firebase";
import { collection, query, orderBy, limit } from "firebase/firestore";
import type { ForumThread, UserProfile } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, MessageSquare, Trophy, Users, GitMerge, LayoutGrid, Hash } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


function ForumList() {
    const { user } = useUser();
    const firestore = useFirestore();

    const threadsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, "forumThreads"), orderBy("lastPostAt", "desc"));
    }, [firestore]);

    const { data: threads, isLoading } = useCollection<ForumThread>(threadsQuery);
    
    return (
        <div className="space-y-4 mt-6">
            <div className="flex justify-end">
                {user && (
                    <Button asChild>
                        <Link href="/community/new">
                            <PlusCircle className="mr-2" />
                            Iniciar Nueva Discusión
                        </Link>
                    </Button>
                )}
            </div>
            {isLoading && <p className="text-center text-muted-foreground">Cargando discusiones...</p>}
            
            {!isLoading && threads?.length === 0 && (
                <Card className="text-center py-10">
                    <CardContent>
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-semibold">No hay discusiones todavía</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Sé el primero en iniciar una conversación.
                        </p>
                    </CardContent>
                </Card>
            )}

            {threads?.map((thread) => (
                <Card key={thread.id} className="hover:bg-accent">
                    <CardContent className="p-4 flex items-start justify-between">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage src={thread.authorAvatarUrl} alt={thread.authorName}/>
                                <AvatarFallback>{thread.authorName.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <Link href={`/community/threads/${thread.id}`}>
                                    <h3 className="font-semibold text-lg hover:underline">{thread.title}</h3>
                                </Link>
                                <p className="text-sm text-muted-foreground">
                                    Iniciado por <span className="font-medium text-foreground">{thread.authorName}</span>
                                </p>
                            </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                            <p className="text-sm font-medium">{thread.postCount || 1} {thread.postCount === 1 ? "post" : "posts"}</p>
                            <p className="text-xs text-muted-foreground">
                                {thread.lastPostAt ? formatDistanceToNow(thread.lastPostAt.toDate(), { addSuffix: true, locale: es }) : 'N/A'}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

function LeaderboardTab() {
    const firestore = useFirestore();
    const usersQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        // This query is efficient and allowed by the security rules
        return query(collection(firestore, "users"), orderBy("points", "desc"), limit(20));
    }, [firestore]);

    const { data: users, isLoading } = useCollection<UserProfile>(usersQuery);

    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Tabla de Clasificación</CardTitle>
                <CardDescription>Compite de forma amistosa con otros estudiantes. Gana puntos, sube en el ranking y demuestra tu dedicación.</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading ? <p>Cargando clasificación...</p> : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">Rank</TableHead>
                                <TableHead>Usuario</TableHead>
                                <TableHead className="text-right">Puntos</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users?.map((user, index) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-bold text-lg">{index + 1}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={(user as any).avatarUrl} />
                                                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{user.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right font-bold">{user.points || 0}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
                 {!isLoading && users?.length === 0 && <p className="text-muted-foreground text-center py-4">Aún no hay datos para la clasificación.</p>}
            </CardContent>
        </Card>
    );
}

function ChatChannelsTab() {
    const channels = [
        { name: 'general', description: 'Charla sobre cualquier tema con otros miembros de la comunidad.' },
        { name: 'react', description: 'Discusiones sobre React, Next.js y el ecosistema de desarrollo frontend.' },
        { name: 'python', description: 'Para todo lo relacionado con Python, desde data science hasta backend.' },
        { name: 'diseño-ux', description: 'Comparte tus diseños, pide feedback y habla sobre UX/UI.' },
        { name: 'ayuda-codigo', description: '¿Atascado en un problema? Pide ayuda a la comunidad aquí.' },
        { name: 'proyectos', description: 'Muestra tus proyectos, busca colaboradores y comparte tu progreso.' },
    ]
    return (
         <Card className="mt-6">
            <CardHeader>
                <CardTitle>Canales de Chat</CardTitle>
                <CardDescription>Únete a la conversación en tiempo real. Un espacio para colaborar, pedir ayuda y compartir ideas.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {channels.map(channel => (
                        <Card key={channel.name} className="hover:bg-accent/50">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Hash className="w-5 h-5 text-muted-foreground" />
                                        <h3 className="font-semibold text-lg">{channel.name}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground ml-7">{channel.description}</p>
                                </div>
                                <Button variant="outline" disabled>Unirse (Próximamente)</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

function GalleryTab() {
     return (
         <Card className="mt-6 text-center py-20">
            <CardContent>
                <LayoutGrid className="mx-auto h-16 w-16 text-muted-foreground" />
                <h3 className="mt-6 text-xl font-semibold">Galería de Proyectos</h3>
                <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                   Muestra los proyectos que has construido y obtén feedback de la comunidad. Inspírate viendo el trabajo de otros.
                </p>
                <Button className="mt-6" disabled>Explorar Galería (Próximamente)</Button>
            </CardContent>
        </Card>
    )
}


export default function CommunityPage() {
    return (
        <div className="container py-12 md:py-20">
            <header className="text-left mb-12">
                <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
                    Comunidad Code-E
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Conecta, colabora y crece con otros estudiantes y profesionales.
                </p>
            </header>

            <Tabs defaultValue="forums" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                    <TabsTrigger value="forums"><MessageSquare className="mr-2"/>Foros de Discusión</TabsTrigger>
                    <TabsTrigger value="channels"><Users className="mr-2"/>Canales de Chat</TabsTrigger>
                    <TabsTrigger value="leaderboard"><Trophy className="mr-2"/>Clasificación</TabsTrigger>
                    <TabsTrigger value="gallery"><GitMerge className="mr-2"/>Galería</TabsTrigger>
                </TabsList>
                <TabsContent value="forums">
                    <ForumList />
                </TabsContent>
                 <TabsContent value="channels">
                   <ChatChannelsTab />
                </TabsContent>
                <TabsContent value="leaderboard">
                   <LeaderboardTab />
                </TabsContent>
                <TabsContent value="gallery">
                    <GalleryTab />
                </TabsContent>
            </Tabs>
        </div>
    );
}
