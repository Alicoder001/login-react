import { initializeApp } from "firebase/app";
import {
	addDoc,
	collection,
	getFirestore,
	getDoc,
	doc,
} from "firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBWp0ngXrlWdORH01u2AEsCSWIfURKeyME",
	authDomain: "finance-tracker-fb928.firebaseapp.com",
	projectId: "finance-tracker-fb928",
	storageBucket: "finance-tracker-fb928.appspot.com",
	messagingSenderId: "45598203739",
	appId: "1:45598203739:web:e633f43fb92a97d064c47e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
	auth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	addDoc,
	collection,
	db,
	getDoc,
	doc,
};
