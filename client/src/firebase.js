import firebase from 'firebase/compat/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBD3LUsR2ny5iGGqBuJ0gSY49-akKXHS5c",
    authDomain: "sri-amman-home-appliances.firebaseapp.com",
    projectId: "sri-amman-home-appliances",
    storageBucket: "sri-amman-home-appliances.appspot.com",
    messagingSenderId: "285224547916",
    appId: "1:285224547916:web:bcde48972f23e3f2fba6e9",
  };

const app = firebase.initializeApp(firebaseConfig);

export const storage = getStorage();

export default firebase ;