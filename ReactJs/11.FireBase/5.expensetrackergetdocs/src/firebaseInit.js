import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs6oStQrCWBaAa1nCkoOyoGo2y-53Pyg0",
  authDomain: "expense-tracker-app-31201.firebaseapp.com",
  projectId: "expense-tracker-app-31201",
  storageBucket: "expense-tracker-app-31201.appspot.com",
  messagingSenderId: "757714324404",
  appId: "1:757714324404:web:d65aa7261efce296e000e1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
