import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBneArLWXRhkiG7vNKhwoipGE1hMguwYBc",
  authDomain: "firecontact-a4d05.firebaseapp.com",
  databaseURL: "https://firecontact-a4d05-default-rtdb.firebaseio.com",
  projectId: "firecontact-a4d05",
  storageBucket: "firecontact-a4d05.appspot.com",
  messagingSenderId: "728368478656",
  appId: "1:728368478656:web:2159e5fbbb05a49d75f025"
};

firebase.initializeApp(firebaseConfig);


export default firebase;
