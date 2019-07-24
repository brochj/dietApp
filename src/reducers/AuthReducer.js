const initialState = {
    // name: 'Broch',
    email: 'broch@gmail.com',
    password: '123456',
    uid: '',
    status: '', //loggedIn or loggedOut
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

    if (action.type == 'changeUid') {
        return { ...state, status: 'loggedIn', uid: action.payload.uid };
    }
    
    // if (action.type == 'changeName') {
    //     return { ...state, name: action.payload.name };
    // }

    return state;
};

export default AuthReducer;