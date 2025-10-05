
"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useFirebase, useUser, useFirestore } from "@/firebase";
import { collection, serverTimestamp, addDoc, doc, increment } from "firebase/firestore";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(5, { message: "El título debe tener al menos 5 caracteres." }).max(100),
  content: z.string().min(10, { message: "El contenido debe tener al menos 10 caracteres." }),
});

export default function NewThreadPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user || !firestore) return;

    try {
      const threadsRef = collection(firestore, "forumThreads");
      const now = serverTimestamp();
      
      const newThread = {
        ...values,
        authorId: user.uid,
        authorName: user.displayName || user.email || "Usuario Anónimo",
        authorAvatarUrl: user.photoURL || "",
        createdAt: now,
        lastPostAt: now,
        postCount: 1, // The initial post counts as 1
      };
      
      const docRef = await addDoc(threadsRef, newThread);

      // Award points for creating a new thread
      const userRef = doc(firestore, "users", user.uid);
      setDocumentNonBlocking(userRef, { points: increment(5) }, { merge: true });

      toast({
        title: "¡Discusión creada!",
        description: "Tu nuevo tema ha sido publicado en el foro. (+5 puntos)",
      });

      router.push(`/community/threads/${docRef.id}`);

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error al crear la discusión",
        description: error.message,
      });
    }
  }

  if (isUserLoading) {
    return <p>Cargando...</p>;
  }

  if (!user) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div className="container max-w-3xl py-12 md:py-20">
       <div className="mb-8">
        <Button variant="ghost" asChild>
            <Link href="/community">
                <ArrowLeft className="mr-2"/>
                Volver a la comunidad
            </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar una Nueva Discusión</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título de la Discusión</FormLabel>
                    <FormControl>
                      <Input placeholder="Escribe un título claro y conciso" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escribe el contenido de tu mensaje aquí. Puedes usar markdown para formatear."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Publicando..." : "Publicar Discusión"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
