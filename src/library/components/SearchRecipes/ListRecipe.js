import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import R from 'res/R'

const ANIMATION_DURATION = 400;
const ROW_HEIGHT = 250;
const FOOTER_HEIGHT = 65;

export default class ListRecipe extends Component {
    constructor(props) {
        super(props);

        this._animated = new Animated.Value(0);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        Animated.timing(this._animated, {
            toValue: 1,
            duration: ANIMATION_DURATION,
        }).start();
    }


    onClick() {
        this.props.onPress(this.props.data.key);
    }

    render() {

        const rowStyles = [
            styles.row,
            {
                height: this._animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, ROW_HEIGHT],
                    extrapolate: 'clamp',
                }),
            },
            { opacity: this._animated },
            {
                transform: [
                    { scale: this._animated },
                    {
                        rotate: this._animated.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['35deg', '0deg'],
                            extrapolate: 'clamp',
                        })
                    }
                ],
            },
        ];

        return (
            <TouchableOpacity onPress={this.onRemove} onPress={this.onClick}>
                <Animated.View style={rowStyles}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.data.cover.url }}
                    />
                    <View style={styles.infoView}>
                        <Text style={styles.name}>{this.props.data.name} </Text>
                        <Text style={styles.email}>{this.props.data.preparationTime} min</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        marginVertical: 10,
        marginHorizontal: 20,
        height: ROW_HEIGHT,
        borderRadius: 25,
        ...R.styles.shadow,


    },
    image: {
        flex: 1,
        width: '100%',
        borderRadius: 25,
    },
    infoView: {
        marginTop: -FOOTER_HEIGHT,
        height: FOOTER_HEIGHT,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        // ...R.styles.shadow,
    },
    name: {
        flex: 1,
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    email: {
        flex: 1,
        textAlignVertical: 'center',
        fontSize: 14,
    },
});

