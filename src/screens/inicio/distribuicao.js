import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import R from 'res/R'
import ChangeCalories from "library/components/ChangeCalories";


export default class distribuicao extends React.Component {
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
        this.sumAllCalories = this.sumAllCalories.bind(this);
        this.saveMealCalories = this.saveMealCalories.bind(this);
    }
    componentDidMount() {
        this.sumAllCalories();
    }

    goNextScreen() {
        this.saveMealCalories();
        this.props.navigation.navigate('Breakfast', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.props.navigation.getParam('calcutedKcal'),
            objective: this.props.navigation.getParam('objective'),
            // difficultyLevel: this.props.navigation.getParam('difficultyLevel'),
            mealCalories: this.state.mealCalories,

        })
    }

    saveMealCalories(){
        let s = this.state;
        s.mealCalories = {
            summedKcal: s.summedKcal,
            breakfastKcal: s.breakfastKcal,
            morningSnackKcal: s.morningSnackKcal,
            lunchKcal: s.lunchKcal,
            afternoonSnackKcal: s.afternoonSnackKcal,
            dinnerKcal: s.dinnerKcal,
            preWorkoutKcal: s.preWorkoutKcal,
            afterTraningKcal: s.afterTraningKcal,
            eveningSnackKcal: s.eveningSnackKcal,
        }
    }

    sumAllCalories() {
        let s = this.state;
        s.summedKcal =
            s.breakfastKcal +
            +s.morningSnackKcal +
            +s.lunchKcal +
            +s.afternoonSnackKcal +
            +s.dinnerKcal +
            +s.preWorkoutKcal +
            +s.afterTraningKcal +
            +s.eveningSnackKcal;
        this.setState(s);
    }


    render() {



        return (
            <View style={styles.body}>
                <View style={styles.resultRowView}>
                    <View style={styles.resultView}>

                        <Text style={styles.labelTargetTxt}>Meta</Text>
                        <Text style={styles.calcutedKcalTxt}>{this.state.calcutedKcal}</Text>
                        <Text style={styles.labelTargetTxt}>kcal</Text>
                    </View>
                    <View style={styles.resultView}>

                        <Text style={styles.labelTargetTxt}>Atual</Text>
                        <Text style={styles.calcutedKcalTxt}>{this.state.summedKcal}</Text>
                        <Text style={styles.labelTargetTxt}>kcal</Text>
                    </View>
                </View>
                <ScrollView style={styles.scrollContainer}>



                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>{this.state.stringData.breakfast.title}</Text>
                        <Text style={styles.calorieTipTxt}>{this.state.stringData.breakfast.recommended}</Text>
                        <View style={styles.inputRowView}>
                            <Text style={styles.pctTxt}>{this.state.breakfastPct}%</Text>
                            <Text style={styles.kcalTxt}>{this.state.breakfastKcal} kcal</Text>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.breakfastKcal}
                                    onPressDecrement={() => {
                                        this.state.breakfastKcal += 5;
                                        this.state.breakfastPct = ((this.state.breakfastKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                    onPressIncrement={() => {
                                        this.state.breakfastKcal += 5;
                                        this.state.breakfastPct = ((this.state.breakfastKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>{this.state.stringData.morningSnack.title}</Text>
                        <Text style={styles.calorieTipTxt}>{this.state.stringData.morningSnack.recommended}</Text>
                        <View style={styles.inputRowView}>
                            <Text style={styles.pctTxt}>{this.state.morningSnackPct}%</Text>
                            <Text style={styles.kcalTxt}>{this.state.morningSnackKcal} kcal</Text>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.morningSnackKcal}
                                    onPressDecrement={() => {
                                        this.state.morningSnackKcal -= 5;
                                        this.state.morningSnackPct = ((this.state.morningSnackKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state)
                                    }}
                                    onPressIncrement={() => {
                                        this.state.morningSnackKcal += 5;
                                        this.state.morningSnackPct = ((this.state.morningSnackKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>{this.state.stringData.lunch.title}</Text>
                        <Text style={styles.calorieTipTxt}>{this.state.stringData.lunch.recommended}</Text>
                        <View style={styles.inputRowView}>
                            <Text style={styles.pctTxt}>{this.state.lunchPct}%</Text>
                            <Text style={styles.kcalTxt}>{this.state.lunchKcal} kcal</Text>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.lunchKcal}
                                    onPressDecrement={() => {
                                        this.state.lunchKcal -= 5;
                                        this.state.lunchPct = ((this.state.lunchKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state)
                                    }}
                                    onPressIncrement={() => {
                                        this.state.lunchKcal += 5;
                                        this.state.lunchPct = ((this.state.lunchKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>{this.state.stringData.afternoonSnack.title}</Text>
                        <Text style={styles.calorieTipTxt}>{this.state.stringData.afternoonSnack.recommended}</Text>
                        <View style={styles.inputRowView}>
                            <Text style={styles.pctTxt}>{this.state.afternoonSnackPct}%</Text>
                            <Text style={styles.kcalTxt}>{this.state.afternoonSnackKcal} kcal</Text>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.afternoonSnackKcal}
                                    onPressDecrement={() => {
                                        this.state.afternoonSnackKcal -= 5;
                                        this.state.afternoonSnackPct = ((this.state.afternoonSnackKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state)
                                    }}
                                    onPressIncrement={() => {
                                        this.state.afternoonSnackKcal += 5;
                                        this.state.afternoonSnackPct = ((this.state.afternoonSnackKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>{this.state.stringData.dinner.title}</Text>
                        <Text style={styles.calorieTipTxt}>{this.state.stringData.dinner.recommended}</Text>
                        <View style={styles.inputRowView}>
                            <Text style={styles.pctTxt}>{this.state.dinnerPct}%</Text>
                            <Text style={styles.kcalTxt}>{this.state.dinnerKcal} kcal</Text>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.dinnerKcal}
                                    onPressDecrement={() => {
                                        this.state.dinnerKcal -= 5;
                                        this.state.dinnerPct = ((this.state.dinnerKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state)
                                    }}
                                    onPressIncrement={() => {
                                        this.state.dinnerKcal += 5;
                                        this.state.dinnerPct = ((this.state.dinnerKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>{this.state.stringData.preWorkout.title}</Text>
                        <Text style={styles.calorieTipTxt}>{this.state.stringData.preWorkout.recommended}</Text>
                        <View style={styles.inputRowView}>
                            <Text style={styles.pctTxt}>{this.state.preWorkoutPct}%</Text>
                            <Text style={styles.kcalTxt}>{this.state.preWorkoutKcal} kcal</Text>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.preWorkoutKcal}
                                    onPressDecrement={() => {
                                        this.state.preWorkoutKcal -= 5;
                                        this.state.preWorkoutPct = ((this.state.preWorkoutKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state)
                                    }}
                                    onPressIncrement={() => {
                                        this.state.preWorkoutKcal += 5;
                                        this.state.preWorkoutPct = ((this.state.preWorkoutKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>{this.state.stringData.afterTraning.title}</Text>
                        <Text style={styles.calorieTipTxt}>{this.state.stringData.afterTraning.recommended}</Text>
                        <View style={styles.inputRowView}>
                            <Text style={styles.pctTxt}>{this.state.afterTraningPct}%</Text>
                            <Text style={styles.kcalTxt}>{this.state.afterTraningKcal} kcal</Text>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.afterTraningKcal}
                                    onPressDecrement={() => {
                                        this.state.afterTraningKcal -= 5;
                                        this.state.afterTraningPct = ((this.state.afterTraningKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state)
                                    }}
                                    onPressIncrement={() => {
                                        this.state.afterTraningKcal += 5;
                                        this.state.afterTraningPct = ((this.state.afterTraningKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.cardView}>
                        <Text style={styles.mealLabelTxt}>{this.state.stringData.eveningSnack.title}</Text>
                        <Text style={styles.calorieTipTxt}>{this.state.stringData.eveningSnack.recommended}</Text>
                        <View style={styles.inputRowView}>
                            <Text style={styles.pctTxt}>{this.state.eveningSnackPct}%</Text>
                            <Text style={styles.kcalTxt}>{this.state.eveningSnackKcal} kcal</Text>
                            <View style={styles.changeKcalView}>
                                <ChangeCalories
                                    value={this.state.eveningSnackKcal}
                                    onPressDecrement={() => {
                                        this.state.eveningSnackKcal -= 5;
                                        this.state.eveningSnackPct = ((this.state.eveningSnackKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state)
                                    }}
                                    onPressIncrement={() => {
                                        this.state.eveningSnackKcal += 5;
                                        this.state.eveningSnackPct = ((this.state.eveningSnackKcal / this.state.calcutedKcal) * 100).toFixed(1);
                                        this.sumAllCalories();
                                        this.setState(this.state);
                                    }}
                                />
                            </View>
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
        minHeight: 120,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    calorieTipTxt: {

    },
    inputRowView: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    mealLabelTxt: {
        fontSize: 20,
    },
    changeKcalView: {
        flex: 1,
    },
    pctTxt: {
        flex: 0.7,
        fontSize: 20,
        textAlignVertical: 'center',
    },
    kcalTxt: {
        flex: 1,
        fontSize: 25,
        textAlignVertical: 'center',
    },
    resultRowView: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 5,

    },
    resultView: {
        flex: 1,
    },
    labelTargetTxt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
    calcutedKcalTxt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },

});