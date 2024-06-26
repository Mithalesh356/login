// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXsRiwWCTUvT5xtF6CkhUbxrOTeGwv8-4",
  authDomain: "login-f292a.firebaseapp.com",
  projectId: "login-f292a",
  storageBucket: "login-f292a.appspot.com",
  messagingSenderId: "862104047025",
  appId: "1:862104047025:web:29e0d1d8e8635a07608190",
  measurementId: "G-2TSSF428HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);