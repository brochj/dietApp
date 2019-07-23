import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';


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
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity
                    style={[styles.touch, styles.subTouch, this.props.subTouch]}
                    onPress={this.props.onPressDecrement}
                >
                    <Text style={[styles.subTxt, this.props.fontSubStyle]}>{this.state.subText}­­­­­­­­</Text>
                </TouchableOpacity>

                <Text style={[styles.valueTxt, this.props.fontValueStyle]}>{this.props.value}</Text>

                <TouchableOpacity
                    style={[styles.touch, styles.addTouch, this.props.addTouch]}
                    onPress={this.props.onPressIncrement}
                >
                    <Text style={[styles.addTxt, this.props.fontAddStyle]}>{this.state.addText}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fefefe',
        borderRadius: 5,
        // ...this.props.style,
    },
    touch: {
        height: 35,
        minWidth: 35,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#196A65',
        borderRadius: 5,
        // ...this.props.touchStyle
    },
    addTouch: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        // ...this.props.addTouch,
    },
    subTouch: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        // ...this.props.subTouch,
    },

    addTxt: {
        fontSize: 18,
        color: 'white',
        height: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        // ...this.props.fontAddStyle,
    },
    subTxt: {
        fontSize: 18 * 1.4,
        color: 'white',

        // ...this.props.fontSubStyle,
    },
    valueTxt: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 15,
        paddingVertical: 5,
        // ...this.props.fontValueStyle,
    },
});

ChangeCalories.defaultProps = {

};
ChangeCalories.propTypes = {
    style: PropTypes.object,
    subTouch: PropTypes.object,
    addTouch: PropTypes.object,
    fontSubStyle: PropTypes.object,
    fontAddStyle: PropTypes.object,
    fontValueStyle: PropTypes.object,
    

    subText: PropTypes.string,
    addText: PropTypes.string,
    value: PropTypes.string,

    onPressDecrement: PropTypes.func,
    onPressIncrement: PropTypes.func,
}