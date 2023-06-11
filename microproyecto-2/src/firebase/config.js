import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAiImvu4GkZ084i0e3hynNOTqgytd4b1sA",
    authDomain: "audiomet-visual.firebaseapp.com",
    projectId: "audiomet-visual",
    storageBucket: "audiomet-visual.appspot.com",
    messagingSenderId: "525378480875",
    appId: "1:525378480875:web:a338fee39127d65b46ecae"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
