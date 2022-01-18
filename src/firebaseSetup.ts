import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyD4sekMfeCtGFbh31cp2n83zJKo5O2Vo0A",
	authDomain: "pixelpool-33f35.firebaseapp.com",
	projectId: "pixelpool-33f35",
	storageBucket: "pixelpool-33f35.appspot.com",
	messagingSenderId: "1060329541614",
	appId: "1:1060329541614:web:1ac802e8d81dcc9f9588ff"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();