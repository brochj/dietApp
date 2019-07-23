const initialState = {
    objective: 'lossWeight', // lossWeight, gainMuscle, maintainWeight
    difficulty: 'hard', //easy, medium,hard
    calorieIntake: 2000,
    calorieIntakeGoal: 0,
}

const DietPlanReducer = (state = initialState, action) => {

    if (action.type == 'changeObjective') {
        return { ...state, objective: action.payload.objective };
    };

    if (action.type == 'changeDifficulty') {
        return { ...state, difficulty: action.payload.difficulty };
    };

    if (action.type == 'changeCalorieIntake') {
        return { ...state, calorieIntake: action.payload.calorieIntake };
    };

    if (action.type == 'changeCalorieIntakeGoal') {
        return { ...state, calorieIntakeGoal: action.payload.calorieIntakeGoal };
    };

    return state;
};

export default DietPlanReducer;