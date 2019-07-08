import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
/*
this.props.style --> Estilo dos botoes

this.props.onPressBack
this.props.backDisabled --> desabilita o touchable opacity

this.props.onPressFoward
this.props.forwardDisabled --> desabilita o touchable opacity
*/

export default class ForwardBackBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.styles = StyleSheet.create({
            nextButtoView: {
                flexDirection: 'row',
            },
            buttonNext: {
                flex: 1,
                height: 45,
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#196A65',
                ...this.props.style,
            },

        });
    }

    render() {

        const backIcon = (this.props.backDisabled) ? null : <Icon name="chevron-left" size={45} color="#fff" />;
        const forwardIcon = (this.props.forwardDisabled) ? null : <Icon name="chevron-right" size={45} color="#fff" />;
        return (

            <View style={this.styles.nextButtoView}>

                <TouchableOpacity style={this.styles.buttonNext}
                    onPress={this.props.onPressBack}
                    disabled={this.props.backDisabled}
                >
                    {backIcon}
                </TouchableOpacity>
                <TouchableOpacity style={this.styles.buttonNext}
                    onPress={this.props.onPressForward}
                    disabled={this.props.forwardDisabled}
                >
                    {forwardIcon}
                </TouchableOpacity>
            </View>

        );
    }
}
