
import * as admin from "firebase-admin";

// IMPORTANT: The service account key is injected automatically by the hosting environment.
// Do not manually set the service account file path.
// The GOOGLE_APPLICATION_CREDENTIALS environment variable will be populated.

let app: admin.app.App | null = null;

export function getAdminApp(): admin.app.App {
  if (app) {
    return app;
  }

  // Check if the app is already initialized, which can happen in some environments
  if (admin.apps.length > 0) {
    app = admin.apps[0];
    if (app) return app;
  }

  try {
    // initializeApp() will automatically use the GOOGLE_APPLICATION_CREDENTIALS
    // environment variable to find the service account credentials.
    app = admin.initializeApp();
    return app;
  } catch (error: any) {
    console.error("Firebase Admin SDK initialization error:", error);
    // Throw a more generic error to avoid leaking implementation details
    throw new Error("Could not initialize Firebase Admin SDK on the server.");
  }
}
