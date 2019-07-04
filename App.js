import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import dadosPerfil from './src/screens/inicio/dadosPerfil';
import atividade from './src/screens/inicio/atividade';
import gastoCalorico from './src/screens/inicio/gastoCalorico';
import objetivo from './src/screens/inicio/objetivo';
import dificuldade from './src/screens/inicio/dificuldade';
import distribuicao from './src/screens/inicio/distribuicao';

import Home from './src/screens/login/Home';
import Login from './src/screens/login/Login';
import Preload from './src/screens/login/Preload';
import Cadastro from './src/screens/login/Cadastro';

import Breakfast from './src/screens/meals/Breakfast';

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
    dadosPerfil: {
        screen: dadosPerfil,
        navigationOptions: {
            title: 'Perfil Inicial'
        }
    },
    atividade: {
        screen: atividade,
        navigationOptions: {
            title: 'Nível de atividade'
        }
    },
    gastoCalorico: {
        screen: gastoCalorico,
        navigationOptions: {
            title: 'Gasto Calórico'
        }
    },
    objetivo: {
        screen: objetivo,
        navigationOptions: {
            title: 'Objetivo'
        }
    },
    dificuldade: {
        screen: dificuldade,
        navigationOptions: {
            title: 'Dificuldade'
        }
    },
    distribuicao: {
        screen: distribuicao,
        navigationOptions: {
            title: 'Distribuicao'
        }
    },
    Breakfast: {
        screen: Breakfast,
        navigationOptions: {
            title: 'Cafe da manhã'
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
        // initialRouteName: 'SearchRecipes'
    });

export default createAppContainer(AppNavigator);