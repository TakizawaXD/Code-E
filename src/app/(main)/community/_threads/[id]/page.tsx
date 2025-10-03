

"use client";

import { useFirebase, useUser, useDoc, useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { doc, collection, query, orderBy, serverTimestamp, updateDoc, addDoc, increment } from "firebase/firestore";
import { notFound, useRouter } from "next/navigation";
import type { ForumThread, ForumPost } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ForumPostCard } from "@/components/forum-post";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Send } from "lucide-react";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";

export default function ThreadPage({ params }: { params: { id: string } }) {
    const { user } = useUser();
    const firestore = useFirestore();
    const router = useRouter();
    const [newPostContent, setNewPostContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const threadRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return doc(firestore, "forumThreads", params.id);
    }, [firestore, params.id]);
    
    const { data: thread, isLoading: isThreadLoading } = useDoc<ForumThread>(threadRef);

    const postsRef = useMemoFirebase(() => {
        if (!threadRef) return null;
        return collection(threadRef, "posts");
    }, [threadRef]);

    const postsQuery = useMemoFirebase(() => {
        if (!postsRef) return null;
        return query(postsRef, orderBy("createdAt", "asc"));
    }, [postsRef]);

    const { data: posts, isLoading: arePostsLoading } = useCollection<ForumPost>(postsQuery);

    const handleAddPost = async () => {
        if (!user || !newPostContent.trim() || !postsRef || !threadRef || !thread) return;

        setIsSubmitting(true);
        try {
            const now = serverTimestamp();
            const postData = {
                content: newPostContent.trim(),
                authorId: user.uid,
                authorName: user.displayName || "Usuario Anónimo",
                authorAvatarUrl: user.photoURL || '',
                createdAt: now,
            };

            await addDoc(postsRef, postData);
            
            // Update thread metadata
            await updateDoc(threadRef, {
                postCount: (thread.postCount || 1) + 1,
                lastPostAt: now,
            });

            // Award points for replying
            const userRef = doc(firestore, "users", user.uid);
            setDocumentNonBlocking(userRef, { points: increment(2) }, { merge: true });

            toast({
                title: "¡Respuesta publicada!",
                description: "Has ganado 2 puntos por participar.",
            });

            setNewPostContent("");
        } catch (error) {
            console.error("Error adding post:", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    if (isThreadLoading) {
        return <div className="container flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin" /></div>;
    }
    
    if (!thread) {
        notFound();
    }

    return (
        <div className="container max-w-4xl py-12 md:py-20">
            <div className="mb-8">
                <Button variant="ghost" asChild>
                    <Link href="/community">
                        <ArrowLeft className="mr-2"/>
                        Volver a los foros
                    </Link>
                </Button>
            </div>
            
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">{thread.title}</h1>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={thread.authorAvatarUrl} alt={thread.authorName} />
                            <AvatarFallback>{thread.authorName?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <span>Iniciado por <span className="font-semibold text-foreground">{thread.authorName}</span></span>
                    </div>
                    <span>•</span>
                    <span>{thread.createdAt ? format(thread.createdAt.toDate(), "d 'de' MMMM 'de' yyyy", { locale: es }) : ''}</span>
                </div>
            </header>

            <div className="space-y-6">
                <ForumPostCard post={{...thread, id: thread.id}} />

                <Separator />
                
                {arePostsLoading && <p>Cargando respuestas...</p>}

                {posts?.map((post) => (
                    <ForumPostCard key={post.id} post={post} />
                ))}

                <Separator />
                
                {user ? (
                    <Card>
                        <CardContent className="p-4">
                            <h3 className="text-lg font-semibold mb-4">Añadir una respuesta</h3>
                            <div className="flex gap-4">
                                <Avatar>
                                    {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || "User"} />}
                                    <AvatarFallback>{user.displayName?.charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="w-full space-y-2">
                                    <Textarea 
                                        value={newPostContent}
                                        onChange={(e) => setNewPostContent(e.target.value)}
                                        placeholder="Escribe tu respuesta..."
                                        className="w-full min-h-[120px]"
                                    />
                                    <Button onClick={handleAddPost} disabled={!newPostContent.trim() || isSubmitting}>
                                        <Send className="mr-2" />
                                        {isSubmitting ? 'Enviando...' : 'Enviar Respuesta'}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <Card>
                        <CardContent className="p-4 text-center text-muted-foreground">
                            <Link href="/auth/login" className="text-primary hover:underline font-semibold">Inicia sesión</Link> para responder a esta discusión.
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
