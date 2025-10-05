"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useUser } from "@/firebase";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useEffect, useTransition } from "react";
import type { UserProfile } from "@/lib/types";
import { updateUser } from "./actions";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(50),
  username: z.string(), // This is for display only.
  description: z
    .string()
    .max(160, { message: "La descripción no puede tener más de 160 caracteres." })
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function SettingsPage() {
  const { user, isUserLoading } = useUser();
  // We cannot get userProfile from a hook because this is a server component now.
  // We'll fetch it inside the server action.

  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    // We will set default values once user data is available client-side
  });

  // Since we don't have the profile data initially, we can load it on the client
  // and populate the form. This avoids passing server data to a client component directly.
  useEffect(() => {
    if (user) {
      // In a real app, you might fetch the user's current profile data here
      // and use form.reset() to populate the fields.
      // For now, we'll just use the basic info from the auth object.
      form.reset({
        name: user.displayName || "",
        username: user.email || "", // Assuming username is email for now
        description: "", // This would be fetched
      });
    }
  }, [user, form]);

  async function onSubmit(data: ProfileFormValues) {
    if (!user) return;

    startTransition(async () => {
      try {
        const result = await updateUser(user.uid, {
          name: data.name,
          description: data.description || "",
        });

        if (result && result.success) {
          toast({
            title: "¡Perfil actualizado!",
            description: "Tus cambios han sido guardados correctamente.",
          });
          // Optionally, refresh the page or re-fetch data if needed
          router.refresh();
        } else {
          throw new Error(result?.error || "Ocurrió un error desconocido.");
        }
      } catch (error: any) {
        console.error("Error updating profile:", error);
        toast({
          variant: "destructive",
          title: "Error al actualizar",
          description: error.message,
        });
      }
    });
  }

  if (isUserLoading) {
    return (
      <div className="container flex justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div className="container max-w-2xl py-12 md:py-20">
      <Card>
        <CardHeader>
          <CardTitle>Ajustes de Perfil</CardTitle>
          <CardDescription>
            Aquí puedes modificar la información de tu perfil público.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre completo" {...field} />
                    </FormControl>
                    <FormDescription>
                      Este es el nombre que se mostrará públicamente.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de Usuario (Email)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu_usuario"
                        {...field}
                        readOnly
                        className="cursor-not-allowed bg-muted/50"
                      />
                    </FormControl>
                    <FormDescription>
                      Tu email se usa como identificador y no se puede cambiar.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biografía</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos un poco sobre ti..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Una breve descripción sobre tus intereses y lo que estás
                      aprendiendo.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                {isPending ? "Guardando..." : "Guardar Cambios"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
