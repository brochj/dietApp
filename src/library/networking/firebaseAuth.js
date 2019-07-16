import firebase from "networking/FirebaseConnection";
import { addUserInDatabase } from "networking/firebaseDatabase"

export async function isUserSignedIn() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            return user;
        } else {
            return false;
        }
    });
}

export async function getUserUid() {
    let userUid = firebase.auth().currentUser.uid;
    return userUid;
}

export async function signUpWithEmailAndPassword(email, password) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('Email já utilizado');

                    break;
                case 'auth/invalid-email':
                    alert('Email inválido');
                    break;
                case 'auth/operation-not-allowed':
                    alert('Tente novamente mais tarde');
                    break;
                case 'auth/weak-password':
                    alert('Digite uma senha com pelo meno 6 caracteres');
                    break;
                default:
                    alert('Erro: ' + error.code)
                    break;
            }
            return false;
        });
    const uid = await getUserUid();
    await addUserInDatabase(uid, email);
    return uid;
}

// getUserUid()
            //     .then((uid) => {
            //         addUserInDatabase(uid, email)
            //             .then(() => {
            //                 alert('Cadastro Realizado com Sucesso!')
            //                 return uid;
            //             })
            //     })