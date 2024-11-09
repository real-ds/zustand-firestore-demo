// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCm1WBAAcphr9B19WhILQqHAKFmx_p4jPY",
    authDomain: "vit-connect-420a2.firebaseapp.com",
    projectId: "vit-connect-420a2",
    storageBucket: "vit-connect-420a2.appspot.com",
    messagingSenderId: "1030046126425",
    appId: "1:1030046126425:web:e360a8ddd203035d57bc48",
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
