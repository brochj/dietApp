import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Home from './Home';
import Results from './Results';
import Meals from './Meals';

// import R from 'res/R';


const HomeTab = createMaterialBottomTabNavigator({

    Meals: {
        screen: Meals,
    },
    Home: {
        screen: Home
    },
    Results: {
        screen: Results,
    }

}, {
        // initialRouteName: 'Results',
        backBehavior: 'order',
        labeled: true,
        activeColor: '#fff',
        inactiveColor: '#ddd',

        barStyle: {
            backgroundColor: '#196A65'
        },
        tabBarOptions: {
            showLabel: true,
        },
    });

// container so eh necessario apenas quando se cria o StackNavigator na tela q starta o Aplicativo

export default HomeTab;