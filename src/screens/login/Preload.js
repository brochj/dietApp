import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import firebase from "library/networking/FirebaseConnection";

export default class Preload extends React.Component {

    static navigationOptions = {
        title: 'Preload',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {

        };
        //verifica se tem usuario logado no sistema
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Breakfast')

            } else {
                this.props.navigation.navigate('Home')
            }
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Diet App Preload</Text>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: null,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },

});