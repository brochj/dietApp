import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import R from 'res/R'

export default class dadosPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calcutedKcal: '',
            TMB: 0,

        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.calculateCalories = this.calculateCalories.bind(this);

    }
    componentDidMount() {
        this.calculateCalories();
    }

    goNextScreen() {
        this.props.navigation.navigate('objetivo', {
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
        return (
            <View style={styles.body}>
                <View style={styles.imageView}>

                    <Image source={R.images.womanCheers} style={styles.cheersImage} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.labelTxt}>Seu gasto calórico diário é aproximadamente</Text>
                    <Text style={styles.valueTxt}>{this.state.calcutedKcal}</Text>
                    <Text style={styles.labelTxt}>Calorias</Text>
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
        alignItems: 'center',
    },
    imageView: {
        flexDirection: 'row',
        marginTop: -20,
        // backgroundColor: 'gray',
    },
    cheersImage: {
        flex: 1,
        width: null,
        height: 300,
        resizeMode: 'contain',
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

});