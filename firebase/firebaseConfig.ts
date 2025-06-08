// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpduZQBRN6Kv3VI10f6agfWc7m1i_N01c",
  authDomain: "alinneducationmm.firebaseapp.com",
  projectId: "alinneducationmm",
  storageBucket: "alinneducationmm.firebasestorage.app",
  messagingSenderId: "51963733816",
  appId: "1:51963733816:web:78cc0303349938756783cd",
  measurementId: "G-VB815W76Z5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
