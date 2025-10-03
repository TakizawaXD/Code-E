
"use client";

import { useState } from "react";
import { useUser, useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking } from "@/firebase";
import { collection, query, orderBy, serverTimestamp } from "firebase/firestore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface CommentSectionProps {
    courseId: string;
    moduleId: string;
    lessonId: string;
}

export function CommentSection({ courseId, moduleId, lessonId }: CommentSectionProps) {
    const { user } = useUser();
    const firestore = useFirestore();
    const [newComment, setNewComment] = useState("");

    const commentsRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'courses', courseId, 'modules', moduleId, 'lessons', lessonId, 'comments');
    }, [firestore, courseId, moduleId, lessonId]);

    const commentsQuery = useMemoFirebase(() => {
        if (!commentsRef) return null;
        return query(commentsRef, orderBy('createdAt', 'desc'));
    }, [commentsRef]);
    
    const { data: comments, isLoading } = useCollection(commentsQuery);

    const handleAddComment = async () => {
        if (!user || !newComment.trim() || !commentsRef) return;
        
        const commentData = {
            userId: user.uid,
            userName: "Anónimo",
            userAvatarUrl: "",
            text: newComment.trim(),
            createdAt: serverTimestamp(),
        };

        addDocumentNonBlocking(commentsRef, commentData);
        setNewComment("");
    };

    const userInitial = user?.displayName ? user.displayName.charAt(0) : user?.email?.charAt(0).toUpperCase();

    return (
        <div className="space-y-6">
            {user ? (
                <Card>
                    <CardContent className="p-4 flex gap-4">
                        <Avatar>
                            <AvatarFallback>{userInitial}</AvatarFallback>
                        </Avatar>
                        <div className="w-full space-y-2">
                            <Textarea 
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Escribe tu comentario..."
                                className="w-full"
                            />
                            <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                                <Send className="mr-2" /> Enviar Comentario
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardContent className="p-4 text-center text-muted-foreground">
                        <Link href="/auth/login" className="text-primary hover:underline font-semibold">Inicia sesión</Link> para dejar un comentario.
                    </CardContent>
                </Card>
            )}

            <div className="space-y-4">
                {isLoading && <p>Cargando comentarios...</p>}
                {comments && comments.length === 0 && !isLoading && (
                    <p className="text-muted-foreground text-center">No hay comentarios todavía. ¡Sé el primero!</p>
                )}
                {comments?.map(comment => (
                    <div key={comment.id} className="flex gap-4">
                        <Avatar>
                            <AvatarFallback>?</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">Anónimo</p>
                                <p className="text-xs text-muted-foreground">
                                    {comment.createdAt ? formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true, locale: es }) : ''}
                                </p>
                            </div>
                            <p className="text-foreground/90">{comment.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
