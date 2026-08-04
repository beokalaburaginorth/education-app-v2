import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwh1ySLOERegypu3Fts_QKCa0auT1sDMQ",
  authDomain: "beo-education-portal.firebaseapp.com",
  projectId: "beo-education-portal",
  storageBucket: "beo-education-portal.firebasestorage.app",
  messagingSenderId: "580768321101",
  appId: "1:580768321101:web:b72f123170c9fd229ad604",
  measurementId: "G-EB6Q08Z6E2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
