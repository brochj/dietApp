import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyBPeap1VFNqmLGCkJQjokPDQkqAFFoAtsI",
    authDomain: "dietapp-9c0a6.firebaseapp.com",
    databaseURL: "https://dietapp-9c0a6.firebaseio.com",
    projectId: "dietapp-9c0a6",
    storageBucket: "gs://dietapp-9c0a6.appspot.com/",
    messagingSenderId: "183633637279",
    appId: "1:183633637279:web:aca19c31ec331af8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

/*
Nesse tela faço a conexao do firebase e exporto ele já conectado,
Agora qndo eu chamar esse arquivo (firebaseConnection.js) em algum
outro arquivo, o firebase já virá conectado e configurado.

*/