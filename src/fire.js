import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA64m1CCIfnPfwhT0cRsrPMZhxfSmQFReI",
  authDomain: "heyoagain.firebaseapp.com",
  projectId: "heyoagain",
  storageBucket: "heyoagain.appspot.com",
  messagingSenderId: "245247651298",
  appId: "1:245247651298:web:b2de19e96970ee0f909dbb",
  measurementId: "G-2YH7VH9MF2",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
