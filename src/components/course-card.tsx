
"use client"

import Image from "next/image";
import Link from "next/link";
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

interface CourseCardProps {
  course: Course;
  className?: string;
  progress?: number;
}

const levelVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
  'básico': 'default',
  'intermedio': 'secondary',
  'avanzado': 'destructive'
}

const levelLabel: { [key: string]: string } = {
    'básico': 'Básico',
    'intermedio': 'Intermedio',
    'avanzado': 'Avanzado'
}


export function CourseCard({ course, className, progress }: CourseCardProps) {
  const level = course.level?.toLowerCase() || 'básico';

  const getInstructorName = () => {
    if (Array.isArray(course.instructor) && course.instructor.length > 1) {
      return "Varios Profesores";
    }
    return "Kursor BOT";
  };

  return (
    <Card className={cn("flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg", className)}>
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} aria-label={course.title}>
          <div className="relative">
            {course.imageUrl && (
              <Image
                src={course.imageUrl}
                alt={course.title ?? "Course thumbnail"}
                width={600}
                height={400}
                className="object-cover w-full h-40"
                data-ai-hint={`${course.pathId} course`}
              />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Badge variant={levelVariant[level] || 'outline'} className="capitalize mb-2">{levelLabel[level] || level}</Badge>
        <Link href={`/courses/${course.id}`} className="hover:text-primary">
            <h3 className="text-base font-bold leading-tight line-clamp-2">{course.title}</h3>
        </Link>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 p-4 pt-0">
        <p className="text-xs text-muted-foreground">{getInstructorName()}</p>
        {progress !== undefined ? (
            <div className="w-full mt-2">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">{progress}% completado</p>
            </div>
        ) : null}
      </CardFooter>
    </Card>
  );
}
