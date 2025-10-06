
"use server";

import { getAdminApp } from "@/firebase/admin";
import { revalidatePath } from "next/cache";
import { firestore } from "firebase-admin";
import type { Comment } from "@/lib/types";

export async function awardPointsForLesson(userId: string, lessonId: string) {
    if (!userId || !lessonId) {
        return { success: false, error: "User ID and Lesson ID are required." };
    }

    try {
        const adminApp = getAdminApp();
        const db = adminApp.firestore();

        // Check if points for this lesson have already been awarded to prevent duplicates
        const progressRef = db.collection('users').doc(userId).collection('lessonProgress').doc(lessonId);
        const progressDoc = await progressRef.get();

        if (progressDoc.exists && progressDoc.data()?.pointsAwarded) {
             // Points already awarded, do nothing.
            return { success: true, message: "Points already awarded." };
        }

        // Award points
        const userRef = db.collection("users").doc(userId);
        await db.runTransaction(async (transaction) => {
            const userDoc = await transaction.get(userRef);
            if (!userDoc.exists) {
                throw "User document not found!";
            }
            const currentPoints = userDoc.data()?.points || 0;
            const newPoints = currentPoints + 10; // Award 10 points per lesson
            transaction.update(userRef, { points: newPoints });
            transaction.set(progressRef, { pointsAwarded: true, completedAt: firestore.FieldValue.serverTimestamp() }, { merge: true });
        });

        revalidatePath("/dashboard");

        return { success: true, newPoints: (await userRef.get()).data()?.points };

    } catch (error: any) {
        console.error("Error awarding points:", error);
        return { success: false, error: error.message || "Could not award points." };
    }
}
