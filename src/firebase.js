import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBc1kSuJgBccAGCX1oI4g-ZQ6sgE4J1Frs",
  authDomain: "clone-8c494.firebaseapp.com",
  projectId: "clone-8c494",
  storageBucket: "clone-8c494.appspot.com",
  messagingSenderId: "978612517172",
  appId: "1:978612517172:web:77de56fd470021ea618d61"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;