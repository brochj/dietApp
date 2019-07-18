import { combineReducers } from "redux";
import AuthReducer from 'reducers/AuthReducer';
import UserReducer from 'reducers/UserReducer';
import AppConfigReducer from 'reducers/AppConfigReducer';

const Reducers = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    appConfig: AppConfigReducer,

});

export default Reducers;