import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUnDj8NWhyBYCA5AVMuIqXAfBWVq08m7s",
  authDomain: "react-netflix-b1b0c.firebaseapp.com",
  projectId: "react-netflix-b1b0c",
  storageBucket: "react-netflix-b1b0c.appspot.com",
  messagingSenderId: "37779690294",
  appId: "1:37779690294:web:8a353e6f58145375a45997"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth };
export default db;