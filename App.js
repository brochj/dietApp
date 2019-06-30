import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import dadosPerfil from './src/screens/inicio/dadosPerfil';
import atividade from './src/screens/inicio/atividade';
import gastoCalorico from './src/screens/inicio/gastoCalorico';
import objetivo from './src/screens/inicio/objetivo';
import dificuldade from './src/screens/inicio/dificuldade';
import distribuicao from './src/screens/inicio/distribuicao';

const AppNavigator = createStackNavigator({
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
}, {
        initialRouteName: 'distribuicao'
    });

export default createAppContainer(AppNavigator);