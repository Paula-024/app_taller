import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDVMxSkTmFKqUsOzLUEOA9d2geF4aA6fbk",
  authDomain: "tallerii.firebaseapp.com",
  projectId: "tallerii",
  storageBucket: "tallerii.appspot.com",
  messagingSenderId: "191188815613",
  appId: "1:191188815613:web:a6620156c2ae27d51b3894",
  measurementId: "G-PQNYVRXZWB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)