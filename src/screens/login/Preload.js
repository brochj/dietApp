import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";
import firebase from "library/networking/FirebaseConnection";
import R from 'res/R';

export default class Preload extends React.Component {

    static navigationOptions = {
        title: 'Preload',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            bgImage: null,
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
    componentDidMount() {
        let items = R.images.login.preloadArray;
        this.state.randomBgImage = items[Math.floor(Math.random() * items.length)];
        this.setState(this.state);
    }



    render() {
        return (
            <ImageBackground source={this.state.randomBgImage} style={styles.bgImage}>
                <StatusBar backgroundColor="rgba(0,0,0,.35)" barStyle="light-content" translucent={true} />

                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>Diet App </Text>
                    </View>
                </View>

            </ImageBackground >


        );
    }
}

const styles = StyleSheet.create({
    bgImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',


    },
    titleView: {

    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,
    },

});