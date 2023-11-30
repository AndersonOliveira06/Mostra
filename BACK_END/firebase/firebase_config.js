import { initializeApp } from "firebase/app";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// require('dotenv').config()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApTEC7ksByBhDYXrMHtrOaCHOOoYVgjKU",
  authDomain: "mostra-back.firebaseapp.com",
  projectId: "mostra-back",
  storageBucket: "mostra-back.appspot.com",
  messagingSenderId: "856583291117",
  appId: "1:856583291117:web:1a2b2501fd4c5c35eb4ce4"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(
    app, 
    {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    }
)

const firestore = getFirestore(app)

const storage = getStorage(app)


export { auth, firestore, storage }