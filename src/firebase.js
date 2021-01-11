import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUSVJuTK4EubWrSfTXeVTXIEQQk-6y43U",
  authDomain: "snapchat-clone-c2ca2.firebaseapp.com",
  projectId: "snapchat-clone-c2ca2",
  storageBucket: "snapchat-clone-c2ca2.appspot.com",
  messagingSenderId: "567816299869",
  appId: "1:567816299869:web:2635e8b45cadf5faa1f4b4",
  measurementId: "G-PVWS4JMPFJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
