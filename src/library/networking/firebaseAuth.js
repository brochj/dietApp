import firebase from "networking/FirebaseConnection";
import { addUserInDatabase } from "networking/firebaseDatabase"


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

export async function signInWithEmailAndPassword(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            switch (error.code) {
                case 'auth/user-disable':
                    alert('Seu usuário está desativado');
                    break;
                case 'auth/invalid-email':
                    alert('Email inválido');
                    break;
                case 'auth/user-not-found':
                    alert('Usuário não encontrado');
                    break;
                case 'auth/wrong-password':
                    alert('E-mail e/ou senha incorretos');
                    break;
                default:
                    alert('Erro: ' + error.code)
                    break;
            }
        });
    const uid = await getUserUid();
    return uid;
}

export async function signOut() {
    await firebase.auth().signOut();
}

export async function isUserSignedIn() {
    await firebase.auth().onAuthStateChanged((user) => {
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







