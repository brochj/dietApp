import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ForwardBackBar from 'library/components/ForwardBackBar';

import R from 'res/R'
import { ScrollView } from "react-native-gesture-handler";

export default class dadosPerfil extends React.Component {

    static navigationOptions = {

        title: 'Gasto Calorico',
        header: null,

    }
    constructor(props) {
        super(props);
        this.state = {
            calcutedKcal: '',
            TMB: 0,

        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.goMainScreen = this.goMainScreen.bind(this);
        this.calculateCalories = this.calculateCalories.bind(this);

    }
    componentDidMount() {
        this.calculateCalories();
    }

    goNextScreen() {
        this.props.navigation.navigate('Objetivo', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.state.calcutedKcal,
        })
    }
    goMainScreen() {
        this.props.navigation.navigate('HomeTab', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.state.calcutedKcal,
        })
    }
    calculateCalories() {
        let age = this.props.navigation.getParam('age');
        let weight = this.props.navigation.getParam('weight');
        let height = this.props.navigation.getParam('height');
        let gender = this.props.navigation.getParam('gender');
        let activityLevel = this.props.navigation.getParam('activityLevel');

        // ref https://www.mundoboaforma.com.br/quantas-calorias-por-dia-para-perder-peso/
        let activityValue = 1;
        if (activityLevel == 'leve') {
            activityValue = 1.2;
        } else if (activityLevel == 'moderada') {
            activityValue = 1.375;
        } else if (activityLevel == 'elevada') {
            activityValue = 1.55;
        } else if (activityLevel == 'intensa') {
            activityValue = 1.725;
        }
        let s = this.state;
        if (gender == 'male') {
            let a = 13.397 * weight; // weight in kg
            let b = 4.799 * height; // height in cm
            let c = 5.677 * age;// age in years
            s.TMB = 88.362 + a + b - c;
            s.calcutedKcal = Math.floor(s.TMB * activityValue);

        } else if (gender == 'female') {
            let a = 9.247 * weight; // weight in kg
            let b = 3.098 * height; // height in cm
            let c = 4.33 * age;// age in years
            s.TMB = 447.593 + a + b - c;
            s.calcutedKcal = Math.floor(s.TMB * activityValue);

        }

        this.setState(s);
    }

    render() {
        const activeBgColor = '#196A65';
        const defaultBgColor = '#eee';
        const activeTxtColor = '#fff';
        const defaultTxtColor = '#000';

        const bgColorElevada = (this.state.objective == 'ManterPeso') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorElevada = (this.state.objective == 'ManterPeso') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };
        return (
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.imageView}>

                        <Image source={R.images.womanCheers} style={styles.cheersImage} />
                    </View>

                    <View style={styles.textView}>
                        <Text style={styles.labelTxt}>Seu gasto calórico diário é aproximadamente</Text>
                        <Text style={styles.valueTxt}>{this.state.calcutedKcal}</Text>
                        <Text style={styles.labelTxt}>Calorias</Text>
                    </View>
                    <TouchableOpacity style={[styles.selectTouch, bgColorElevada]}
                        onPress={this.goNextScreen}
                    >
                        <Text style={[styles.labelTitle, txtColorElevada]}>Montar Dieta</Text>
                        <Text style={[styles.labelDescription, txtColorElevada]}>
                            Vamos juntos montar sua dieta de acordo com o seu objetivo
                    </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.selectTouch, bgColorElevada]}
                        onPress={this.goMainScreen}
                    >
                        <Text style={[styles.labelTitle, txtColorElevada]}>Fazer depois</Text>
                        <Text style={[styles.labelDescription, txtColorElevada]}>
                            A qualquer momento você poderá alterar sua dieta.
                        </Text>
                    </TouchableOpacity>

                </ScrollView>

                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    onPressForward={this.goNextScreen}
                    forwardDisabled
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',

    },
    scrollView: {
        flex: 1,
    },
    imageView: {
        flexDirection: 'row',
        marginTop: -20,
        // backgroundColor: 'gray',
    },
    cheersImage: {
        flex: 1,
        width: null,
        height: 170,
        resizeMode: 'contain',
        marginTop: 10,
    },
    textView: {
        flex: 1,

    },
    labelTxt: {
        textAlign: 'center',
        padding: 10,
        fontSize: 25,

    },
    valueTxt: {
        textAlign: 'center',
        padding: 10,
        fontSize: 45,
    },
    selectTouch: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#ddd',
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

});