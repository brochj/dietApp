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
    return(dispatch)=>{
        dispatch({
            type: 'changeCalorieIntakeGoal',
        payload: {
            calorieIntakeGoal: calorieIntakeGoal
        }
        });
    };
};

