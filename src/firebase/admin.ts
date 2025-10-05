import * as admin from 'firebase-admin';

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export async function getAdminApp() {
  const appName = 'firebase-admin-app-e-learning';
  const existingApp = admin.apps.find(app => app?.name === appName);
  
  if (existingApp) {
    return existingApp;
  }

  // Attempt to initialize from environment variables (recommended for production)
  try {
    return admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    }, appName);
  } catch (e: any) {
    if (e.code === 'app/duplicate-app') {
       // This can happen in dev with hot-reloading, it's safe to ignore.
       const anApp = admin.app(appName);
       if (anApp) return anApp;
    }
    console.error('Admin SDK initialization from env vars failed. This is expected in local dev if service account is not set.', e.message);
  }
  
  // Fallback for local development: use service account key file
  // Ensure the GOOGLE_APPLICATION_CREDENTIALS env var is set to the path of your service account key file.
  // This approach is not recommended for production environments.
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      console.warn("GOOGLE_APPLICATION_CREDENTIALS not set. Admin SDK might not initialize correctly in local dev.");
  }
  
  // If we've reached here, it means initialization failed. We re-throw to make it clear.
  throw new Error("Firebase Admin SDK failed to initialize. Ensure environment variables or service account key are set correctly.");
}

export function getAdminAuth(app: admin.app.App) {
    return app.auth();
}
