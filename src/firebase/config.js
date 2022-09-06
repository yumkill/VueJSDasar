import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBIR_m-SHjEcPLzvGpnlGm6a2BuScyllkw",
    authDomain: "vueblog-2233.firebaseapp.com",
    projectId: "vueblog-2233",
    storageBucket: "vueblog-2233.appspot.com",
    messagingSenderId: "225552283648",
    appId: "1:225552283648:web:15d8ac589f70a8b130c0e5"
};


firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }