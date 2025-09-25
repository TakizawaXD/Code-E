import { notFound } from "next/navigation";
import Image from "next/image";
import { allCourses, user } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PlayCircle, CheckCircle2, MessageSquare, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = allCourses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  const userAvatar = PlaceHolderImages.find((img) => img.id === user.avatarId);
  const instructorAvatar = PlaceHolderImages.find((img) => img.id === course.instructorAvatar);

  return (
    <div className="container mx-auto py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-video w-full bg-secondary rounded-lg flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-muted-foreground" />
          </div>

          <div>
            <h1 className="text-3xl font-bold font-headline">{course.title}</h1>
            <p className="text-lg text-muted-foreground mt-2">{course.description}</p>
            <div className="flex items-center gap-4 mt-4">
                <Avatar>
                    <AvatarImage src={instructorAvatar?.imageUrl} alt={course.instructor} />
                    <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{course.instructor}</p>
                    <p className="text-sm text-muted-foreground">Instructor Experto</p>
                </div>
            </div>
          </div>
          
          <Separator />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2"><MessageSquare className="w-6 h-6" /> Comentarios</h2>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={userAvatar?.imageUrl} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="w-full">
                <Textarea placeholder="Escribe tu comentario o pregunta..." className="mb-2" />
                <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar
                </Button>
              </div>
            </div>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarImage src={instructorAvatar?.imageUrl} alt={course.instructor} />
                        <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{course.instructor} <span className="text-xs text-primary bg-primary/10 p-1 rounded-md">Instructor</span></p>
                        <p className="text-sm mt-1">¡Excelente pregunta! La respuesta es...</p>
                    </div>
                </div>
            </div>
          </div>

        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold mb-4">Contenido del Curso</h2>
            <Accordion type="single" collapsible defaultValue={course.modules[0]?.id} className="w-full">
              {course.modules.map((moduleItem, index) => (
                <AccordionItem value={moduleItem.id} key={moduleItem.id}>
                  <AccordionTrigger className="text-base font-semibold">
                    <div className="text-left">
                        <p className="text-sm text-muted-foreground">Sección {index + 1}</p>
                        <p>{moduleItem.title}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {moduleItem.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <Button variant="ghost" className="w-full justify-start h-auto py-2">
                            <CheckCircle2 className="w-4 h-4 mr-3 text-green-500" />
                            <div className="flex flex-col items-start">
                                <span className="font-normal text-sm text-left">{lesson.title}</span>
                                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                            </div>
                          </Button>
                        </li>
                      ))}
                       <li >
                          <Button variant="ghost" className="w-full justify-start h-auto py-2" disabled>
                            <PlayCircle className="w-4 h-4 mr-3" />
                            <div className="flex flex-col items-start">
                                <span className="font-normal text-sm text-left">Próxima lección</span>
                                <span className="text-xs text-muted-foreground">12:30</span>
                            </div>
                          </Button>
                        </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
