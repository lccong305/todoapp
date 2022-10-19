import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ6v-b3PHxPD2sUpo_cZ2i2UhKFrBs8I8",
  authDomain: "evon-firebase.firebaseapp.com",
  projectId: "evon-firebase",
  storageBucket: "evon-firebase.appspot.com",
  messagingSenderId: "337180332469",
  appId: "1:337180332469:web:9e0e2a973c5e31101cc9fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
