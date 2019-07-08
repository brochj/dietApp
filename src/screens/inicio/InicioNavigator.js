import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Atividade from './Atividade';
import DadosPerfil from './DadosPerfil';
import Dificuldade from './Dificuldade';
import GastoCalorico from './GastoCalorico';
import Objetivo from './Objetivo';

import R from 'res/R';


const InicioNavigator = createStackNavigator({

    DadosPerfil: {
        screen: DadosPerfil
    },
    Atividade: {
        screen: Atividade,
    },
    GastoCalorico: {
        screen: GastoCalorico,
    },
    Objetivo: {
        screen: Objetivo,
    },
    Dificuldade: {
        screen: Dificuldade,
    },

}, {
        initialRouteName: 'DadosPerfil',
        headerMode: 'float',
        headerLayoutPreset: 'center',
    }
);

// container so eh necessario apenas quando se cria o StackNavigator na tela q starta o Aplicativo

export default InicioNavigator;