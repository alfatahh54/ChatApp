import firebase from 'firebase';
class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) { //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyDG_ANz2M09dUVqer1hLigj41vN6d4PJwk",
        authDomain: "chatapp-6d094.firebaseapp.com",
        databaseURL: "https://chatapp-6d094.firebaseio.com",
        projectId: "chatapp-6d094",
        storageBucket: "chatapp-6d094.appspot.com",
        messagingSenderId: "586685513800",
        appId: "1:586685513800:web:0102e67485105e5919d87d"
      });
     }
  }
  login = async(user, success_callback, failed_callback) => {
     await firebase.auth()
       .signInWithEmailAndPassword(user.email, user.password)
     .then(success_callback, failed_callback);
  }
  createAccount = async (user) => {
    firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
    .then(function() {
      var userf = firebase.auth().currentUser;
      userf.updateProfile({ displayName: user.name})
      .then(function() {
        alert("User " + user.name + " was created successfully.");
      }, function(error) {
        console.warn("Error update displayName.");
      });
    }, function(error) {
      console.error("got error:" + error.message);
      alert("Create account failed.");
    });
  }
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {text, user, createdAt: this.timestamp, };
      this.ref.push(message);
    }
  };
  uploadImage = async uri => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase.storage().ref('avatar').child(uuid.v4());
      const task = ref.put(blob);
      return new Promise((resolve, reject) => {
        task.on('state_changed', () => { }, reject, 
          () => resolve(task.snapshot.downloadURL));
      });
    } catch (err) {
      console.log('uploadImage error: ' + err.message); 
    }
  }
  refOn = callback => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }
  refOff = () => {
    this.ref
      .limitToLast(20)
      .off('child_added', refOn);
  }
  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {_id, timestamp, text, user};
    return message;
  };
}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;