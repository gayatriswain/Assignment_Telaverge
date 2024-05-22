import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC_hCOQ7YCEmC53h0XfbN_NXb33Pvzap3M",
  authDomain: "ultra-bearing-390206.firebaseapp.com",
  projectId: "ultra-bearing-390206",
  storageBucket: "ultra-bearing-390206.appspot.com",
  messagingSenderId: "999346896866",
  appId: "1:999346896866:web:801f806c3e707ddf2243bb",
  measurementId: "G-G1GES4QX5Z"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
