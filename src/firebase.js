// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBALwmwW2KFqlIwRt_LvC_yD9nAt9aHWIc",
  authDomain: "edu-portal-project.firebaseapp.com",
  projectId: "edu-portal-project",
  storageBucket: "edu-portal-project.appspot.com",  
  messagingSenderId: "969475306867",
  appId: "1:969475306867:web:41c98fa3c58b25b4140106"
};


const app=initializeApp(firebaseConfig)
export const auth =getAuth(app)
export const db=getFirestore(app)