import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import Reducers from 'reducers/Reducers';

import InicioNavigator from 'screens/initialConfig/InicioNavigator';
import DadosPerfil from 'screens/initialConfig/DadosPerfil';
import Atividade from 'screens/initialConfig/Atividade';
import GastoCalorico from 'screens/initialConfig/GastoCalorico';
import Objetivo from 'screens/initialConfig/Objetivo';
import Dificuldade from 'screens/initialConfig/Dificuldade';
import Distribuicao from 'screens/initialConfig/Distribuicao';

import Home from 'screens/auth/Home';
import Login from 'screens/auth/Login';
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
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp'
        }
    },
    InicioNavigator: {
        screen: InicioNavigator,
        navigationOptions: {
            title: null
        }
    },





    // DadosPerfil: {
    //     screen: DadosPerfil,
    //     navigationOptions: {
    //         title: 'Perfil Inicial'
    //     }
    // },
    // Atividade: {
    //     screen: Atividade,
    //     navigationOptions: {
    //         title: 'Nível de Atividade'
    //     }
    // },
    // GastoCalorico: {
    //     screen: GastoCalorico,
    //     navigationOptions: {
    //         title: 'Gasto Calórico'
    //     }
    // },
    // Objetivo: {
    //     screen: Objetivo,
    //     navigationOptions: {
    //         title: 'Objetivo'
    //     }
    // },
    // Dificuldade: {
    //     screen: Dificuldade,
    //     navigationOptions: {
    //         title: 'Dificuldade'
    //     }
    // },
    Distribuicao: {
        screen: Distribuicao,
        navigationOptions: {
            title: 'Distribuicao'
        }
    },
    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            title: 'Distribuicao',
            header: null,
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
        initialRouteName: 'Home',
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
