import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import R from 'res/R'
import ChangeCalories from "library/components/ChangeCalories";


export default class Breakfast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealCalories: {},
            calcutedKcal: 2000,
            summedKcal: 0,
            breakfastKcal: 250,
            morningSnackKcal: 150,
            lunchKcal: 550,
            afternoonSnackKcal: 150,
            dinnerKcal: 350,
            preWorkoutKcal: 80,
            afterTraningKcal: 100,
            eveningSnackKcal: 120,

            breakfastPct: 0,
            morningSnackPct: 0,
            lunchPct: 0,
            afternoonSnackPct: 0,
            dinnerPct: 0,
            preWorkoutPct: 0,
            afterTraningPct: 0,
            eveningSnackPct: 0,

            stringData: {
                breakfast: {
                    title: 'Café da manhã',
                    recommended: 'Recomendado: 40% das calorias totais (aprox. 450 kcal)'
                },
                morningSnack: {
                    title: 'Lanche da manhã',
                    recommended: 'Recomendado: 40% das calorias totais (aprox. 450 kcal)'
                },
                lunch: {
                    title: 'Almoço',
                    recommended: 'Recomendado: 40% das calorias totais (aprox. 450 kcal)'
                },
                afternoonSnack: {
                    title: 'Lanche da tarde',
                    recommended: 'Recomendado: 40% das calorias totais (aprox. 450 kcal)'
                },
                dinner: {
                    title: 'Jantar',
                    recommended: 'Recomendado: 40% das calorias totais (aprox. 450 kcal)'
                },
                preWorkout: {
                    title: 'pré-treino',
                    recommended: 'Recomendado: 40% das calorias totais (aprox. 450 kcal)'
                },
                afterTraning: {
                    title: 'pós-treino',
                    recommended: 'Recomendado: 40% das calorias totais (aprox. 450 kcal)'
                },
                eveningSnack: {
                    title: 'Lanche da noite',
                    recommended: 'Recomendado: 40% das calorias totais (aprox. 450 kcal)'
                },
            }

        };
        this.goNextScreen = this.goNextScreen.bind(this);
    }
    componentDidMount() {

    }


    goNextScreen() {
        this.saveMealCalories();
        this.props.navigation.navigate('teste', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.props.navigation.getParam('calcutedKcal'),
            objective: this.props.navigation.getParam('objective'),
            dificultyLevel: this.props.navigation.getParam('dificultyLevel'),
            mealCalories: this.props.navigation.getParam('mealCalories'),

        })
    }




    render() {



        return (
            <View style={styles.body}>
                <Text style={styles.txtName}>age: {this.props.navigation.getParam('age')}</Text>
                <Text style={styles.txtName}>weight: {this.props.navigation.getParam('weight')}</Text>
                <Text style={styles.txtName}>height: {this.props.navigation.getParam('height')}</Text>
                <Text style={styles.txtName}>gender: {this.props.navigation.getParam('gender')}</Text>
                <Text style={styles.txtName}>activityLevel: {this.props.navigation.getParam('activityLevel')}</Text>
                <Text style={styles.txtName}>calcutedKcal: {this.props.navigation.getParam('calcutedKcal')}</Text>
                <Text style={styles.txtName}>objective: {this.props.navigation.getParam('objective')}</Text>
                <Text style={styles.txtName}>dificultyLevel: {this.props.navigation.getParam('dificultyLevel')}</Text>
                <Text style={styles.txtName}>mealCalories: {this.props.navigation.getParam('mealCalories').summedKcal}</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 10,
    },
    scrollContainer: {
        flex: 1,
    },


});