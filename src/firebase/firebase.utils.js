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


  export const convertCollectionsSnapshhotToMap=(collectionsSnapshot)=>{
    const transformedCollection=collectionsSnapshot.docs.map(docSnapshot=>{
      const {title,items}=docSnapshot.data();

      return{
        routeName:encodeURI(title.toLowerCase()),
        id:docSnapshot.id,
        title,
        items
      }
    });
  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
   },{})
  }

  export const  createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    // const collectionRef=firestore.collection('users');
    const snapShot= await userRef.get(); 
    // const collectionSnapshot= await collectionRef.get();
    // console.log({collection:collectionSnapshot.docs.map(doc=>doc.data())});

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

  export const getCurrentUser=()=>{
    return new Promise((resolve,reject)=>{
      const unsubscribe=auth.onAuthStateChanged(userAuth=>{
        unsubscribe();
        resolve(userAuth);
      },reject)
    });
  }

  export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);
    const batch=firestore.batch();
    objectsToAdd.forEach(obj=>{
      const newDocumnetRef=collectionRef.doc();
      batch.set(newDocumnetRef,obj);
    });
return await batch.commit();

  };

  firebase.initializeApp(config);
   export const auth =firebase.auth();
   export const firestore=firebase.firestore();
   
   export const googleProvider = new firebase.auth.GoogleAuthProvider();
   googleProvider.setCustomParameters({prompt:'select_account' });
   export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider);
   export default firebase;


