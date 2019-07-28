import { combineReducers } from "redux";
import AuthReducer from 'reducers/AuthReducer';
import UserReducer from 'reducers/UserReducer';
import AppConfigReducer from 'reducers/AppConfigReducer';
import DietPlanReducer from 'reducers/DietPlanReducer';
import RecipeReducer from 'reducers/RecipeReducer';

const Reducers = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    appConfig: AppConfigReducer,
    dietPlan: DietPlanReducer,
    recipe: RecipeReducer,

});

export default Reducers;