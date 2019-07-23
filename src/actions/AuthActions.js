import firebase from "networking/FirebaseConnection"; //TODO retirar depois
import { isUserSignedIn, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "networking/firebaseAuth"
import { strip } from 'scripts/StringScripts';

export const signOutAction = () => {
    signOut();
    return {
        type: 'changeStatus',
        payload: {
            status: 'loggedOut',
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
            email: strip(email)
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