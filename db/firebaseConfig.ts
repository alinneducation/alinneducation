// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZD-9iW8AE2EoSCkwnEYBR7PMevA6Ydlo",
  authDomain: "alinn-education-d82d5.firebaseapp.com",
  projectId: "alinn-education-d82d5",
  storageBucket: "alinn-education-d82d5.firebasestorage.app",
  messagingSenderId: "107911786484",
  appId: "1:107911786484:web:378372b0abbb64dec993a1",
  measurementId: "G-RPZD56RT9H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };
