
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { ForumPost } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

interface ForumPostCardProps {
    post: ForumPost;
}

export function ForumPostCard({ post }: ForumPostCardProps) {
    return (
        <Card>
            <CardHeader className="p-4 flex flex-row items-center justify-between bg-muted/50 border-b">
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={post.authorAvatarUrl} alt={post.authorName} />
                        <AvatarFallback>{post.authorName?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">{post.authorName}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                    {post.createdAt ? formatDistanceToNow(post.createdAt.toDate(), { addSuffix: true, locale: es }) : ''}
                </p>
            </CardHeader>
            <CardContent className="p-4">
                <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}/>
            </CardContent>
        </Card>
    );
}
