'use server';

import 'dotenv/config';
import { getAdminApp, getAdminAuth } from '@/firebase/admin';
import { UpdateUserProfile } from '@/lib/types';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

/**
 * Updates a user's profile information in Firestore using the Admin SDK.
 * This server action is secure because it verifies the user's identity
 * via the session cookie and uses elevated admin privileges for the write operation.
 *
 * @param data The user profile data to update.
 * @returns An object indicating success or failure.
 */
export async function updateUser(data: UpdateUserProfile): Promise<{ success: boolean; error?: string }> {
  try {
    const adminApp = await getAdminApp();
    const adminAuth = getAdminAuth(adminApp);
    const firestore = adminApp.firestore();
    
    // 1. Get the session cookie from the request
    const sessionCookie = cookies().get('__session')?.value;
    if (!sessionCookie) {
      throw new Error('No session cookie found. User is not authenticated.');
    }

    // 2. Verify the session cookie to get the authenticated user
    const decodedToken = await adminAuth.verifySessionCookie(sessionCookie, true);
    const userId = decodedToken.uid;

    if (!userId) {
      throw new Error('Invalid session token.');
    }

    // 3. Get the reference to the user's document in Firestore
    const userRef = firestore.collection('users').doc(userId);

    // 4. Update the document with the new data
    // This operation uses admin privileges, bypassing client-side security rules.
    await userRef.update({
      name: data.name,
      description: data.description,
    });
    
    // 5. Revalidate the path to ensure the client sees the updated data
    revalidatePath('/dashboard/settings');
    revalidatePath('/dashboard');

    return { success: true };

  } catch (error: any) {
    console.error('Error in updateUser server action:', error);
    return { success: false, error: error.message || 'An unexpected error occurred.' };
  }
}
