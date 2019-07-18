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
    render() {
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
            },
            button: {
                flex: 1,
                height: 45,
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#196A65',
                ...this.props.style,
            },

        });

        const backIcon = (this.props.backDisabled) ? null : <Icon name="chevron-left" size={45} color="#fff" />;
        const forwardIcon = (this.props.forwardDisabled) ? null : <Icon name="chevron-right" size={45} color="#fff" />;
        return (

            <View style={styles.container}>

                <TouchableOpacity style={styles.button}
                    onPress={this.props.onPressBack}
                    disabled={this.props.backDisabled}
                >
                    {(this.props.backContent) ? this.props.backContent : backIcon}
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this.props.onPressForward}
                    disabled={this.props.forwardDisabled}
                >
                    {(this.props.forwardContent) ? this.props.forwardContent : forwardIcon}
                </TouchableOpacity>
            </View>

        );
    }
}
ForwardBackBar.defaultProps = {

};
ForwardBackBar.propTypes = {

};

