import "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJ2403TFP2LAMJpaK8rKHHRTk52Z5lpus",
  authDomain: "flex-tech-b0371.firebaseapp.com",
  projectId: "flex-tech-b0371",
  storageBucket: "flex-tech-b0371.appspot.com",
  messagingSenderId: "730979189646",
  appId: "1:730979189646:web:458f8d188749a7c09f1adf",
  measurementId: "G-W4R29KLW1X",
};

const app = initializeApp(firebaseConfig);

export default app;
