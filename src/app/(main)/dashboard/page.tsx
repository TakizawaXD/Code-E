import { user, learningPaths } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/course-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  const userAvatar = PlaceHolderImages.find((img) => img.id === user.avatarId);
  const coursesInProgress = learningPaths.flatMap(path => path.courses).slice(0, 2);
  const completedCourses = learningPaths.flatMap(path => path.courses).slice(2, 3);
  
  return (
    <div className="container py-8 md:py-12">
      <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={userAvatar?.imageUrl} alt={user.name} />
            <AvatarFallback className="text-3xl">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">Bienvenido de nuevo,</p>
            <h1 className="text-3xl font-bold tracking-tight font-headline">{user.name}</h1>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cursos Completados</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">1</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cursos en Progreso</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">{coursesInProgress.length}</div>
                </CardContent>
            </Card>
        </div>
      </header>
      
      <Separator className="my-8" />

      <Tabs defaultValue="in-progress" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="in-progress">En Progreso</TabsTrigger>
          <TabsTrigger value="certificates">Certificados</TabsTrigger>
        </TabsList>
        <TabsContent value="in-progress">
            <section className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {coursesInProgress.map((course) => (
                    <CourseCard key={course.id} course={course} progress={Math.floor(Math.random() * 50) + 20} />
                ))}
                </div>
            </section>
        </TabsContent>
        <TabsContent value="certificates">
           <section className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {completedCourses.map((course) => (
                    <Card key={course.id} className="flex flex-col items-center justify-center p-6 text-center">
                        <Award className="w-16 h-16 text-yellow-500 mb-4"/>
                        <p className="font-semibold">Certificado de Finalización</p>
                        <p className="text-muted-foreground text-sm mt-1">{course.title}</p>
                    </Card>
                ))}
                </div>
            </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
