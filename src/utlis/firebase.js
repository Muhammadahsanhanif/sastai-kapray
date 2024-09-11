// src/utils/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcDy1RnwRae8RMazEI-vn-zFrUoN7N2Vw",
  authDomain: "reactfirebase-9fd7d.firebaseapp.com",
  projectId: "reactfirebase-9fd7d",
  storageBucket: "reactfirebase-9fd7d.appspot.com",
  messagingSenderId: "226143993234",
  appId: "1:226143993234:web:bb34d87c8089a8634bd54b",
  measurementId: "G-E7C3R5V8SS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

console.log(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
};
