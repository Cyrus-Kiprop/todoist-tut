// firebase configurations

import firebase from "firebase/app";
import "firebase/firestore";

// FAKE USER ID --> 465a5f25-5d8c-45e0-85c9-e42d9e0b174f

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCvG7iA6BJJv_Fj3akfqO09Pe37EbjlcxY",
  authDomain: "todoist-tut-9e684.firebaseapp.com",
  databaseURL: "https://todoist-tut-9e684.firebaseio.com",
  projectId: "todoist-tut-9e684",
  storageBucket: "todoist-tut-9e684.appspot.com",
  messagingSenderId: "473917288188",
  appId: "1:473917288188:web:01d448128d78d73abbf179",
  measurementId: "G-8ENWZ65E3V"
});

firebase.analytics();

export { firebaseConfig as firebase };
