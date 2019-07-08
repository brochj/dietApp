import React from "react";
import { StyleSheet, Text, View, Image, Button, Animated, ScrollView } from "react-native";
import R from 'res/R'
import ChangeCalories from "library/components/ChangeCalories";
import CardDistribuicao from "library/components/CardDistribuicao";
import ForwardBackBar from 'library/components/ForwardBackBar';



export default class distribuicao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objective: '',
            calcutedKcal: 0,
            targetKcal: 0,

            mealCalories: {},
            calcutedKcal: 2000,
            summedKcal: 0,
            breakfastKcal: 50,
            morningSnackKcal: 0,
            lunchKcal: 0,
            afternoonSnackKcal: 0,
            dinnerKcal: 0,
            preWorkoutKcal: 0,
            afterTraningKcal: 0,
            eveningSnackKcal: 0,

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
                    recommended: 'Recomendado: 20% das calorias totais'
                },
                morningSnack: {
                    title: 'Lanche da manhã',
                    recommended: 'Recomendado: 5% das calorias totais'
                },
                lunch: {
                    title: 'Almoço',
                    recommended: 'Recomendado: 30% das calorias totais'
                },
                afternoonSnack: {
                    title: 'Lanche da tarde',
                    recommended: 'Recomendado: 15% das calorias totais'
                },
                dinner: {
                    title: 'Jantar',
                    recommended: 'Recomendado: 25% das calorias totais'
                },
                preWorkout: {
                    title: 'pré-treino',
                    recommended: 'Recomendado: 0% das calorias totais'
                },
                afterTraning: {
                    title: 'pós-treino',
                    recommended: 'Recomendado: 0% das calorias totais'
                },
                eveningSnack: {
                    title: 'Lanche da noite',
                    recommended: 'Recomendado: 5% das calorias totais'
                },
            }

        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.sumAllCalories = this.sumAllCalories.bind(this);
        this.saveMealCalories = this.saveMealCalories.bind(this);
        this.changeCalories = this.changeCalories.bind(this);
    }
    componentDidMount() {
        this.state.targetKcal = this.props.navigation.getParam('targetKcal');
        this.setState(this.state);
        this.recommendedValues();
        this.sumAllCalories();
    }

    goNextScreen() {
        this.saveMealCalories();
        this.props.navigation.navigate('HomeTab', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.props.navigation.getParam('calcutedKcal'),
            objective: this.props.navigation.getParam('objective'),
            difficultyLevel: this.props.navigation.getParam('difficultyLevel'),
            targetKcal: this.props.navigation.getParam('targetKcal'),
            mealCalories: this.state.mealCalories,

        })
    }

    recommendedValues() {
        let s = this.state;

        s.breakfastPct = 20;
        s.morningSnackPct = 5;
        s.lunchPct = 30;
        s.afternoonSnackPct = 15;
        s.dinnerPct = 25;
        s.eveningSnackPct = 5;

        s.breakfastKcal = Math.round(s.targetKcal * s.breakfastPct / 100);
        s.morningSnackKcal = Math.round(s.targetKcal * s.morningSnackPct / 100);
        s.lunchKcal = Math.round(s.targetKcal * s.lunchPct / 100);
        s.afternoonSnackKcal = Math.round(s.targetKcal * s.afternoonSnackPct / 100);
        s.dinnerKcal = Math.round(s.targetKcal * s.dinnerPct / 100);
        s.eveningSnackKcal = Math.round(s.targetKcal * s.eveningSnackPct / 100);

        this.setState(s);
    }
    saveMealCalories() {
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
        this.setState(s);
    }

    sumAllCalories() {
        let s = this.state;
        s.summedKcal = 0;
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

    changeCalories(meal, operator) {
        let step = 15;
        let s = this.state;
        switch (meal) {
            case 'breakfast':
                if (operator == "-" && s.breakfastKcal >= step) {
                    s.breakfastKcal -= step;
                } else if (operator == "+") {
                    s.breakfastKcal += step;
                }
                s.breakfastPct = ((s.breakfastKcal / s.targetKcal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'morningSnack':
                if (operator == "-" && s.morningSnackKcal >= step) {
                    s.morningSnackKcal -= step;
                } else if (operator == "+") {
                    s.morningSnackKcal += step;
                }
                s.morningSnackPct = ((s.morningSnackKcal / s.targetKcal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'lunch':
                if (operator == "-" && s.lunchKcal >= step) {
                    s.lunchKcal -= step;
                } else if (operator == "+") {
                    s.lunchKcal += step;
                }
                s.lunchPct = ((s.lunchKcal / s.targetKcal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'afternoonSnack':
                if (operator == "-" && s.afternoonSnackKcal >= step) {
                    s.afternoonSnackKcal -= step;
                } else if (operator == "+") {
                    s.afternoonSnackKcal += step;
                }
                s.afternoonSnackPct = ((s.afternoonSnackKcal / s.targetKcal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'dinner':
                if (operator == "-" && s.dinnerKcal >= step) {
                    s.dinnerKcal -= step;
                } else if (operator == "+") {
                    s.dinnerKcal += step;
                }
                s.dinnerPct = ((s.dinnerKcal / s.targetKcal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'eveningSnack':
                if (operator == "-" && s.eveningSnackKcal >= step) {
                    s.eveningSnackKcal -= step;
                } else if (operator == "+") {
                    s.eveningSnackKcal += step;
                }
                s.eveningSnackPct = ((s.eveningSnackKcal / s.targetKcal) * 100).toFixed(1);
                this.sumAllCalories();
                break;

            default:
                break;
        }
        this.setState(this.state)
    }


    render() {



        return (
            <View style={styles.body}>
                <Text style={styles.titleTxt}>Distribuição da calorias</Text>
                <View style={styles.resultRowView}>
                    <View style={styles.resultView}>

                        <Text style={styles.labelTargetTxt}>Meta</Text>
                        <Text style={styles.calcutedKcalTxt}>{this.state.targetKcal}</Text>
                        <Text style={styles.labelTargetTxt}>kcal</Text>
                    </View>
                    <View style={styles.resultView}>

                        <Text style={styles.labelTargetTxt}>Atual</Text>
                        <Text style={styles.calcutedKcalTxt}>{this.state.summedKcal}</Text>
                        <Text style={styles.labelTargetTxt}>kcal</Text>
                    </View>
                </View>
                <ScrollView style={styles.scrollContainer}>

                    <CardDistribuicao
                        style={{ height: this.state.cardHeight }}
                        title={this.state.stringData.breakfast.title}
                        recommended={this.state.stringData.breakfast.recommended}
                        pctValue={this.state.breakfastPct}
                        kcalValue={this.state.breakfastKcal}
                        onPressDecrement={() => this.changeCalories('breakfast', "-")}
                        onPressIncrement={() => this.changeCalories('breakfast', "+")}
                    />

                    <CardDistribuicao
                        title={this.state.stringData.morningSnack.title}
                        recommended={this.state.stringData.morningSnack.recommended}
                        pctValue={this.state.morningSnackPct}
                        kcalValue={this.state.morningSnackKcal}
                        onPressDecrement={() => this.changeCalories('morningSnack', "-")}
                        onPressIncrement={() => this.changeCalories('morningSnack', "+")}
                    />

                    <CardDistribuicao
                        title={this.state.stringData.lunch.title}
                        recommended={this.state.stringData.lunch.recommended}
                        pctValue={this.state.lunchPct}
                        kcalValue={this.state.lunchKcal}
                        onPressDecrement={() => this.changeCalories('lunch', "-")}
                        onPressIncrement={() => this.changeCalories('lunch', "+")}
                    />

                    <CardDistribuicao
                        title={this.state.stringData.afternoonSnack.title}
                        recommended={this.state.stringData.afternoonSnack.recommended}
                        pctValue={this.state.afternoonSnackPct}
                        kcalValue={this.state.afternoonSnackKcal}
                        onPressDecrement={() => this.changeCalories('afternoonSnack', "-")}
                        onPressIncrement={() => this.changeCalories('afternoonSnack', "+")}
                    />

                    <CardDistribuicao
                        title={this.state.stringData.dinner.title}
                        recommended={this.state.stringData.dinner.recommended}
                        pctValue={this.state.dinnerPct}
                        kcalValue={this.state.dinnerKcal}
                        onPressDecrement={() => this.changeCalories('dinner', "-")}
                        onPressIncrement={() => this.changeCalories('dinner', "+")}
                    />

                    <CardDistribuicao
                        title={this.state.stringData.eveningSnack.title}
                        recommended={this.state.stringData.eveningSnack.recommended}
                        pctValue={this.state.eveningSnackPct}
                        kcalValue={this.state.eveningSnackKcal}
                        onPressDecrement={() => this.changeCalories('eveningSnack', "-")}
                        onPressIncrement={() => this.changeCalories('eveningSnack', "+")}
                    />



                </ScrollView>

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
    },
    scrollContainer: {
        flex: 1,
    },
    titleTxt: {
        fontSize: 23,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    resultRowView: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    resultView: {
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    labelTargetTxt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17,
    },
    calcutedKcalTxt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
    },

});