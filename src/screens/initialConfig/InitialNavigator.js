import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ActivityLevel from './ActivityLevel';
import UserBasicData from './UserBasicData';
import Difficulty from './Difficulty';
import CaloricExpenditure from './CaloricExpenditure';
import Objective from './Objective';
import MealsCalories from './MealsCalories';

import R from 'res/R';

const InitialNavigator = createStackNavigator({

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
    MealsCalories: {
        screen: MealsCalories,
    },

}, {
        defaultNavigationOptions:{
            header: null,
        },
        initialRouteName: 'UserBasicData',
        headerMode: 'float',
        headerLayoutPreset: 'center',
    }
);

export default InitialNavigator;