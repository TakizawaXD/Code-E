
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2, Palette } from "lucide-react";
import { useEffect, useTransition } from "react";
import type { UserProfile } from "@/lib/types";
import { updateUser } from "./actions";
import { getDictionary } from "@/lib/i18n";


const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(50),
  description: z
    .string()
    .max(160, { message: "La descripción no puede tener más de 160 caracteres." })
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function SettingsPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const dict = getDictionary();

  const userProfileRef = useMemoFirebase(() => {
    if (!user) return null;
    const firestore = useFirestore();
    if (!firestore) return null;
    return doc(firestore, "users", user.uid);
  }, [user]);

  const { data: userProfile, isLoading: isProfileLoading } =
    useDoc<UserProfile>(userProfileRef);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (userProfile) {
      form.reset({
        name: userProfile.name || user?.displayName || "",
        description: userProfile.description || "",
      });
    } else if (user) {
      form.reset({
        name: user.displayName || "",
        description: "",
      });
    }
  }, [user, userProfile, form]);

  async function onSubmit(data: ProfileFormValues) {
    if (!user) return;

    startTransition(async () => {
      const result = await updateUser(user.uid, data);

      if (result?.success) {
        toast({
          title: dict.settings.updateSuccessTitle,
          description: dict.settings.updateSuccessDescription,
        });
        router.refresh();
      } else {
        toast({
          variant: "destructive",
          title: dict.settings.updateErrorTitle,
          description: result?.error || "An unknown error occurred.",
        });
      }
    });
  }

  if (isUserLoading || isProfileLoading) {
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
  
  const emailUsername = user.email || "";

  return (
    <div className="container max-w-2xl py-12 md:py-20">
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>{dict.settings.profileSettingsTitle}</CardTitle>
            <CardDescription>{dict.settings.profileSettingsDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{dict.settings.fullNameLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={dict.settings.fullNamePlaceholder} {...field} />
                      </FormControl>
                      <FormDescription>{dict.settings.fullNameDescription}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormLabel>{dict.settings.usernameLabel}</FormLabel>
                  <FormControl>
                    <Input
                      value={emailUsername}
                      readOnly
                      className="cursor-not-allowed bg-muted/50"
                    />
                  </FormControl>
                  <FormDescription>{dict.settings.usernameDescription}</FormDescription>
                </FormItem>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{dict.settings.bioLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={dict.settings.bioPlaceholder}
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>{dict.settings.bioDescription}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending}>
                  {isPending ? dict.settings.savingButton : dict.settings.saveButton}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{dict.settings.appearanceTitle}</CardTitle>
            <CardDescription>{dict.settings.appearanceDescription}</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">{dict.settings.appearanceHint || 'Puedes cambiar el tema de color y el modo claro/oscuro desde el menú de la esquina superior derecha.'}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
