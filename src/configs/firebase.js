import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDG_ANz2M09dUVqer1hLigj41vN6d4PJwk",
    authDomain: "chatapp-6d094.firebaseapp.com",
    databaseURL: "https://chatapp-6d094.firebaseio.com",
    projectId: "chatapp-6d094",
    storageBucket: "chatapp-6d094.appspot.com",
    messagingSenderId: "586685513800",
    appId: "1:586685513800:web:0102e67485105e5919d87d"
  };
  refOn = callback => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }
  firebase.initializeApp(firebaseConfig);
export default firebase