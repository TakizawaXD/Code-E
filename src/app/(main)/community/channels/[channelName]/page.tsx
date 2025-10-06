"use client";

import { useUser, useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking } from "@/firebase";
import { collection, query, orderBy, serverTimestamp, limit } from "firebase/firestore";
import type { Comment as Message } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Hash, Loader2, Send } from "lucide-react";
import { ChatMessage } from "@/components/chat-message";
import { useParams } from "next/navigation";

export default function ChannelPage() {
    const params = useParams();
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const [newMessage, setNewMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const channelName = params.channelName as string;

    const messagesQuery = useMemoFirebase(() => {
        // Wait until both firestore and the user are available
        if (!firestore || !channelName || !user) return null;
        const messagesRef = collection(firestore, "channels", channelName, "messages");
        return query(messagesRef, orderBy("createdAt", "asc"), limit(100));
    }, [firestore, channelName, user]); // Add user as a dependency

    const { data: messages, isLoading: areMessagesLoading } = useCollection<Message>(messagesQuery);
    
     useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !newMessage.trim() || !firestore) return;

        setIsSubmitting(true);
        try {
            const messagesRef = collection(firestore, 'channels', channelName, 'messages');
            const messageData = {
                content: newMessage.trim(),
                authorId: user.uid,
                authorName: user.displayName || "Usuario Anónimo",
                authorAvatarUrl: user.photoURL || '',
                createdAt: serverTimestamp(),
            };
            
            // Non-blocking write
            addDocumentNonBlocking(messagesRef, messageData);
            
            setNewMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (areMessagesLoading || isUserLoading) {
         return <div className="container flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin" /></div>;
    }

    return (
       <div className="flex flex-col h-[calc(100vh_-_4rem)]">
          <header className="flex-shrink-0 border-b p-4 bg-background">
              <div className="container mx-auto flex items-center gap-4">
                  <Button variant="ghost" size="icon" asChild>
                      <Link href="/community">
                          <ArrowLeft/>
                      </Link>
                  </Button>
                  <div className="flex items-center gap-2">
                    <Hash className="w-6 h-6 text-muted-foreground" />
                    <h1 className="text-xl font-bold">{channelName}</h1>
                  </div>
              </div>
          </header>

          <main ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4">
               <div className="container mx-auto space-y-4">
                   {messages && messages.map(msg => (
                       <ChatMessage key={msg.id} message={msg} />
                   ))}
                   {messages?.length === 0 && (
                       <div className="text-center text-muted-foreground py-10">
                           <p>¡Sé el primero en enviar un mensaje en #{channelName}!</p>
                       </div>
                   )}
               </div>
          </main>
          
          <footer className="flex-shrink-0 border-t p-4 bg-background">
               <div className="container mx-auto">
                   {user ? (
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                           <Avatar>
                               <AvatarImage src={user.photoURL || ""} />
                               <AvatarFallback>{user.displayName?.charAt(0) || 'U'}</AvatarFallback>
                           </Avatar>
                           <Input 
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder={`Enviar mensaje a #${channelName}`} 
                            autoComplete="off"
                            disabled={isSubmitting}
                           />
                           <Button type="submit" disabled={!newMessage.trim() || isSubmitting}>
                               {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
                           </Button>
                        </form>
                   ) : (
                       <div className="text-center">
                           <Button asChild>
                               <Link href="/auth/login">Inicia sesión para chatear</Link>
                           </Button>
                       </div>
                   )}
               </div>
          </footer>
       </div>
    );
}