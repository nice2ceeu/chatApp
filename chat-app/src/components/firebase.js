import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAbKKdt1ZUc2bIqsdJ1o93AT7lqVlHDD6Y",
  authDomain: "bago-700ae.firebaseapp.com",
  projectId: "bago-700ae",
  storageBucket: "bago-700ae.appspot.com",
  messagingSenderId: "858703746233",
  appId: "1:858703746233:web:1b9284fd43f9793ea5f768",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
