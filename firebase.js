import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCe96dXtMbH7Lu37-YD9wEKpjRxN89fBkY",
  authDomain: "whatsapp-clone-5dff4.firebaseapp.com",
  projectId: "whatsapp-clone-5dff4",
  storageBucket: "whatsapp-clone-5dff4.appspot.com",
  messagingSenderId: "763188664497",
  appId: "1:763188664497:web:92c93f65ee96f22403aa90",
  measurementId: "G-814402S8FH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
