import firebase from "firebase/app";

const config = firebase.initializeApp({
  apiKey: "AIzaSyCNjF9HVy9RYDkFPiCMxYW-11vsTfoG4Ic",
  authDomain: "authtutor-88b4c.firebaseapp.com",
  projectId: "authtutor-88b4c",
  storageBucket: "authtutor-88b4c.appspot.com",
  messagingSenderId: "1040860760649",
  appId: "1:1040860760649:web:87ec8e2529c944ac804d98",
  measurementId: "G-LFN1NQXVXG",
});

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default config;
