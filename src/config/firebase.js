import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDA6uN5QAMNX0MS7Ev8EpVr6CH2wFYy7Gk",
  authDomain: "tiktok---jornada-b468c.firebaseapp.com",
  projectId: "tiktok---jornada-b468c",
  storageBucket: "tiktok---jornada-b468c.appspot.com",
  messagingSenderId: "417482666421",
  appId: "1:417482666421:web:85acc6e71c549feb52e9fc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
