import { saveUserDietPlan } from "networking/firebaseDatabase"
import { getUserUid } from "networking/firebaseAuth"


export const changeObjective = (objective) => {
    return {
        type: 'changeObjective',
        payload: {
            objective: objective
        }
    }
};

export const changeDifficulty = (difficulty) => {
    return {
        type: 'changeDifficulty',
        payload: {
            difficulty: difficulty
        }
    }
};

export const changeCalorieIntake = (calorieIntake) => {
    return {
        type: 'changeCalorieIntake',
        payload: {
            calorieIntake: calorieIntake
        }
    }
};

export const changeCalorieIntakeGoal = (calorieIntakeGoal) => {
    return {
        type: 'changeCalorieIntakeGoal',
        payload: {
            calorieIntakeGoal: calorieIntakeGoal
        }
    }
};

export const changeMealsCalories = (data) => {
    return {
        type: 'changeMealsCalories',
        payload: {
            breakfastKcal: data.breakfastKcal,
            morningSnackKcal: data.morningSnackKcal,
            lunchKcal: data.lunchKcal,
            afternoonSnackKcal: data.afternoonSnackKcal,
            dinnerKcal: data.dinnerKcal,
            eveningSnackKcal: data.eveningSnackKcal,
            preWorkoutKcal: data.preWorkoutKcal,
            afterTraningKcal: data.afterTraningKcal,
        }
    }
};

export const saveDietPlan = (mealsObject) => {
    return (dispatch) => {
        saveUserDietPlan(mealsObject)
            .then(() => {  })
    };
};

