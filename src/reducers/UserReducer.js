const initialState = {
    name: '',
    lastname: '',
    birthday: '',
    gender: 'male', //male or female

    weightValue: 70,
    weightUnit: 'kg',

    heightValue: 175,
    heightUnit: 'cm',

    accountType: 'Free', //Free, Pro, Nutri

    activityLevel: 'light', // light, moderate, high, intense,


}

const UserReducer = (state = initialState, action) => {

    if (action.type == 'changeBirthday') {
        return { ...state, birthday: action.payload.birthday };
    };

    if (action.type == 'changeGender') {
        return { ...state, gender: action.payload.gender };
    };

    if (action.type == 'changeWeight') {
        return { ...state, weightValue: action.payload.weight, weightUnit: action.payload.unit };
    };

    if (action.type == 'changeHeight') {
        return { ...state, heightValue: action.payload.height, heightUnit: action.payload.unit };
    };

    if (action.type == 'changeActivityLevel') {
        return { ...state, activityLevel: action.payload.activityLevel };
    };

    return state;
};

export default UserReducer;