import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import Reducers from 'reducers/Reducers';

import InitialNavigator from 'screens/initialConfig/InitialNavigator';
import UserBasicData from 'screens/initialConfig/UserBasicData';
import ActivityLevel from 'screens/initialConfig/ActivityLevel';
import CaloricExpenditure from 'screens/initialConfig/CaloricExpenditure';
import Objective from 'screens/initialConfig/Objective';
import Difficulty from 'screens/initialConfig/Difficulty';
import MealsCalories from 'screens/initialConfig/MealsCalories';

import Home from 'screens/auth/Home';
import SignIn from 'screens/auth/SignIn';
import Preload from 'screens/auth/Preload';
import SignUp from 'screens/auth/SignUp';

import Meals from 'screens/main/Meals';
import HomeTab from 'screens/main/HomeTab';

import SearchRecipes from 'screens/recipes/SearchRecipes';
import ShowRecipe from 'screens/recipes/ShowRecipe';

console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createStackNavigator({

    Preload: {
        screen: Preload,
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'SignIn'
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp'
        }
    },
    InitialNavigator: {
        screen: InitialNavigator,
        navigationOptions: {
            title: null
        }
    },
    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            header: null,
        }
    },


    // UserBasicData: {
    //     screen: UserBasicData,
    //     navigationOptions: {
    //         title: 'Perfil Inicial'
    //     }
    // },
    // ActivityLevel: {
    //     screen: ActivityLevel,
    //     navigationOptions: {
    //         title: 'ActivityLevel'
    //     }
    // },
    // CaloricExpenditure: {
    //     screen: CaloricExpenditure,
    //     navigationOptions: {
    //         title: 'Gasto Calórico'
    //     }
    // },
    // Objective: {
    //     screen: Objective,
    //     navigationOptions: {
    //         title: 'Objective'
    //     }
    // },
    // Difficulty: {
    //     screen: Difficulty,
    //     navigationOptions: {
    //         title: 'Difficulty'
    //     }
    // },
    MealsCalories: {
        screen: MealsCalories,
        navigationOptions: {
            title: 'MealsCalories'
        }
    },
    Meals: {
        screen: Meals,
        navigationOptions: {
            title: 'Refeições'
        }
    },
    SearchRecipes: {
        screen: SearchRecipes,
        navigationOptions: {
            title: 'Buscar Receita'
        }
    },
    ShowRecipe: {
        screen: ShowRecipe,
        navigationOptions: {
            title: 'Receita'
        }
    },
}, {
        initialRouteName: 'SearchRecipes',
        defaultNavigationOptions: {
            header: null,

        },
        // disableKeyboardHandling: true,


    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <AppContainer />
            </Provider>
        );
    }
}
