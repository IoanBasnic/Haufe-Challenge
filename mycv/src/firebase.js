import firebase from 'firebase'


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPk_JzsU0Ds8I8e8mmAscsxsQ5Ehy8T3E",
    authDomain: "haufe-e0d76.firebaseapp.com",
    projectId: "haufe-e0d76",
    storageBucket: "haufe-e0d76.appspot.com",
    messagingSenderId: "300611293550",
    appId: "1:300611293550:web:a883391c24e79b8b2eb17f"
})

var db = firebaseApp.firestore();

export { db };
