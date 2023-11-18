import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsRt2ocNZRPafyWPzGX69lneSWKcwbYWY",
    authDomain: "react-alejo.firebaseapp.com",
    projectId: "react-alejo",
    storageBucket: "react-alejo.appspot.com",
    messagingSenderId: "686377713143",
    appId: "1:686377713143:web:f65040f1a796d1906b82f2",
    measurementId: "G-6B4E4VDWPC"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);