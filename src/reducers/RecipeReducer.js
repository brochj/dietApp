const initialState = {

}

const RecipeReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'changeObjective':
            return { ...state, objective: action.payload.objective };
        case 'changeDifficulty':
            return { ...state, difficulty: action.payload.difficulty };
        case 'changeCalorieIntake':
            return { ...state, calorieIntake: action.payload.calorieIntake };
        case 'changeCalorieIntakeGoal':
            return { ...state, calorieIntakeGoal: action.payload.calorieIntakeGoal };
        case 'changeMealsCalories':
            return {
                ...state,
                breakfastKcal: action.payload.breakfastKcal,
                morningSnackKcal: action.payload.morningSnackKcal,
                lunchKcal: action.payload.lunchKcal,
                afternoonSnackKcal: action.payload.afternoonSnackKcal,
                dinnerKcal: action.payload.dinnerKcal,
                eveningSnackKcal: action.payload.eveningSnackKcal,
                preWorkoutKcal: action.payload.preWorkoutKcal,
                afterTraningKcal: action.payload.afterTraningKcal,
            };
    }

    return state;
};

export default RecipeReducer;