import "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoQcTX3ovWhMLYds9s9Zn99XcKmKHEcAE",
  authDomain: "flex-business-tech.firebaseapp.com",
  projectId: "flex-business-tech",
  storageBucket: "flex-business-tech.appspot.com",
  messagingSenderId: "63963946997",
  appId: "1:63963946997:web:5344758afb8b619f964abc",
  measurementId: "G-M75TVCFHS7",
};

const app = initializeApp(firebaseConfig);

export default app;
