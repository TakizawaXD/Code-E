
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { getAdminApp } from "@/firebase/admin";

const updateProfileSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().max(160).optional(),
});

export async function updateUser(
  userId: string,
  data: z.infer<typeof updateProfileSchema>
): Promise<{ success: boolean; error?: string }> {
  try {
    const validatedData = updateProfileSchema.parse(data);
    
    // This will throw if the SDK is not initialized, which is caught below.
    const adminApp = getAdminApp();
    const firestore = adminApp.firestore();

    const userRef = firestore.collection("users").doc(userId);

    await userRef.update({
      name: validatedData.name,
      description: validatedData.description || "",
    });

    // Revalidate paths to show updated info
    revalidatePath("/dashboard/settings");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error: any) {
    console.error("Error in server action updateUser:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid data provided." };
    }
    // Provide a more generic but helpful error message
    return {
      success: false,
      error: error.message || "Could not update profile. Please check server logs.",
    };
  }
}
