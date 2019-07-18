//Oscar Broch 17/07/2019
import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

export default class CardTouch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtColor: 0,
        };

    }

    render() {
        const bgColor = (this.props.isActive) ?
            { color: this.props.color } :
            { color: 'black' };

        const styles = StyleSheet.create({
            selectTouch: {
                backgroundColor: 'gray',
                alignItems: 'center',
                alignSelf: 'stretch',
                minHeight: 110,
                marginHorizontal: 10,
                marginVertical: 5,
                borderRadius: 10,
                padding: 10,
                shadowColor: "black",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                ...this.props.style,
            },
            labelTitle: {
                fontSize: 30,
                color: 'black',
                // color: this.state.txtColor,
                fontWeight: 'bold',
                ...this.props.titleStyle,
            },
            labelDescription: {
                fontSize: 17,
                color: 'black',
                textAlign: 'center',
                ...this.props.descriptionStyle,
            },
        });

        return (
            <TouchableOpacity
                style={[styles.selectTouch, bgColor]}
                onPress={this.props.onPress}
            >
                <Text style={styles.labelTitle}>{this.props.title}</Text>
                <Text style={styles.labelDescription}>
                    {this.props.description}
                </Text>
            </TouchableOpacity>
        );
    }
}



CardTouch.defaultProps = {
    title: 'Managed',
    description: 'favorite me alive brown lower managed cave scale village'
};
CardTouch.propTypes = {

};
/*
this.props.onPress
this.props.title
this.props.description

STYLES
this.props.style,
this.props.descriptionStyle,
this.props.titleStyle,
*/
