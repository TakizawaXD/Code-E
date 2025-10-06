
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Send, Loader2, MessageCircle } from 'lucide-react';
import type { ChatMessage } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter, FirestorePermissionError } from '@/firebase';

function getInitials(name: string) {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

export default function ComunicacionPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const { toast } = useToast();

    const [newMessage, setNewMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const chatQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'comunicacion'), orderBy('createdAt', 'desc'), limit(50));
    }, [firestore]);

    const { data: messages, isLoading: areMessagesLoading } = useCollection<ChatMessage>(chatQuery);
    
    const sortedMessages = React.useMemo(() => messages ? [...messages].reverse() : [], [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [sortedMessages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !firestore || !newMessage.trim()) return;

        setIsSending(true);

        const messageData = {
            authorId: user.uid,
            authorName: user.displayName || "Anónimo",
            authorAvatarUrl: user.photoURL || "",
            content: newMessage,
            createdAt: serverTimestamp(),
        };

        const chatRef = collection(firestore, 'comunicacion');
        
        addDoc(chatRef, messageData)
            .then(() => {
                setNewMessage("");
            })
            .catch((error) => {
                errorEmitter.emit(
                    'permission-error',
                    new FirestorePermissionError({
                        path: chatRef.path,
                        operation: 'create',
                        requestResourceData: messageData,
                    })
                );
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="container py-8 md:py-12">
            <header className="mb-8 md:mb-12 text-center">
                 <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl flex items-center justify-center gap-4">
                    <MessageCircle className="w-10 h-10 text-primary" />
                    Comunicación
                </h1>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Un canal abierto para toda la comunidad de Kursor. Comparte ideas, haz preguntas o simplemente saluda.
                </p>
            </header>

            <Card className="max-w-4xl mx-auto flex flex-col h-[600px]">
                <CardHeader>
                    <CardTitle>Chat en Tiempo Real</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {areMessagesLoading && <div className="flex justify-center items-center h-full"><Loader2 className="w-8 h-8 animate-spin" /></div>}
                    
                    {!areMessagesLoading && sortedMessages.map((msg) => (
                        <div key={msg.id} className="flex gap-3 items-start">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={msg.authorAvatarUrl} alt={msg.authorName} />
                                <AvatarFallback>{getInitials(msg.authorName)}</AvatarFallback>
                            </Avatar>
                             <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-sm">{msg.authorName}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {msg.createdAt ? formatDistanceToNow((msg.createdAt as any).toDate(), { addSuffix: true, locale: es }) : ''}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-foreground bg-muted p-3 rounded-lg inline-block">{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </CardContent>
                <div className="p-4 border-t">
                    {user && !isUserLoading ? (
                        <form onSubmit={handleSendMessage} className="flex gap-2">
                            <Input
                                placeholder="Escribe tu mensaje..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                disabled={isSending}
                            />
                            <Button type="submit" disabled={isSending || !newMessage.trim()}>
                                {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                                <span className="sr-only">Enviar</span>
                            </Button>
                        </form>
                    ) : (
                        <p className="text-sm text-center text-muted-foreground">Debes iniciar sesión para participar en el chat.</p>
                    )}
                </div>
            </Card>
        </div>
    );
}
