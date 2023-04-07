import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC-85vrjq86VPQlW-N348OsdtU1bRh15oE",
  authDomain: "chat-app-1db70.firebaseapp.com",
  projectId: "chat-app-1db70",
  storageBucket: "chat-app-1db70.appspot.com",
  messagingSenderId: "1067531815724",
  appId: "1:1067531815724:web:ae7945c1bd5b18ea907a89"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

