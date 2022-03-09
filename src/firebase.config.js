import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3oRrYpIY-GxwMexMNd_n3VELJTxm5_Co",
  authDomain: "house-marketpalce-app-d944d.firebaseapp.com",
  projectId: "house-marketpalce-app-d944d",
  storageBucket: "house-marketpalce-app-d944d.appspot.com",
  messagingSenderId: "293841247487",
  appId: "1:293841247487:web:864829e4d6c996e1e140ca"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()