const initialState = {
    objective: 'lossWeight', // lossWeight, gainMuscle, maintainWeight
    difficulty: 'hard', //easy, medium,hard
    calorieIntake: 2000,
    calorieIntakeGoal: 0,

    breakfastKcal: 0,
    morningSnackKcal: 0,
    lunchKcal: 0,
    afternoonSnackKcal: 0,
    dinnerKcal: 0,
    eveningSnackKcal: 0,
    preWorkoutKcal: 0,
    afterTraningKcal: 0,
}

const DietPlanReducer = (state = initialState, action) => {

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
    };

    // if (action.type == 'changeObjective') {
    //     return { ...state, objective: action.payload.objective };
    // };

    // if (action.type == 'changeDifficulty') {
    //     return { ...state, difficulty: action.payload.difficulty };
    // };

    // if (action.type == 'changeCalorieIntake') {
    //     return { ...state, calorieIntake: action.payload.calorieIntake };
    // };

    // if (action.type == 'changeCalorieIntakeGoal') {
    //     return { ...state, calorieIntakeGoal: action.payload.calorieIntakeGoal };
    // };

    // if (action.type == 'changeMealsCalories') {
    //     return {
    //         ...state,
    //         breakfastKcal: action.payload.breakfastKcal,
    //         morningSnackKcal: action.payload.morningSnackKcal,
    //         lunchKcal: action.payload.lunchKcal,
    //         afternoonSnackKcal: action.payload.afternoonSnackKcal,
    //         dinnerKcal: action.payload.dinnerKcal,
    //         eveningSnackKcal: action.payload.eveningSnackKcal,
    //         preWorkoutKcal: action.payload.preWorkoutKcal,
    //         afterTraningKcal: action.payload.afterTraningKcal,
    //     };
    // };

    return state;
};

export default DietPlanReducer;