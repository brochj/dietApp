import { combineReducers } from "redux";
import AuthReducer from 'reducers/AuthReducer';
import UserReducer from 'reducers/UserReducer';
import AppConfigReducer from 'reducers/AppConfigReducer';
import DietPlanReducer from 'reducers/DietPlanReducer';

const Reducers = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    appConfig: AppConfigReducer,
    dietPlan: DietPlanReducer,

});

export default Reducers;