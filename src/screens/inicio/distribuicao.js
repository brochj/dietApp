import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import R from 'res/R'
import ChangeCalories from "library/components/ChangeCalories";
import { thisExpression } from "@babel/types";


export default class distribuicao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kcal: 1150,
            breakfastKcal: 0,
            morningSnackKcal: 0,
            lunchKcal: 0,
            afternoonSnackKcal: 0,
            dinnerKcal: 0,
            preWorkoutKcal: 0,
            afterTraning: 0,
            eveningSnackKcal: 0,

            breakfastPct: 0,
            morningSnackPct: 0,
            lunchPct: 0,
            afternoonSnackPct: 0,
            dinnerPct: 0,
            preWorkoutPct: 0,
            afterTraning: 0,
            eveningSnackPct: 0,
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }
    componentDidMount() {
    }

    goNextScreen() {
        this.props.navigation.navigate('teste', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.props.navigation.getParam('calcutedKcal'),
            objective: this.props.navigation.getParam('objective'),
            dificultyLevel: this.props.navigation.getParam('dificultyLevel'),
        })
    }
    increment(value) {
        value += 1;
        this.setState(this.state);
    }
    decrement(value) {
        this.setState(function(prevState, props){
            return {breakfastKcal: prevState.breakfastKcal + 1 }
         });
    }

    render() {



        return (
            <View style={styles.body}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>Cafe da manha</Text>
                        <Text style={styles.calorieTipTxt}>Recomendado: 40% das calorias totais (aprox. 450 kcal)</Text>
                        <View style={styles.inputRowView}>
                            <View style={styles.changeKcalView}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>Cafe da manha</Text>
                        <Text style={styles.calorieTipTxt}>Recomendado: 40% das calorias totais (aprox. 450 kcal)</Text>
                        <View style={styles.inputRowView}>
                            <View style={styles.changeKcalView}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>Cafe da manha</Text>
                        <Text style={styles.calorieTipTxt}>Recomendado: 40% das calorias totais (aprox. 450 kcal)</Text>
                        <View style={styles.inputRowView}>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.breakfastKcal}
                                    onPressDecrement={() => { this.decrement(this.state.breakfastKcal) }}
                                    onPressIncrement={() => { this.state.breakfastKcal += 1; this.setState(this.state); }}
                                />
                            </View>
                            <Text style={styles.pctTxt}>{this.state.breakfastPct}</Text>
                        </View>
                    </View>
                </ScrollView>
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
    },
    scrollContainer: {
        flex: 1,
    },
    cardView: {
        minHeight: 150,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    calorieTipTxt: {

    },
    inputRowView: {
        flexDirection: 'row'
    },
    mealLabelTxt: {
        fontSize: 20,
    },
    changeKcalView: {

    },
    pctTxt: {

    },

});