import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxej4OP0qreBrlGOiIEvgoA-wGMMkmukw",
  authDomain: "rasoi-house-10c49.firebaseapp.com",
  databaseURL:
    "https://rasoi-house-10c49-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rasoi-house-10c49",
  storageBucket: "rasoi-house-10c49.appspot.com",
  messagingSenderId: "350241073227",
  appId: "1:350241073227:web:5ab485b2575d4eabbc05ce",
  measurementId: "G-D582560S4W",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
const storage = getStorage(app);

export { app, dataBase, storage };
