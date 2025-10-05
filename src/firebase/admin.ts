
import * as admin from "firebase-admin";

// Path to your service account key file
// IMPORTANT: This path must be correct and the file must be present.
// You can get this file from your Firebase project settings.
import serviceAccount from './firebase.json';

// Ensure the service account has the correct type
const typedServiceAccount = serviceAccount as admin.ServiceAccount;

// This function initializes the Firebase Admin SDK.
// It ensures that it's only initialized once.
export function getAdminApp(): admin.app.App {
  if (admin.apps.length > 0) {
    return admin.apps[0]!;
  }

  try {
    return admin.initializeApp({
      credential: admin.credential.cert(typedServiceAccount),
    });
  } catch (error: any) {
    console.error("Firebase Admin SDK initialization error:", error);
    throw new Error("Could not initialize Firebase Admin SDK. Please check your service account credentials.");
  }
}
