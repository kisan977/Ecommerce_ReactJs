import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// copy the config file

const config = {
    apiKey: "AIzaSyAHf-GsEq1CQAdAJkAJEpLsj-AQVH3sTOk",
    authDomain: "web-ecommerce-c5519.firebaseapp.com",
    projectId: "web-ecommerce-c5519",
    storageBucket: "web-ecommerce-c5519.appspot.com",
    messagingSenderId: "958288802959",
    appId: "1:958288802959:web:ff6927ea4cbe6cb355acfa",
    measurementId: "G-JPYMQ75ZYC"
  };

//   intialize our app
firebase.initializeApp(config);

// if you want to use auth in other component 
export const auth = firebase.auth();
export const firestore = firebase.firestore();


// intialize the google auth provider

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});


export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;