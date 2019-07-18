import firebase from "networking/FirebaseConnection"; //TODO retirar depois
import { isUserSignedIn, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "networking/firebaseAuth"



// export const signInAction = (email, password) => {
//     return (dispatch) => {
//         signInWithEmailAndPassword(email, password)
//         .then((uid) => {
//             dispatch({
//                 type: 'changeUid',
//                 payload: {
//                     uid: uid,
//                 }
//             });
//         });
//     };
// };

export const changeName = (name) => {
    return {
        type: 'changeName',
        payload: {
            name: name
        }
    }
};

export const changeLastName = (lastName) => {
    return {
        type: 'changeLastName',
        payload: {
            lastName: lastName
        }
    }
};

export const changeBirthday = (birthday) => {
    return {
        type: 'changeBirthday',
        payload: {
            birthday: birthday
        }
    }
};

export const changeGender = (gender) => {
    return {
        type: 'changeGender',
        payload: {
            gender: gender
        }
    }
};

export const changeWeight = (weight, unit = 'kg') => {
    return {
        type: 'changeWeight',
        payload: {
            weight: weight,
            unit: unit
        }
    }
};

export const changeHeight = (height, unit = 'cm') => {
    return {
        type: 'changeHeight',
        payload: {
            height: height,
            unit: unit
        }
    }
};

export const changeAccountType = (accountType) => {
    return {
        type: 'changeAccountType',
        payload: {
            accountType: accountType
        }
    }
};

export const changeActivityLevel = (activityLevel) => {
    return {
        type: 'changeActivityLevel',
        payload: {
            activityLevel: activityLevel
        }
    }
};
