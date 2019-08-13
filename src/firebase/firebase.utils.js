import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyDB7z8eYAouYM7jaZGHaLnOM4DzPwL6R5U",
    authDomain: "crwn-db-42b12.firebaseapp.com",
    databaseURL: "https://crwn-db-42b12.firebaseio.com",
    projectId: "crwn-db-42b12",
    storageBucket: "",
    messagingSenderId: "359222585249",
    appId: "1:359222585249:web:e510e4837d313ee9"
  };

  export const  createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get(); 
    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message);
        

      }

    }
    
    return userRef;
  };

  firebase.initializeApp(config);
   export const auth =firebase.auth();
   export const firestore=firebase.firestore();
   
   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt:'select_account' });
   export const signInWithGoogle=()=>auth.signInWithPopup(provider);
   export default firebase;

