import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth, ReactNativeAsyncStorage } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlrdsqMKJcglMFbLZQ22gHUogy2HddQh4",
  authDomain: "fir-demo-3d4fc.firebaseapp.com",
  projectId: "fir-demo-3d4fc",
  storageBucket: "fir-demo-3d4fc.firebasestorage.app",
  messagingSenderId: "725599752966",
  appId: "1:725599752966:web:ed108aaa6f490a34d2c487"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);