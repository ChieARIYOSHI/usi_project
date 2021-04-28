import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "usi-project-farmers.firebaseapp.com",
  databaseURL: "https://usi-project-farmers-default-rtdb.firebaseio.com",
  projectId: "usi-project-farmers",
  storageBucket: "usi-project-farmers.appspot.com",
  messagingSenderId: "229906854528",
  appId: "1:229906854528:web:eab1435609f5cd16062c65",
  measurementId: "G-7ND4S3M39C"
});

// firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore().collection('farmers_meat');
const storage = firebase.storage();

export { db, storage };