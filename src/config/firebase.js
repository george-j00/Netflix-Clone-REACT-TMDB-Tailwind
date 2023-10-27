    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANY8sMYjEP7ruLSL-4km28lHBCE5eHPnE",
  authDomain: "netflixlite-4494d.firebaseapp.com",
  projectId: "netflixlite-4494d",
  storageBucket: "netflixlite-4494d.appspot.com",
  messagingSenderId: "487939070124",
  appId: "1:487939070124:web:bbfff1fb0731ec5c09e709",
  measurementId: "G-FC5GV73PJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };


