// import firebase from 'firebase'
import {Actions} from 'react-native-router-flux';
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/storage'
import firebase from "firebase"
export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyDG_ANz2M09dUVqer1hLigj41vN6d4PJwk",
    authDomain: "chatapp-6d094.firebaseapp.com",
    databaseURL: "https://chatapp-6d094.firebaseio.com",
    projectId: "chatapp-6d094",
    storageBucket: "chatapp-6d094.appspot.com",
    messagingSenderId: "586685513800",
    appId: "1:586685513800:web:0102e67485105e5919d87d"
});
export const setListener = (endpoint, updaterFn) => {
  firebase.database().ref(endpoint).on('value', updaterFn);
  return () => firebase.database().ref(endpoint).off();
}
export const pushData = (endpoint, data, name) => { 
  return firebase.database().ref(endpoint).push(data)
}
export const setData = (endpoint, data, name) => {
  return firebase.database().ref(endpoint).set(data)
}
export const db = () => {
  return firebase.database()
}
export const register = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}
export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}
export const onAuth = () => {
  return firebase.auth().onAuthStateChanged(user => {
      Actions.reset(user ? 'home' : 'login' )
    })
}
export const signOut = () => {
    return firebase.auth().signOut()
}
export const auth = () => {
    return firebase.auth()
}
export const uid=()=>{
    return (firebase.auth().currentUser || {}).uid
}
export const uploadImage = async uri => {
    console.log('got image to upload. uri:' + uri);
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref('avatar')
        .child(uuid.v4());
      const task = ref.put(blob);
  
      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          () => {

          },
          reject,
          () => resolve(task.snapshot.downloadURL)
        );
      });
    } catch (err) {
      console.log('uploadImage try/catch error: ' + err.message);
    }
  };
  
export const updateAvatar = url => {  
    var userf = firebase.auth().currentUser;
    if (userf != null) {
      userf.updateProfile({ avatar: url }).then(
        function() {
          console.log('Updated avatar successfully. url:' + url);
          alert('Avatar image is saved successfully.');
        },
        function(error) {
          console.warn('Error update avatar.');
          alert('Error update avatar. Error:' + error.message);
        }
      );
    } else {
      console.log("can't update avatar, user is not login.");
      alert('Unable to update avatar. You must login first.');
    }
  };