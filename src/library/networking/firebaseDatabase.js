import firebase from "networking/FirebaseConnection";


export async function addUserInDatabase(uid, email) {
    firebase.database().ref('users').child(uid).set({
        email: email,
    })

}


export async function updateUserBasicData(uid, data) {
    await firebase.database().ref('users').child(uid).update({
        gender: data.gender,
        birthday: data.birthday,
        weight: data.weight,
        height: data.height,
        accountType: data.accountType,
        activityLevel: data.activityLevel
    });
    return uid;
}