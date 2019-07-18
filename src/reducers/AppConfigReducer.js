const initialState = {
   theme: 'light'
};

const AppConfigReducer = (state = initialState, action) => {

    if (action.type == 'changeTheme') {
        return { ...state, theme: action.payload.theme };
    }


    return state;
};

export default AppConfigReducer;