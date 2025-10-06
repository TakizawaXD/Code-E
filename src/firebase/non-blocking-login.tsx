
'use client';
import {
  Auth, // Import Auth type for type hinting
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // Assume getAuth and app are initialized elsewhere
} from 'firebase/auth';

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  // CRITICAL: Call signInAnonymously directly. Do NOT use 'await signInAnonymously(...)'.
  signInAnonymously(authInstance);
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): void {
  // CRITICAL: Call createUserWithEmailAndPassword directly. Do NOT use 'await createUserWithEmailAndPassword(...)'.
  createUserWithEmailAndPassword(authInstance, email, password);
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}

/** 
 * Initiate email/password sign-in (non-blocking). 
 * Accepts an optional onError callback to handle authentication failures.
 */
export function initiateEmailSignIn(
    authInstance: Auth, 
    email: string, 
    password: string,
    onError?: (error: any) => void
): void {
  // CRITICAL: Call signInWithEmailAndPassword directly. Do NOT use 'await signInWithEmailAndPassword(...)'.
  signInWithEmailAndPassword(authInstance, email, password)
    .catch(error => {
        // If an onError callback is provided, call it with the error.
        if (onError) {
            onError(error);
        } else {
            // If no callback is provided, log the error to the console as a fallback.
            console.error("Sign-in error:", error);
        }
    });
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}
