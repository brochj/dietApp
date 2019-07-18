import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ActivityLevel from './ActivityLevel';
import UserBasicData from './UserBasicData';
import Dificuldade from './Dificuldade';
import GastoCalorico from './GastoCalorico';
import Objetivo from './Objetivo';

import R from 'res/R';

const InicioNavigator = createStackNavigator({

    UserBasicData: {
        screen: UserBasicData
    },
    ActivityLevel: {
        screen: ActivityLevel,
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
        initialRouteName: 'UserBasicData',
        headerMode: 'float',
        headerLayoutPreset: 'center',
    }
);

export default InicioNavigator;