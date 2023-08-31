// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGifa5LbNkjkTWmQ0roaxUmPNjzHTGTO8",
  authDomain: "blogging-app-9a18f.firebaseapp.com",
  projectId: "blogging-app-9a18f",
  storageBucket: "blogging-app-9a18f.appspot.com",
  messagingSenderId: "539946488898",
  appId: "1:539946488898:web:8fbb023626d2a517ad09db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};