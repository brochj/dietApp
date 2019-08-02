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
    await firebase.database().ref('users').child(uid).child('dietPlan/Meals').once("value").then(snapshot => {
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

export async function getRecipesList() {
    await firebase.database().ref('recipes').once('value').then((snapshot) => {
        recipesList = [];

        snapshot.forEach((childItem) => {
            let d = childItem.val();

            let tags = [];
            for (tag in d.tags) {
                tags.push(
                    d.tags[tag]
                );
            };
            recipesList.push({
                key: childItem.key,
                name: d.name,
                description: d.description,
                preparationTime: d.preparationTime,
                servings: d.servings,
                difficulty: d.difficulty,
                public: d.public,
                creator: d.creator,
                calories: d.calories,
                cover: d.cover,
                tags
            });
        });
    });
    return await recipesList;
};

export async function getRecipeData(recipeKey) {
    await firebase.database().ref(`recipes/${recipeKey}`).once('value').then((snapshot) => {
        let d = snapshot.val();
        let photos = [];
        for (photo in d.photos) {
            photos.push(
                d.photos[photo]
            )
        };

        let ingredients = [];
        for (ingredient in d.ingredients) {
            ingredients.push(
                d.ingredients[ingredient]
            )
        };

        ingredients.sort((a, b) => {
            if (a.order > b.order) {
                return 1;
            } else if (a.order < b.order) {
                return -1;
            }
        });

        ingredients.forEach(ingredient => {
            let items = [];
            for (item in ingredient['items']) {
                items.push(
                    ingredient['items'][item]
                )
            };
            items.sort((a, b) => {
                if (a.order > b.order) {
                    return 1;
                } else if (a.order < b.order) {
                    return -1;
                }
            });
            ingredient['items'] = items;
        });

        let instructions = [];
        for (instruction in d.instructions) {
            instructions.push(
                d.instructions[instruction]
            );
        };
        instructions.sort((a, b) => {
            if (a.order > b.order) {
                return 1;
            } else if (a.order < b.order) {
                return -1;
            }
        });

        instructions.forEach(instruction => {
            let steps = [];
            for (step in instruction['steps']) {
                steps.push(
                    instruction['steps'][step]
                )
            };
            steps.sort((a, b) => {
                if (a.order > b.order) {
                    return 1;
                } else if (a.order < b.order) {
                    return -1;
                }
            });
            instruction['steps'] = steps;
        });


        let tags = [];
        for (tag in d.tags) {
            tags.push(
                d.tags[tag]
            )
        };
        recipeData = {
            key: snapshot.key,
            name: d.name,
            description: d.description,
            preparationTime: d.preparationTime,
            servings: d.servings,
            difficulty: d.difficulty,
            public: d.public,
            calories: d.calories,
            creator: d.creator,
            nutritionFacts: d.nutritionFacts,
            cover: d.cover,
            photos,
            ingredients,
            instructions,
            tags,
        }
    });
    return await recipeData;
};