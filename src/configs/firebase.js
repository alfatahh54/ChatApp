// import firebase from 'firebase'
import {Actions} from 'react-native-router-flux';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
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
export const pushData = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
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