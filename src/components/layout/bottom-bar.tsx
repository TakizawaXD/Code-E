
"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { List, MoveLeft, MoveRight } from "lucide-react";

interface BottomBarProps {
  onNavOpen: () => void;
  courseProgress: number;
}

export function BottomBar({ onNavOpen, courseProgress }: BottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex-1">
          <Progress value={courseProgress} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1">{Math.round(courseProgress)}% completado</p>
        </div>
        <Button variant="outline" size="icon" onClick={onNavOpen}>
          <List className="h-5 w-5" />
          <span className="sr-only">Abrir navegación del curso</span>
        </Button>
      </div>
    </div>
  );
}
