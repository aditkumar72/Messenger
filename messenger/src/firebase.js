import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "messenger-6518c.firebaseapp.com",
    projectId: "messenger-6518c",
    storageBucket: "messenger-6518c.appspot.com",
    messagingSenderId: "570719991218",
    appId: process.env.REACT_APP_FIREBASE_ID
}).auth();