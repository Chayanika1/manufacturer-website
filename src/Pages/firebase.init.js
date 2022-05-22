// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUEJatCBbqcmQbQeDgdtno38NncC4RZEg",
  authDomain: "tools-portal-50f7c.firebaseapp.com",
  projectId: "tools-portal-50f7c",
  storageBucket: "tools-portal-50f7c.appspot.com",
  messagingSenderId: "591435897018",
  appId: "1:591435897018:web:cbd90ffc2d0b5787edca83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;