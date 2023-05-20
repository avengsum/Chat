import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCiCA1wwesMIzve2WDZD2qIdVmEw-Y9kaE",
  authDomain: "chat-2d575.firebaseapp.com",
  projectId: "chat-2d575",
  storageBucket: "chat-2d575.appspot.com",
  messagingSenderId: "1020036374165",
  appId: "1:1020036374165:web:e165d65c0e7d578857059c",
  databaseURL:"https://console.firebase.google.com/project/chat-2d575/database/chat-2d575-default-rtdb/data/~2F"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export {app,database}