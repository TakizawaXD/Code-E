
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useUser, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import type { UserProfile } from "@/lib/types";

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }).max(50),
  username: z.string(), // This is for display only, not for submission.
  description: z.string().max(160, { message: "La descripción no puede tener más de 160 caracteres." }).optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function SettingsPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const userProfileRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, "users", user.uid);
  }, [user, firestore]);
  
  const { data: userProfile, isLoading: isProfileLoading } = useDoc<UserProfile>(userProfileRef);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      username: "",
      description: "",
    },
  });

  useEffect(() => {
    if (userProfile) {
      form.reset({
        name: userProfile.name || "",
        username: userProfile.username || "",
        description: userProfile.description || "",
      });
    }
  }, [userProfile, form]);

  async function onSubmit(data: ProfileFormValues) {
    if (!user || !userProfileRef) return;

    try {
      // The ONLY source of truth for the user profile is Firestore.
      // We ONLY update the fields that are meant to be editable.
      await updateDoc(userProfileRef, {
        name: data.name,
        description: data.description || "",
      });

      toast({
        title: "¡Perfil actualizado!",
        description: "Tus cambios han sido guardados correctamente.",
      });
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast({
        variant: "destructive",
        title: "Error al actualizar",
        description: "No se pudo guardar tu perfil. Es posible que no tengas permisos.",
      });
    }
  }

  if (isUserLoading || isProfileLoading) {
    return <div className="container flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin" /></div>;
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
                    <FormLabel>Nombre de Usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="tu_usuario" {...field} readOnly className="cursor-not-allowed bg-muted/50" />
                    </FormControl>
                     <FormDescription>
                      Tu nombre de usuario es único y no se puede cambiar.
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
                      Una breve descripción sobre tus intereses y lo que estás aprendiendo.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Guardando..." : "Guardar Cambios"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
