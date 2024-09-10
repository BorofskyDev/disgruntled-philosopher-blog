// libs/firebase/firebase.js

import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Only initialize Firebase in the client (browser environment)
let firebaseApp
if (typeof window !== 'undefined' && !getApps().length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = getApp()
}

// Firebase services
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp)

export { db, auth, storage }
