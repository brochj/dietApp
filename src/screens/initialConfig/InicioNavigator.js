import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ActivityLevel from './ActivityLevel';
import UserBasicData from './UserBasicData';
import Difficulty from './Difficulty';
import CaloricExpenditure from './CaloricExpenditure';
import Objective from './Objective';

import R from 'res/R';

const InicioNavigator = createStackNavigator({

    UserBasicData: {
        screen: UserBasicData
    },
    ActivityLevel: {
        screen: ActivityLevel,
    },
    CaloricExpenditure: {
        screen: CaloricExpenditure,
    },
    Objective: {
        screen: Objective,
    },
    Difficulty: {
        screen: Difficulty,
    },

}, {
        initialRouteName: 'UserBasicData',
        headerMode: 'float',
        headerLayoutPreset: 'center',
    }
);

export default InicioNavigator;