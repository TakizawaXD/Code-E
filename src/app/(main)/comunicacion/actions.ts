
'use server';

import { getAdminApp } from '@/firebase/admin';
import { revalidatePath } from 'next/cache';
import { firestore } from 'firebase-admin';
import type { ChatMessage } from '@/lib/types';
import { z } from 'zod';

const messageSchema = z.object({
  authorId: z.string(),
  authorName: z.string(),
  authorAvatarUrl: z.string().optional(),
  content: z.string().min(1, "El mensaje no puede estar vacío.").max(1000, "El mensaje es demasiado largo."),
});

export async function sendMessage(
  data: z.infer<typeof messageSchema>
): Promise<{ success: boolean; error?: string }> {
  try {
    const validatedData = messageSchema.parse(data);

    const adminApp = getAdminApp();
    const db = adminApp.firestore();

    const chatRef = db.collection('comunicacion');
    await chatRef.add({
      ...validatedData,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });

    revalidatePath('/comunicacion');
    return { success: true };

  } catch (error: any) {
    console.error("Error sending message:", error);
    if (error instanceof z.ZodError) {
        return { success: false, error: "Datos de mensaje inválidos." };
    }
    return { success: false, error: error.message || "No se pudo enviar el mensaje." };
  }
}
