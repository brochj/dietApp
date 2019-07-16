const initialState = {
    name: 'Broch',
    email: 'brochj@gmail.com',
    password: '123456',
    uid: 'initial UID',
    status: 'Initial Status', //loggedIn or loggedOut
};

const AuthReducer = (state = initialState, action) => {

    if (action.type == 'changeStatus') {
        return { ...state, status: action.payload.status };
    }

    if (action.type == 'changeEmail') {
        return { ...state, email: action.payload.email };
    }

    if (action.type == 'changePassword') {
        return { ...state, password: action.payload.pass };
    }

    if (action.type == 'changeName') {
        return { ...state, name: action.payload.name };
    }

    if (action.type == 'changeUid') {
        return { ...state, status: 'loggedIn', uid: action.payload.uid };
    }


    return state;
};

export default AuthReducer;