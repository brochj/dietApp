import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Atividade from './Atividade';
import DadosPerfil from './DadosPerfil';
import Dificuldade from './Dificuldade';
import GastoCalorico from './GastoCalorico';
import Objetivo from './Objetivo';

import R from 'res/R';


const InicioTab = createBottomTabNavigator({

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
        // initialRouteName: 'GastoCalorico',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: R.colors.blackish,
            },
            headerTintColor: R.palette.lightTxt.color,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: 'blue',
                // height: 40,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
            },
            style: {
                activeTintColor: 'blue',
                height: 45,
                // backgroundColor: 'black',

            },
            tabStyle: {
                backgroundColor: 'red',
                height: 0,
            }

        },
    });

// container so eh necessario apenas quando se cria o StackNavigator na tela q starta o Aplicativo

export default InicioTab;