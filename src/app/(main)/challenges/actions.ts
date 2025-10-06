
"use server";

import { z } from "zod";
import { Resend } from 'resend';

const submitChallengeSchema = z.object({
  challengeTitle: z.string(),
  language: z.string(),
  githubUrl: z.string().url("Por favor, introduce una URL de GitHub válida."),
});

const recipientEmail = "andresmontalvo2222@gmail.com";

export async function submitChallengeAction(
  data: z.infer<typeof submitChallengeSchema>
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!process.env.RESEND_API_KEY) {
        throw new Error("La clave de API de Resend no está configurada en el servidor. El administrador necesita añadirla para que esta función esté disponible.");
    }

    const validatedData = submitChallengeSchema.parse(data);

    // IMPORTANT: Create an account at https://resend.com and get your API key.
    // Add the key to your environment variables (.env.local) as RESEND_API_KEY
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Kursor Platform <onboarding@resend.dev>', // This must be a verified domain in Resend. 'onboarding@resend.dev' is for testing.
      to: recipientEmail,
      subject: `Nueva Entrega de Reto: ${validatedData.challengeTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>¡Nueva entrega del Reto Semanal!</h2>
          <p>Un usuario ha completado un reto en la plataforma Kursor.</p>
          <h3>Detalles de la Entrega:</h3>
          <ul>
            <li><strong>Reto:</strong> ${validatedData.challengeTitle}</li>
            <li><strong>Lenguaje:</strong> ${validatedData.language}</li>
            <li><strong>Repositorio de GitHub:</strong> <a href="${validatedData.githubUrl}">${validatedData.githubUrl}</a></li>
          </ul>
          <p>Por favor, revisa el repositorio para evaluar el proyecto.</p>
          <hr>
          <p style="font-size: 0.8em; color: #777;">Este es un correo automático generado por la plataforma Kursor.</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error en la acción de envío de reto:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Datos de envío inválidos." };
    }
    return {
      success: false,
      error: error.message || "No se pudo enviar la entrega. Por favor, inténtalo de nuevo más tarde.",
    };
  }
}
