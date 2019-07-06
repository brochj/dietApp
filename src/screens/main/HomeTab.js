import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Results from './Results';
import Breakfast from './Breakfast';

// import R from 'res/R';


const HomeTab = createBottomTabNavigator({

    Breakfast: {
        screen: Breakfast,
    },
    Home: {
        screen: Home
    },
    Results: {
        screen: Results,
    }

}, {
    // initialRouteName: 'Results',
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         backgroundColor: R.colors.blackish,
        //       },
        //       headerTintColor: R.palette.lightTxt.color,
        //       headerTitleStyle: {
        //         fontWeight: 'bold',
        //       },
        // },
        // tabBarOptions: {
        //     indicatorStyle: {
        //         backgroundColor: R.colors.actionButton,
        //         // height: 40,
        //         borderTopRightRadius: 5,
        //         borderTopLeftRadius: 5,
        //     },
        //     style: {
        //         activeTintColor: R.palette.lightTxt.color,
        //         marginTop: statusBarHeight,
        //         height: 45,
        //         // backgroundColor: 'black',

        //     }

        // },
    });

// container so eh necessario apenas quando se cria o StackNavigator na tela q starta o Aplicativo

export default HomeTab;