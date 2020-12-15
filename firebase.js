import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDpNvwkk01UNAeNleoD0747kfWPBZ6xo6g",
    authDomain: "discord-977bc.firebaseapp.com",
    databaseURL: "https://discord-977bc.firebaseio.com",
    projectId: "discord-977bc",
    storageBucket: "discord-977bc.appspot.com",
    messagingSenderId: "593679979080",
    appId: "1:593679979080:web:f64d6fe7161119c636be7d",
    measurementId: "G-EG4VJZGDE7"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;