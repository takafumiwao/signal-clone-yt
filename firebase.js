import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxjdoIe3pR-8zEucGs8qXnkZugvv9fkXs",
    authDomain: "signal-clone-yt-build-1c65c.firebaseapp.com",
    projectId: "signal-clone-yt-build-1c65c",
    storageBucket: "signal-clone-yt-build-1c65c.appspot.com",
    messagingSenderId: "301115041724",
    appId: "1:301115041724:web:961a2323dcfb2cbef56db9"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
