import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import ForwardBackBar from 'library/components/ForwardBackBar';

import R from 'res/R'

export default class Objetivo extends React.Component {

    static navigationOptions = {
        title: 'Objetivo',
        header: null,
    }


    constructor(props) {
        super(props);
        this.state = {
            objective: 'emagrecer',
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.selectLevel = this.selectLevel.bind(this);
    }
    componentDidMount() {
    }

    goNextScreen() {
        this.props.navigation.navigate('Dificuldade', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.props.navigation.getParam('calcutedKcal'),
            objective: this.state.objective,
        })
    }

    selectLevel(level) {
        this.state.objective = level;
        this.setState(this.state);
        this.goNextScreen();
    }
    render() {
        const activeBgColor = '#196A65';
        const defaultBgColor = '#eee';
        const activeTxtColor = '#fff';
        const defaultTxtColor = 'black';

        const bgColorLeve = (this.state.objective == 'emagrecer') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorLeve = (this.state.objective == 'emagrecer') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorModerada = (this.state.objective == 'ganharMassa') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorModerada = (this.state.objective == 'ganharMassa') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorElevada = (this.state.objective == 'ManterPeso') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorElevada = (this.state.objective == 'ManterPeso') ?
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
                <Text style={styles.titleTxt}>Qual o seu objetivo?</Text>
                <View style={styles.selectView}>


                    <TouchableOpacity style={[styles.selectTouch, bgColorLeve]}
                        onPress={() => { this.selectLevel('emagrecer') }}
                    >
                        <Text style={[styles.labelTitle, txtColorLeve]}>Emagrecimento</Text>
                        <Text style={[styles.labelDescription, txtColorLeve]}>
                            Peder peso de forma saudável
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorModerada]}
                        onPress={() => { this.selectLevel('ganharMassa') }}
                    >
                        <Text style={[styles.labelTitle, txtColorModerada]}>Ganho de massa muscular</Text>
                        <Text style={[styles.labelDescription, txtColorModerada]}>
                            Ganhar peso aumentando a massa magra
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorElevada]}
                        onPress={() => { this.selectLevel('ManterPeso') }}
                    >
                        <Text style={[styles.labelTitle, txtColorElevada]}>Manter o peso</Text>
                        <Text style={[styles.labelDescription, txtColorElevada]}>
                            Reeducação alimentar. Manter o peso com saúde.
                    </Text>
                    </TouchableOpacity>


                </View>

                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    onPressForward={this.goNextScreen}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTxt: {
        fontSize: 23,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 15,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    labelTitle: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    labelDescription: {
        fontSize: 17,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,

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