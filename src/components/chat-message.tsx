
"use client";

import { useUser } from "@/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Comment as Message } from "@/lib/types";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from "@/lib/utils";

interface ChatMessageProps {
    message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
    const { user } = useUser();
    const isCurrentUser = user && user.uid === message.authorId;

    const formattedTime = message.createdAt && 'toDate' in message.createdAt 
        ? format(message.createdAt.toDate(), 'p', { locale: es })
        : '';
        
    return (
        <div className={cn(
            "flex items-start gap-3",
            isCurrentUser && "justify-end"
        )}>
            {!isCurrentUser && (
                 <Avatar className="h-10 w-10">
                    <AvatarImage src={message.authorAvatarUrl} alt={message.authorName}/>
                    <AvatarFallback>{message.authorName?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
            )}
            <div className={cn(
                "max-w-md rounded-lg px-4 py-2",
                isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"
            )}>
                {!isCurrentUser && <p className="text-xs font-semibold mb-1">{message.authorName}</p>}
                <p className="text-base whitespace-pre-wrap">{message.content}</p>
                 <p className={cn(
                    "text-xs mt-1",
                     isCurrentUser ? "text-primary-foreground/70" : "text-muted-foreground"
                 )}>
                    {formattedTime}
                </p>
            </div>
             {isCurrentUser && (
                 <Avatar className="h-10 w-10">
                    <AvatarImage src={message.authorAvatarUrl} alt={message.authorName}/>
                    <AvatarFallback>{message.authorName?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
            )}
        </div>
    );
}
