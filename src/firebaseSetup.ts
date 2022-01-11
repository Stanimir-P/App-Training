import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDgpwSaCHmgdFDBX7e4fnDHQKuToF-JHOQ",
	authDomain: "pixelpool-49f3d.firebaseapp.com",
	projectId: "pixelpool-49f3d",
	storageBucket: "pixelpool-49f3d.appspot.com",
	messagingSenderId: "950879132131",
	appId: "1:950879132131:web:7a0a1a5ae552c7d58d28d6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();