import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import R from 'res/R'

export default class Atividade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityLevel: 'leve',
            gender: 'female',
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.selectLevel = this.selectLevel.bind(this);

    }

    goNextScreen() {
        this.props.navigation.navigate('GastoCalorico', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.state.activityLevel,
        })
    }
    selectLevel(level) {
        this.state.activityLevel = level,
            this.setState(this.state);
    }
    render() {
        const activeBgColor = '#196A65';
        const defaultBgColor = '#eee';
        const activeTxtColor = '#fff';
        const defaultTxtColor = 'black';
        const bgColorLeve = (this.state.activityLevel == 'leve') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };
        const txtColorLeve = (this.state.activityLevel == 'leve') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const bgColorModerada = (this.state.activityLevel == 'moderada') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };
        const txtColorModerada = (this.state.activityLevel == 'moderada') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const bgColorElevada = (this.state.activityLevel == 'elevada') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };
        const txtColorElevada = (this.state.activityLevel == 'elevada') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const bgColorIntensa = (this.state.activityLevel == 'intensa') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };
        const txtColorIntensa = (this.state.activityLevel == 'intensa') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const genderImage = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manWeight :
            R.images.womanWeight;
        const genderImage1 = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manRun :
            R.images.womanStretch;


        return (

            <View style={styles.body}>
                <View style={styles.imageView}>
                    <Image source={genderImage} style={styles.genderImage} />
                    <Image source={genderImage1} style={styles.genderImage1} />
                </View>
                <View style={styles.selectView}>


                    <TouchableOpacity style={[styles.selectTouch, bgColorLeve]}
                        onPress={() => { this.selectLevel('leve') }}
                    >
                        <Text style={[styles.labelTitle, txtColorLeve]}>Sedentário</Text>
                        <Text style={[styles.labelDescription, txtColorLeve]}>
                            Sentado na maior parte do tempo (ex.: trabalho em escritório)
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorModerada]}
                        onPress={() => { this.selectLevel('moderada') }}
                    >
                        <Text style={[styles.labelTitle, txtColorModerada]}>Moderada</Text>
                        <Text style={[styles.labelDescription, txtColorModerada]}>
                            Em pé na maior parte do tempo (ex.: professor)
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorElevada]}
                        onPress={() => { this.selectLevel('elevada') }}
                    >
                        <Text style={[styles.labelTitle, txtColorElevada]}>Elevada</Text>
                        <Text style={[styles.labelDescription, txtColorElevada]}>
                            Andando na maior parte do tempo (ex.: vendedor)
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorIntensa]}
                        onPress={() => { this.selectLevel('intensa') }}
                    >
                        <Text style={[styles.labelTitle, txtColorIntensa]}>Intensa</Text>
                        <Text style={[styles.labelDescription, txtColorIntensa]}>
                            Trabalho que exige muita atividade (ex.: pedreiro)
                    </Text>
                    </TouchableOpacity>

                </View>
                <Button title='Go to next screen'
                    onPress={this.goNextScreen}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    selectView: {
        flex: 1,
        // backgroundColor: 'black',
    },
    selectTouch: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'gray',
        minHeight: 110,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
    },
    labelTitle: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',

    },
    labelDescription: {
        fontSize: 17,
        color: 'black',
        textAlign: 'center',

    },
    imageView: {
        flexDirection: 'row'
    },
    genderImage: {
        flex: 1,
        width: null,
        height: 100,
        resizeMode: 'contain'
    },
    genderImage1: {
        flex: 1,
        width: null,
        height: 100,
        resizeMode: 'contain'
    },
});