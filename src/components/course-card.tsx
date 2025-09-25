
"use client"

import Image from "next/image";
import Link from "next/link";
import { Book, Clock } from "lucide-react";
import type { Course } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface CourseCardProps {
  course: Course;
  className?: string;
  progress?: number;
}

export function CourseCard({ course, className, progress }: CourseCardProps) {
  // const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);

  return (
    <Card className={cn("flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl", className)}>
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} aria-label={course.title}>
          <div className="relative">
            <Image
              src={course.imageUrl ?? ""}
              alt={course.title ?? "Course thumbnail"}
              width={600}
              height={400}
              className="object-cover w-full h-48"
              data-ai-hint={`${course.pathId} course`}
            />
            <Badge className="absolute top-3 right-3">{course.pathId}</Badge>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Link href={`/courses/${course.id}`} className="hover:text-primary">
            <h3 className="text-lg font-bold leading-tight line-clamp-2">{course.title}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
            <Avatar className="h-6 w-6">
                <AvatarImage src={course.instructorAvatarUrl} alt={course.instructor} />
                <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{course.instructor}</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 p-4 pt-0">
        {progress !== undefined ? (
            <div className="w-full">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">{progress}% completado</p>
            </div>
        ) : (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {/* {totalLessons > 0 && <span className="flex items-center gap-1.5"><Book className="h-4 w-4" /> {totalLessons} lecciones</span>} */}
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 2h 30m</span>
            </div>
        )}
      </CardFooter>
    </Card>
  );
}
