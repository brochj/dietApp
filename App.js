import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import InicioNavigator from './src/screens/inicio/InicioNavigator';
import DadosPerfil from './src/screens/inicio/DadosPerfil';
import Atividade from './src/screens/inicio/Atividade';
import GastoCalorico from './src/screens/inicio/GastoCalorico';
import Objetivo from './src/screens/inicio/Objetivo';
import Dificuldade from './src/screens/inicio/Dificuldade';
import Distribuicao from './src/screens/inicio/Distribuicao';

import Home from './src/screens/login/Home';
import Login from './src/screens/login/Login';
import Preload from './src/screens/login/Preload';
import Cadastro from './src/screens/login/Cadastro';

import Meals from './src/screens/main/Meals';
import HomeTab from './src/screens/main/HomeTab';

import SearchRecipes from './src/screens/recipes/SearchRecipes';
import ShowRecipe from './src/screens/recipes/ShowRecipe';

const AppNavigator = createStackNavigator({

    Preload: {
        screen: Preload,
        navigationOptions: {
            title: 'Preload'
        }
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
    Cadastro: {
        screen: Cadastro,
        navigationOptions: {
            title: 'Cadastro'
        }
    },
    InicioNavigator: {
        screen: InicioNavigator,
        navigationOptions: {
            title: null
        }
    },
    DadosPerfil: {
        screen: DadosPerfil,
        navigationOptions: {
            title: 'Perfil Inicial'
        }
    },
    Atividade: {
        screen: Atividade,
        navigationOptions: {
            title: 'Nível de Atividade'
        }
    },
    GastoCalorico: {
        screen: GastoCalorico,
        navigationOptions: {
            title: 'Gasto Calórico'
        }
    },
    Objetivo: {
        screen: Objetivo,
        navigationOptions: {
            title: 'Objetivo'
        }
    },
    Dificuldade: {
        screen: Dificuldade,
        navigationOptions: {
            title: 'Dificuldade'
        }
    },
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
        initialRouteName: 'Preload',
        defaultNavigationOptions: {
            header: null,

        },
        // disableKeyboardHandling: true,


    });

export default createAppContainer(AppNavigator);