import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.body}>

                <Text>React-Native</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

});