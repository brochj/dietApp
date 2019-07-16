import firebase from "networking/FirebaseConnection";
import { isUserSignedIn, signUpWithEmailAndPassword } from "networking/firebaseAuth"

// export const signOut = ()=>{
//     firebase.auth().signOut();

//     return {
//         type: 'changeStatus',
//         payload: {
//             status: 2,
//         }
//     };
// };

export const checkLogin = () => {

    return (dispatch) => {
        let user = isUserSignedIn();
        if (user) {
            dispatch({
                type: 'changeUid',
                payload: {
                    uid: user.uid,
                }
            });
        } else {
            // usuario nao esta logado
            dispatch({
                type: 'changeStatus',
                payload: {
                    status: 'loggedOut',
                }
            });
        }

    }

};

export const signUpAction = (email, password) => {
    return (dispatch) => {

        signUpWithEmailAndPassword(email, password)
            .then((uid) => {
                dispatch({
                    type: 'changeUid',
                    payload: {
                        uid: uid,
                    }
                });
            })
    };
};
// export const signUpAction = ( email, password) => {
//     return (dispatch) => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then((user) => {
//                 let uid = firebase.auth().currentUser.uid;

//                 firebase.database().ref('users').child(uid).set({
//                     email: email,
//                 });

//                 dispatch({
//                     type: 'changeUid',
//                     payload: {
//                         uid: uid,
//                     }
//                 });


//             })
//             .catch((error) => {
//                 switch (error.code) {
//                     case 'auth/email-already-in-use':
//                         alert('Email já utilizado');
//                         break;
//                     case 'auth/invalid-email':
//                         alert('Email inválido');
//                         break;
//                     case 'auth/operation-not-allowed':
//                         alert('Tente novamente mais tarde');
//                         break;
//                     case 'auth/weak-password':
//                         alert('Digite uma senha com pelo meno 6 caracteres');
//                         break;
//                     default:
//                         alert('Erro: ' + error.code)
//                         break;
//                 }
//             });

//     };
// };

export const signInAction = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                let uid = firebase.auth().currentUser.uid;

                dispatch({
                    type: 'changeUid',
                    payload: {
                        uid: uid,
                    }
                });
            })
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
    };
};

export const changeEmail = (email) => {
    return {
        type: 'changeEmail',
        payload: {
            email: email
        }
    }
};

export const changePassword = (pass) => {
    return {
        type: 'changePassword',
        payload: {
            pass: pass
        }
    }
};

export const changeName = (name) => {
    return {
        type: 'changeName',
        payload: {
            name: name
        }
    }
};