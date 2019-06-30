import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import R from 'res/R';


/* 
Date: 30/06/2019
props deste componente
callbacks
this.props.value --> valor a ser incrementado e decrementado
this.props.onPressDecrement --> onPress do botao de decrementar
this.props.onPressIncrement --> onPress do botao deincrementar

PROPS de ESTILIZACAO 
this.props.style --> global/master view
this.props.touchStyle --> do comuns botoes de + e -
this.props.addTouch --> do botao de incrementar
this.props.subTouch --> do botao de deccrementar
this.props.fontValueStyle --> onde aparece o valor a ser mudado
this.props.fontAddStyle --> fonte do botao de incrementar
this.props.fontSubStyle --> fonte do botao de decrementar

*/
export default class ChangeCalories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addText: (this.props.addText != null) ? this.props.addText : '+',
            subText: (this.props.subText != null) ? this.props.subText : '-',
        };
        this.styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fefefe',
                borderRadius: 5,
                ...this.props.style,
            },
            touch: {
                height: 35,
                width: 35,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#196A65',
                borderRadius: 5,
                ...this.props.touchStyle
            },
            addTouch: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                ...this.props.addTouch,
            },
            subTouch: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                ...this.props.subTouch,
            },

            addTxt: {
                fontSize: 18,
                color: 'white',

                ...this.props.fontAddStyle,
            },
            subTxt: {
                fontSize: 18 * 1.4,
                color: 'white',

                ...this.props.fontSubStyle,
            },
            valueTxt: {
                fontSize: 18,
                paddingHorizontal: 15,
                paddingVertical: 5,
                ...this.props.fontValueStyle,
            },
        });
    }

    render() {
        return (
            <View style={this.styles.container}>
                <TouchableOpacity
                    style={[this.styles.touch, this.styles.subTouch]}
                    onPress={this.props.onPressDecrement}
                >
                    <Text style={this.styles.subTxt}>{this.state.subText}­­­­­­­­</Text>
                </TouchableOpacity>

                <Text style={this.styles.valueTxt}>{this.props.value}</Text>

                <TouchableOpacity
                    style={[this.styles.touch, this.styles.addTouch]}
                    onPress={this.props.onPressIncrement}
                >
                    <Text style={this.styles.addTxt}>{this.state.addText}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

