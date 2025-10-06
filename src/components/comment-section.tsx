
"use client";

import { useState } from "react";
import { useUser, useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, serverTimestamp, addDoc, FieldValue } from "firebase/firestore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import type { Comment } from "@/lib/types";

interface CommentSectionProps {
    courseId: string;
    moduleId: string;
    lessonId: string;
}

export function CommentSection({ courseId, moduleId, lessonId }: CommentSectionProps) {
    const { user } = useUser();
    const firestore = useFirestore();
    const [newComment, setNewComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const commentsRef = useMemoFirebase(() => {
        if (!firestore) return null;
        // Global comments collection
        return collection(firestore, 'comments');
    }, [firestore]);

    const lessonCommentsQuery = useMemoFirebase(() => {
        if (!commentsRef) return null;
        // Query for comments specific to this lesson
        return query(
            commentsRef, 
            where("courseId", "==", courseId), 
            where("moduleId", "==", moduleId), 
            where("lessonId", "==", lessonId), 
            orderBy('createdAt', 'desc')
        );
    }, [commentsRef, courseId, moduleId, lessonId]);
    
    const { data: comments, isLoading } = useCollection<Comment>(lessonCommentsQuery);

    const handleAddComment = async () => {
        if (!user || !newComment.trim() || !commentsRef) return;
        
        setIsSubmitting(true);
        try {
            const commentData: Omit<Comment, 'id' | 'createdAt'> & { createdAt: FieldValue } = {
                authorId: user.uid,
                authorName: user.displayName || "Usuario Anónimo",
                authorAvatarUrl: user.photoURL || "",
                content: newComment.trim(),
                createdAt: serverTimestamp(),
                courseId,
                moduleId,
                lessonId,
            };
            await addDoc(commentsRef, commentData);
            setNewComment("");
        } catch (error) {
            console.error("Error adding comment: ", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const userInitial = user?.displayName ? user.displayName.charAt(0).toUpperCase() : (user?.email ? user.email.charAt(0).toUpperCase() : '?');

    return (
        <div className="space-y-6">
            {user ? (
                <Card>
                    <CardContent className="p-4 flex gap-4">
                        <Avatar>
                            {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || "User"} />}
                            <AvatarFallback>{userInitial}</AvatarFallback>
                        </Avatar>
                        <div className="w-full space-y-2">
                            <Textarea 
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Escribe tu comentario o pregunta..."
                                className="w-full"
                            />
                            <Button onClick={handleAddComment} disabled={!newComment.trim() || isSubmitting}>
                                <Send className="mr-2" />
                                {isSubmitting ? "Enviando..." : "Enviar Comentario"}
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
                {isLoading && <p className="text-center text-muted-foreground">Cargando comentarios...</p>}
                {comments && comments.length === 0 && !isLoading && (
                    <p className="text-muted-foreground text-center py-4">No hay comentarios todavía. ¡Sé el primero en preguntar!</p>
                )}
                {comments?.map(comment => (
                    <div key={comment.id} className="flex gap-4">
                        <Avatar>
                            <AvatarImage src={comment.authorAvatarUrl} alt={comment.authorName}/>
                            <AvatarFallback>{comment.authorName?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 bg-muted/50 p-4 rounded-lg">
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">{comment.authorName}</p>
                                <p className="text-xs text-muted-foreground">
                                    {comment.createdAt && 'toDate' in comment.createdAt ? formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true, locale: es }) : 'hace un momento'}
                                </p>
                            </div>
                            <p className="text-foreground/90 mt-1">{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
