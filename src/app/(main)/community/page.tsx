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
        <div className="container py-8 md:py-12">
            <header className="text-center md:text-left mb-8 md:mb-12">
                <h1 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                    Comunidad Code-E
                </h1>
                <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                    Conecta, colabora y crece con otros estudiantes y profesionales.
                </p>
            </header>

            <Tabs defaultValue="channels" className="w-full">
                 <TabsList className="grid w-full grid-cols-2 h-auto md:grid-cols-3 md:h-10">
                    <TabsTrigger value="channels" className="py-2"><Users className="mr-2"/>Canales</TabsTrigger>
                    <TabsTrigger value="leaderboard" className="py-2"><Trophy className="mr-2"/>Clasificación</TabsTrigger>
                    <TabsTrigger value="gallery" className="py-2"><GitMerge className="mr-2"/>Galería</TabsTrigger>
                </TabsList>
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
