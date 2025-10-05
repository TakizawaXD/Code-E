import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import serviceAccount from './firebase.json';

const appName = 'firebase-admin-app-e-learning';

// Check if the app is already initialized
if (!admin.apps.some(app => app?.name === appName)) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    }, appName);
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error) {
    console.error('Firebase Admin SDK initialization error:', error);
    throw new Error('Could not initialize Firebase Admin SDK. Please check your service account credentials.');
  }
}

const adminApp = admin.app(appName);

export function getAdminApp() {
  return adminApp;
}

export function getAdminAuth() {
  return adminApp.auth();
}
