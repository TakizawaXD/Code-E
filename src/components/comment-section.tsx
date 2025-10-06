
"use client";

import React, { useState } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, addDoc } from 'firebase/firestore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Send, Loader2 } from 'lucide-react';
import type { Comment } from '@/lib/types';
import { addComment as addCommentAction } from '../app/(main)/courses/[id]/actions';

interface CommentSectionProps {
    lessonId: string;
}

export function CommentSection({ lessonId }: CommentSectionProps) {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const [newComment, setNewComment] = useState("");
    const [isPosting, setIsPosting] = useState(false);

    const commentsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'lessons', lessonId, 'comments'), orderBy('createdAt', 'desc'));
    }, [firestore, lessonId]);

    const { data: comments, isLoading: areCommentsLoading } = useCollection<Comment>(commentsQuery);

    const handlePostComment = async () => {
        if (!user || !newComment.trim()) return;

        setIsPosting(true);
        const commentData = {
            authorId: user.uid,
            authorName: user.displayName || "Anónimo",
            authorAvatarUrl: user.photoURL || "",
            content: newComment,
        };

        await addCommentAction(lessonId, commentData);
        
        setNewComment("");
        setIsPosting(false);
    };

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Comentarios</h2>

            {user && !isUserLoading ? (
                <Card>
                    <CardContent className="p-4 flex gap-4">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || ""} />
                            <AvatarFallback>{user.displayName ? getInitials(user.displayName) : "?"}</AvatarFallback>
                        </Avatar>
                        <div className="w-full space-y-2">
                            <Textarea
                                placeholder="Escribe tu comentario..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                disabled={isPosting}
                            />
                            <Button onClick={handlePostComment} disabled={isPosting || !newComment.trim()}>
                                {isPosting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                                {isPosting ? "Publicando..." : "Publicar"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ) : null}

            <div className="space-y-6">
                {areCommentsLoading && <div className="text-center p-8"><Loader2 className="mx-auto h-8 w-8 animate-spin" /></div>}
                {!areCommentsLoading && comments && comments.length === 0 && (
                     <Card>
                        <CardContent className="p-8 text-center text-muted-foreground">
                            <p>Aún no hay comentarios. ¡Sé el primero en preguntar algo!</p>
                        </CardContent>
                    </Card>
                )}
                {!areCommentsLoading && comments && comments.map((comment) => (
                    <Card key={comment.id}>
                        <CardContent className="p-4 flex gap-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={comment.authorAvatarUrl} alt={comment.authorName} />
                                <AvatarFallback>{getInitials(comment.authorName)}</AvatarFallback>
                            </Avatar>
                            <div className="w-full">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">{comment.authorName}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {comment.createdAt ? formatDistanceToNow((comment.createdAt as any).toDate(), { addSuffix: true, locale: es }) : ''}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground whitespace-pre-wrap">{comment.content}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
