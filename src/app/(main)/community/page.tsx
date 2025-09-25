
"use client";

import Link from "next/link";
import { useFirebase, useUser, useCollection, useMemoFirebase, useFirestore } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import type { ForumThread } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, MessageSquare } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export default function CommunityPage() {
    const { user } = useUser();
    const firestore = useFirestore();

    const threadsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, "forumThreads"), orderBy("lastPostAt", "desc"));
    }, [firestore]);

    const { data: threads, isLoading } = useCollection<ForumThread>(threadsQuery);

    return (
        <div className="container py-12 md:py-20">
            <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between mb-12">
                <div className="text-left">
                    <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
                        Foros de la Comunidad
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Participa en conversaciones, haz preguntas y comparte tus conocimientos.
                    </p>
                </div>
                {user && (
                    <Button asChild>
                        <Link href="/community/new">
                            <PlusCircle className="mr-2" />
                            Iniciar Nueva Discusión
                        </Link>
                    </Button>
                )}
            </header>

            <div className="space-y-4">
                {isLoading && <p className="text-center text-muted-foreground">Cargando discusiones...</p>}
                
                {!isLoading && threads?.length === 0 && (
                    <Card className="text-center py-10">
                        <CardContent>
                            <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
                            <h3 className="mt-4 text-lg font-semibold">No hay discusiones todavía</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Sé el primero en iniciar una conversación.
                            </p>
                            {user && (
                                <Button asChild className="mt-4">
                                    <Link href="/community/new">
                                        <PlusCircle className="mr-2" />
                                        Crear Discusión
                                    </Link>
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                )}

                {threads?.map((thread) => (
                    <Card key={thread.id} className="hover:bg-accent">
                        <CardContent className="p-4 flex items-start justify-between">
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage src={thread.authorAvatarUrl} alt={thread.authorName} />
                                    <AvatarFallback>{thread.authorName?.charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <Link href={`/community/threads/${thread.id}`}>
                                        <h3 className="font-semibold text-lg hover:underline">{thread.title}</h3>
                                    </Link>
                                    <p className="text-sm text-muted-foreground">
                                        Iniciado por {thread.authorName}
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
        </div>
    );
}
