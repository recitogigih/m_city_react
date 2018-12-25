import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDtBgEfLsCMW0mBA8_1RxochTll0BA2OYk",
    authDomain: "m-city-1be88.firebaseapp.com",
    databaseURL: "https://m-city-1be88.firebaseio.com",
    projectId: "m-city-1be88",
    storageBucket: "m-city-1be88.appspot.com",
    messagingSenderId: "745144683476"
  };

  firebase.initializeApp(config);

  const firebasedDb = firebase.database()

firebasedDb.ref('matches').once('value').then((snapshot)=>{
    console.log(snapshot.val())
})