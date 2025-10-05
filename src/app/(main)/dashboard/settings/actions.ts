"use server";

import "dotenv/config";
import { getAdminApp } from "@/firebase/admin";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const updateProfileSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().max(160).optional(),
});

export async function updateUser(
  userId: string,
  data: z.infer<typeof updateProfileSchema>
) {
  try {
    const validatedData = updateProfileSchema.parse(data);
    const adminApp = await getAdminApp();
    const firestore = adminApp.firestore();

    const userRef = firestore.collection("users").doc(userId);

    await userRef.update({
      name: validatedData.name,
      description: validatedData.description || "",
    });

    // Revalidate the path to show updated info if the user navigates back
    revalidatePath("/dashboard/settings");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error: any) {
    console.error("Error in server action updateUser:", error);
    // Handle Zod errors specifically if you want
    if (error instanceof z.ZodError) {
      return { success: false, error: "Datos inválidos." };
    }
    return {
      success: false,
      error:
        error.message || "No se pudo inicializar el SDK de Admin de Firebase.",
    };
  }
}
