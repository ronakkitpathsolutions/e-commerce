import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBLV8hBCj2Tid08JZ4TLqx4iR-ds85XGtQ",
    authDomain: "e-commerce-bc459.firebaseapp.com",
    databaseURL: "https://e-commerce-bc459-default-rtdb.firebaseio.com",
    projectId: "e-commerce-bc459",
    storageBucket: "e-commerce-bc459.appspot.com",
    messagingSenderId: "743263063388",
    appId: "1:743263063388:web:d848fbfc63132ca1cc8599",
    measurementId: "G-2QNMK8KYN8"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}