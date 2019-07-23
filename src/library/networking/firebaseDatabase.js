import firebase from "networking/FirebaseConnection";
import { getUserUid } from "networking/firebaseAuth"

// Funcionando
export async function addUserInDatabase(uid, email) {
    firebase.database().ref('users').child(uid).set({
        email: email,
    })

};


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
};

//funcionando
export async function checkIfReferenceExist(reference) {
    await firebase.database().ref(reference).once("value", snapshot => {
        return snapshot.exists();
    });
};

//funcionando
export async function saveUserDietPlan(data) {
    const uid = await getUserUid();
    await firebase.database().ref('users').child(uid).child('dietPlan').update({
        objective: data.objective,
        difficulty: data.difficulty,
        calorieIntake: data.calorieIntake,
        calorieIntakeGoal: data.calorieIntakeGoal,
    });

    //TODO melhorar esse parte, ta criando varias receitas, nao to conseguindo verificar se ja exist o no meals
    await firebase.database().ref('users').child(uid).child('dietPlan/Meals').once("value").then( snapshot => {
        if (!snapshot.hasChildren()) {
            let reference = firebase.database().ref('users').child(uid).child('dietPlan/meals');

            reference.push({
                title: 'Café da manhã',
                calorieValue: data.breakfastKcal,
            });

            reference.push({
                title: 'Lanche da manhã',
                calorieValue: data.morningSnackKcal,
            });

            reference.push({
                title: 'Almoço',
                calorieValue: data.lunchKcal,
            });

            reference.push({
                title: 'Lanche da tarde',
                calorieValue: data.afternoonSnackKcal,
            });

            reference.push({
                title: 'Jantar',
                calorieValue: data.dinnerKcal,
            });

            reference.push({
                title: 'Lanche da noite',
                calorieValue: data.eveningSnackKcal,
            });

            reference.push({
                title: 'Pré-treino',
                calorieValue: data.preWorkoutKcal,
            });

            reference.push({
                title: 'Pós-treino',
                calorieValue: data.afterTraningKcal,
            });
        };

    });
};