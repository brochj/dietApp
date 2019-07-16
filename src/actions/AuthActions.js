import firebase from "networking/FirebaseConnection";
import { isUserSignedIn, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "networking/firebaseAuth"

export const signOutAction = () => {
    signOut();
    return {
        type: 'changeStatus',
        payload: {
            status: 2,
        }
    };
};

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
        });
    };
};

export const signInAction = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(email, password)
        .then((uid) => {
            dispatch({
                type: 'changeUid',
                payload: {
                    uid: uid,
                }
            });
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