import firebase from "networking/FirebaseConnection"; //TODO retirar depois
import { isUserSignedIn, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "networking/firebaseAuth"
import { strip } from 'scripts/StringScripts';
import { getRecipeData, getRecipesList } from 'networking/firebaseDatabase';

// export const signOutAction = () => {
//     signOut();
//     return {
//         type: 'changeStatus',
//         payload: {
//             status: 'loggedOut',
//         }
//     };
// };

export const getRecipes = () => {
    return dispatch => {
        getRecipesList();
    };
}

export const getRecipe = () => {
    return dispatch => {
        // getRecipeData((recipe) => { return recipe })
    }
};
// //TODO ver pq com isUserSignedIn() não ta funcionando?
// export const checkLogin = () => {
//     return (dispatch) => {
//         isUserSignedIn((user) => {
//             if (user) {
//                 dispatch({
//                     type: 'changeUid',
//                     payload: {
//                         uid: user.uid,
//                     }
//                 });
//             } else {
//                 dispatch({
//                     type: 'changeStatus',
//                     payload: {
//                         status: 'loggedOut',
//                     }
//                 });
//             };
//         });
//     };
// };
