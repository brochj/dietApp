//Oscar Broch 17/07/2019
import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "react-native-slider";
import PropTypes from 'prop-types';

export default class SliderWithButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const styles = StyleSheet.create({
            sliderRow: {
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'stretch',
                padding: 10,
                ...this.props.style
            },
            button: {
                backgroundColor: '#196a65',
                height: 40,
                width: 40,
                justifyContent: 'center',
                padding: 10,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                ...this.props.buttonStyle
            },
            subButtonLabel: {
                color: '#fff',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 35,
                ...this.props.subLabelStyle
            },
            slider: {
                flex: 1,
                marginHorizontal: 20,
                ...this.props.sliderStyle
            },
            addButtonLabel: {
                color: '#fff',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 30,
                ...this.props.addLabelStyle
            },
        });
        return (
            <View style={styles.sliderRow}>
                <TouchableOpacity style={styles.button}
                    onPress={this.props.onPressSub}
                    onLongPress={this.props.onLongPressSub}
                >
                    <Text style={styles.subButtonLabel}>-</Text>
                </TouchableOpacity>
                <Slider
                    style={styles.slider}
                    value={this.props.value}
                    onValueChange={this.props.onValueChange}
                    maximumValue={this.props.maximumValue}
                    minimumValue={this.props.minimumValue}
                    step={this.props.step}
                    minimumTrackTintColor={this.props.minimumTrackTintColor}
                    thumbTintColor={this.props.thumbTintColor}

                />
                <TouchableOpacity style={styles.button}
                    onPress={this.props.onPressAdd}
                    onLongPress={this.props.onLongPressAdd}
                >
                    <Text style={styles.addButtonLabel}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

SliderWithButtons.defaultProps = {
    // Slider
    maximumValue: 100,
    minimumValue: 0,
    step: 1,
    value: 50,
    minimumTrackTintColor: '#196A65',
    thumbTintColor: '#196A65',
};
SliderWithButtons.propTypes = {

};

/*
STYLES
this.props.style --> container view
this.props.buttonStyle
this.props.sliderStyle
this.props.subLabelStyle
this.props.addLabelStyle

// touchables
this.props.onPressAdd
this.props.onLongPressAdd
this.props.onPressSub
this.props.onLongPressSub

Slider
this.props.onValueChange
this.props.value
*/