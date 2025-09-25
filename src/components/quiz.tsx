
"use client";

import React, { useState } from "react";
import type { Quiz as QuizType, QuizQuestion } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, RefreshCw } from "lucide-react";

interface QuizProps {
  quiz: QuizType;
}

export function QuizComponent({ quiz }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(quiz.questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handleRetry = () => {
    setSelectedAnswers(Array(quiz.questions.length).fill(null));
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  if (isSubmitted) {
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === quiz.questions[index].correctAnswer
    ).length;
    const totalQuestions = quiz.questions.length;
    const score = (correctAnswers / totalQuestions) * 100;

    return (
      <Card>
        <CardHeader>
          <CardTitle>Resultados del Cuestionario</CardTitle>
          <CardDescription>
            Has completado el cuestionario: {quiz.title}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-4xl font-bold">
            {correctAnswers} / {totalQuestions}
          </p>
          <p className="text-lg text-muted-foreground">
            Tu puntuación: {score.toFixed(0)}%
          </p>
          {score >= 80 ? (
            <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 /> ¡Excelente trabajo!
            </p>
          ) : (
            <p className="text-orange-500 font-semibold">¡Sigue practicando!</p>
          )}
        </CardContent>
        <CardFooter>
            <Button onClick={handleRetry} className="w-full">
                <RefreshCw className="mr-2"/>
                Intentar de Nuevo
            </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{quiz.title}</CardTitle>
        <CardDescription>
          Pregunta {currentQuestionIndex + 1} de {quiz.questions.length}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-semibold text-lg">{currentQuestion.question}</p>
        <RadioGroup
          value={selectedOption !== null ? String(selectedOption) : ""}
          onValueChange={(value) => handleSelectOption(Number(value))}
          className="space-y-2"
        >
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-2 p-3 rounded-md border",
                selectedOption === index && "bg-secondary"
              )}
            >
              <RadioGroupItem value={String(index)} id={`q${currentQuestion.id}-o${index}`} />
              <Label htmlFor={`q${currentQuestion.id}-o${index}`} className="flex-1 cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        {currentQuestionIndex < quiz.questions.length - 1 ? (
          <Button
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className="w-full"
          >
            Siguiente Pregunta
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="w-full"
          >
            Finalizar Cuestionario
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
