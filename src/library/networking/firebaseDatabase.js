import firebase from "networking/FirebaseConnection";

export async function addUserInDatabase(uid, email) {
    firebase.database().ref('users').child(uid).set({
        email: email,
    })
    
}