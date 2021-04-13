import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDP5GaMExfJgwwxvZKYMezZVARyxEipPpM",
    authDomain: "mytodoapp-2446a.firebaseapp.com",
    projectId: "mytodoapp-2446a",
    storageBucket: "mytodoapp-2446a.appspot.com",
    messagingSenderId: "402234180657",
    appId: "1:402234180657:web:514332182598e7742b4110",
    measurementId: "G-TWLQW5KK1R"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase

export const auth = firebase.auth(); 