import { initializeApp } from '@firebase/app';

import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFN8atumjYO93Vr_d6emZXOyNmxggvLEU",
  authDomain: "crwn-backend-62725.firebaseapp.com",
  projectId: "crwn-backend-62725",
  storageBucket: "crwn-backend-62725.appspot.com",
  messagingSenderId: "1050653592370",
  appId: "1:1050653592370:web:7889fa41756c30256ea52b",
  measurementId: "G-DNH76GMQ7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const analytics = getAnalytics(app);


export const fsAuth =  auth
export const fsStore = db;

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => signInWithPopup(auth,provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = doc(db, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef)

    if(!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        await setDoc(userRef, {
            createdAt,
            displayName,
            email,
            ...additionalData
        }).catch(err => console.log("Error creating user: ", err.message))
    }

    return userRef;
} 

export const createUser = async (email, password) =>{
    return await createUserWithEmailAndPassword(auth, email, password).catch(err=>console.log(err))
}

export const signIn = async(email, password) => {
    return await signInWithEmailAndPassword(auth, email, password).catch(err=>console.log(err))
}