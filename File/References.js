import * as firebase from 'firebase';

const firebaseConfig = {
  //tuliskan firebase config kalian di sini
  apiKey: "AIzaSyBAjWUBfaRbD6o-oAefhRryXzUqNbQIWZM",
  authDomain: "reactdemos-698ed.firebaseapp.com",
  databaseURL: "https://reactdemos-698ed-default-rtdb.firebaseio.com",
  projectId: "reactdemos-698ed",
  storageBucket: "reactdemos-698ed.appspot.com",
  messagingSenderId: "194814144291",
  appId: "1:194814144291:web:bdc16ab347b1a335116696"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

  const dataRef = firebase.database().ref();
  const auth = firebase.auth();
 
  export {dataRef, auth};