// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-SPD7SMP0QPO4LBttYsVVDbZwy_433E",
  authDomain: "practics-firebase-project.firebaseapp.com",
  projectId: "practics-firebase-project",
  storageBucket: "practics-firebase-project.appspot.com",
  messagingSenderId: "165079287394",
  appId: "1:165079287394:web:bd44aa8d73dccb494ff33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;