
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAAw0T6VhQejyDFQl9_xAZazMcjtyKcxZQ",
  authDomain: "react-notes-fa23c.firebaseapp.com",
  projectId: "react-notes-fa23c",
  storageBucket: "react-notes-fa23c.appspot.com",
  messagingSenderId: "1029433821061",
  appId: "1:1029433821061:web:8f1eeaed156689ead866ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")