import React from 'react';
import R from 'res/R'

export const themes = {
    light: {
        primary: '#196A65',
        // primary: '#FF71C8',
        secondary: '#1CA49C',

        accent: '#FF71C8',
        sucess: 'green',
        danger: 'red',
        warning: 'yellow',

        text: 'black',
        darkText: 'black',
        lightText: 'white',

        foreground: '#f4f4f4',
        background: '#fcfcfc',

        border: 'black'


    },
    dark: {
        primary: '#1CA49C',
        secondary: '#196A65',

        accent: '#FF71C8',
        sucess: 'green',
        danger: 'red',
        warning: 'yellow',

        text: 'white',
        darkText: 'black',
        lightText: 'white',

        foreground: '#262626',
        background: '#191919',

        border: 'white'
    },
};

export const ThemeContext = React.createContext(
    themes.light, // default value
);

