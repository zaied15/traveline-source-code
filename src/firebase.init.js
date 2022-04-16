// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAoDxsUt0T337At8RIwvXJravfRDd3Iyc",
  authDomain: "traveline-firebase-auth.firebaseapp.com",
  projectId: "traveline-firebase-auth",
  storageBucket: "traveline-firebase-auth.appspot.com",
  messagingSenderId: "1015669117972",
  appId: "1:1015669117972:web:1557564e8948344acac301",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
