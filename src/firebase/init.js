import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCsCzPQk39ZqdTqgjnBelC8iGSbWXIHPcQ",
    authDomain: "geo-users-1.firebaseapp.com",
    databaseURL: "https://geo-users-1.firebaseio.com",
    projectId: "geo-users-1",
    storageBucket: "",
    messagingSenderId: "517454962701",
    appId: "1:517454962701:web:d23f34f280457cc5233544"
};

// Initialize Firebase
const firebaseApp =  firebase.initializeApp(config)

export default firebaseApp.firestore()

