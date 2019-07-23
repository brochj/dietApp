import React from "react";
import { StyleSheet, Text, View, Image, Button, Animated, ScrollView } from "react-native";
import R from 'res/R'
import { connect } from 'react-redux';
import { changeCalorieIntakeGoal } from 'actions/DietPlanActions';
import { ThemeContext } from 'res/themeContext';
import ChangeCalories from "components/ChangeCalories";
import CardDistribuicao from "components/CardDistribuicao";
import ForwardBackBar from 'components/ForwardBackBar';
import { calculateCaloriesGoal } from "scripts/DietScripts";



export class MealsCalories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealCalories: {},
            summedKcal: 0,
            teste: 1200,

            breakfastKcal: 0,
            morningSnackKcal: 0,
            lunchKcal: 0,
            afternoonSnackKcal: 0,
            dinnerKcal: 0,
            preWorkoutKcal: 0,
            afterTraningKcal: 0,
            eveningSnackKcal: 0,

            breakfastPct: 20,
            morningSnackPct: 5,
            lunchPct: 30,
            afternoonSnackPct: 15,
            dinnerPct: 25,
            eveningSnackPct: 5,
            preWorkoutPct: 0,
            afterTraningPct: 0,

            stringData: {
                breakfast: {
                    title: 'Café da manhã',
                    recommended: 'Recomendado: 20%'
                },
                morningSnack: {
                    title: 'Lanche da manhã',
                    recommended: 'Recomendado: 5%'
                },
                lunch: {
                    title: 'Almoço',
                    recommended: 'Recomendado: 30%'
                },
                afternoonSnack: {
                    title: 'Lanche da tarde',
                    recommended: 'Recomendado: 15%'
                },
                dinner: {
                    title: 'Jantar',
                    recommended: 'Recomendado: 25%'
                },
                preWorkout: {
                    title: 'pré-treino',
                    recommended: 'Recomendado: 0%'
                },
                afterTraning: {
                    title: 'pós-treino',
                    recommended: 'Recomendado: 0%'
                },
                eveningSnack: {
                    title: 'Lanche da noite',
                    recommended: 'Recomendado: 5%'
                },
            }

        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.sumAllCalories = this.sumAllCalories.bind(this);
        // this.saveMealCalories = this.saveMealCalories.bind(this);
        this.changeCalories = this.changeCalories.bind(this);
        // this.recommendedValues();
        // this.sumAllCalories();
    }
    componentDidMount() {
        let newCalorieIntakeGoal = calculateCaloriesGoal(
            this.props.objective,
            this.props.difficulty,
            this.props.calorieIntake
        )
        this.props.changeCalorieIntakeGoal(newCalorieIntakeGoal);

        this.state.teste = this.props.calorieIntakeGoal;
        this.setState(this.state);
        this.recommendedValues();
        // this.sumAllCalories();
    }

    goNextScreen() {
        // this.saveMealCalories();
        this.props.navigation.navigate('HomeTab');
    }

    recommendedValues() {
        let s = this.state;
        alert(this.props.calorieIntakeGoal)

        
        this.setState({
            breakfastKcal: Math.round(this.state.teste * this.state.breakfastPct / 100),
            morningSnackKcal: Math.round(this.props.calorieIntakeGoal * this.state.morningSnackPct / 100),
            lunchKcal: Math.round(this.props.calorieIntakeGoal * this.state.lunchPct / 100),
            afternoonSnackKcal: Math.round(this.props.calorieIntakeGoal * this.state.afternoonSnackPct / 100),
            dinnerKcal: Math.round(this.props.calorieIntakeGoal * this.state.dinnerPct / 100),
            eveningSnackKcal: Math.round(this.props.calorieIntakeGoal * this.state.eveningSnackPct / 100),
            
        });
    }
    // saveMealCalories() {
    //     let s = this.state;
    //     s.mealCalories = {
    //         summedKcal: s.summedKcal,
    //         breakfastKcal: s.breakfastKcal,
    //         morningSnackKcal: s.morningSnackKcal,
    //         lunchKcal: s.lunchKcal,
    //         afternoonSnackKcal: s.afternoonSnackKcal,
    //         dinnerKcal: s.dinnerKcal,
    //         preWorkoutKcal: s.preWorkoutKcal,
    //         afterTraningKcal: s.afterTraningKcal,
    //         eveningSnackKcal: s.eveningSnackKcal,
    //     }
    //     this.setState(s);
    // }

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
                s.breakfastPct = ((s.breakfastKcal / this.props.calorieIntakeGoal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'morningSnack':
                if (operator == "-" && s.morningSnackKcal >= step) {
                    s.morningSnackKcal -= step;
                } else if (operator == "+") {
                    s.morningSnackKcal += step;
                }
                s.morningSnackPct = ((s.morningSnackKcal / this.props.calorieIntakeGoal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'lunch':
                if (operator == "-" && s.lunchKcal >= step) {
                    s.lunchKcal -= step;
                } else if (operator == "+") {
                    s.lunchKcal += step;
                }
                s.lunchPct = ((s.lunchKcal / this.props.calorieIntakeGoal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'afternoonSnack':
                if (operator == "-" && s.afternoonSnackKcal >= step) {
                    s.afternoonSnackKcal -= step;
                } else if (operator == "+") {
                    s.afternoonSnackKcal += step;
                }
                s.afternoonSnackPct = ((s.afternoonSnackKcal / this.props.calorieIntakeGoal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'dinner':
                if (operator == "-" && s.dinnerKcal >= step) {
                    s.dinnerKcal -= step;
                } else if (operator == "+") {
                    s.dinnerKcal += step;
                }
                s.dinnerPct = ((s.dinnerKcal / this.props.calorieIntakeGoal) * 100).toFixed(1);
                this.sumAllCalories();
                break;
            case 'eveningSnack':
                if (operator == "-" && s.eveningSnackKcal >= step) {
                    s.eveningSnackKcal -= step;
                } else if (operator == "+") {
                    s.eveningSnackKcal += step;
                }
                s.eveningSnackPct = ((s.eveningSnackKcal / this.props.calorieIntakeGoal) * 100).toFixed(1);
                this.sumAllCalories();
                break;

            default:
                break;
        }
        this.setState(this.state)
    }


    render() {
        let theme = this.context;

        const styles = StyleSheet.create({
            body: {
                flex: 1,
                backgroundColor: theme.background,
            },
            resultBgView: {
                backgroundColor: theme.primary,
                ...R.styles.shadow,
                paddingBottom: 15,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            },
            scrollContainer: {
                flex: 1,
                paddingTop: 5,
            },
            titleTxt: {
                color: theme.onPrimary,
                ...R.styles.basicText,
                ...R.styles.title2,
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
                color: theme.onPrimary,
                ...R.styles.basicText,
                ...R.styles.callout,
            },
            calcutedKcalTxt: {
                color: theme.onPrimary,
                ...R.styles.basicText,
                ...R.styles.extraTitle,
            },
            card: {
                backgroundColor: theme.surface,
            },
            cardTitle: {
                color: theme.onSurface,
            },
            cardTip: {
                color: theme.onSurface,
            },
            cardPct: {
                color: theme.onSurface,
            },

        });


        const txtColor = () => {
            let s = this.state;
            if (s.summedKcal == this.props.calorieIntakeGoal && this.props.objective == 'lossWeight') {
                return ({ color: 'green' })
            } else if (s.summedKcal == this.props.calorieIntakeGoal && this.props.objective == 'gainMuscle') {
                return ({ color: 'green' })
            }
        }

        return (
            <View style={styles.body}>
                <View style={styles.resultBgView}>
                    <Text style={styles.titleTxt}>calorieIntake: {this.props.calorieIntake}</Text>
                    <Text style={styles.titleTxt}>calorieIntakeGoal: {this.props.calorieIntakeGoal}</Text>
                    <Text style={styles.titleTxt}>Distribuição da calorias</Text>
                    <View style={styles.resultRowView}>
                        <View style={styles.resultView}>

                            <Text style={styles.labelTargetTxt}>Meta</Text>
                            <Text style={styles.calcutedKcalTxt}>{this.props.calorieIntakeGoal}</Text>
                            <Text style={styles.labelTargetTxt}>kcal</Text>
                        </View>
                        <View style={styles.resultView}>

                            <Text style={[styles.labelTargetTxt, txtColor()]}>Atual</Text>
                            <Text style={[styles.calcutedKcalTxt, txtColor()]}>{this.state.summedKcal}</Text>
                            <Text style={[styles.labelTargetTxt, txtColor()]}>kcal</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.scrollContainer}>

                    <CardDistribuicao
                        style={styles.card}
                        titleStyle={styles.cardTitle}
                        tipStyle={styles.cardTip}
                        pctStyle={styles.cardPct}
                        title={this.state.stringData.breakfast.title}
                        recommended={this.state.stringData.breakfast.recommended}
                        pctValue={this.state.breakfastPct}

                    >
                        <ChangeCalories
                            style={{ backgroundColor: theme.surface }}
                            subTouch={{ backgroundColor: theme.primary }}
                            addTouch={{ backgroundColor: theme.primary }}
                            fontSubStyle={{ color: theme.onPrimary }}
                            fontAddStyle={{ color: theme.onPrimary }}
                            fontValueStyle={{ color: theme.onSurface }}
                            value={this.state.breakfastKcal + '  kcal'}
                            onPressDecrement={() => this.changeCalories('breakfast', "-")}
                            onPressIncrement={() => this.changeCalories('breakfast', "+")}
                        />
                    </CardDistribuicao>

                    <CardDistribuicao
                        style={styles.card}
                        titleStyle={styles.cardTitle}
                        tipStyle={styles.cardTip}
                        pctStyle={styles.cardPct}
                        title={this.state.stringData.morningSnack.title}
                        recommended={this.state.stringData.morningSnack.recommended}
                        pctValue={this.state.morningSnackPct}
                    >
                        <ChangeCalories
                            style={{ backgroundColor: theme.surface }}
                            subTouch={{ backgroundColor: theme.primary }}
                            addTouch={{ backgroundColor: theme.primary }}
                            fontSubStyle={{ color: theme.onPrimary }}
                            fontAddStyle={{ color: theme.onPrimary }}
                            fontValueStyle={{ color: theme.onSurface }}
                            value={this.state.morningSnackKcal + '  kcal'}
                            onPressDecrement={() => this.changeCalories('morningSnack', "-")}
                            onPressIncrement={() => this.changeCalories('morningSnack', "+")}
                        />
                    </CardDistribuicao>

                    <CardDistribuicao
                        style={styles.card}
                        titleStyle={styles.cardTitle}
                        tipStyle={styles.cardTip}
                        pctStyle={styles.cardPct}
                        title={this.state.stringData.lunch.title}
                        recommended={this.state.stringData.lunch.recommended}
                        pctValue={this.state.lunchPct}
                    >
                        <ChangeCalories
                            style={{ backgroundColor: theme.surface }}
                            subTouch={{ backgroundColor: theme.primary }}
                            addTouch={{ backgroundColor: theme.primary }}
                            fontSubStyle={{ color: theme.onPrimary }}
                            fontAddStyle={{ color: theme.onPrimary }}
                            fontValueStyle={{ color: theme.onSurface }}
                            value={this.state.lunchKcal + '  kcal'}
                            onPressDecrement={() => this.changeCalories('lunch', "-")}
                            onPressIncrement={() => this.changeCalories('lunch', "+")}
                        />
                    </CardDistribuicao>

                    <CardDistribuicao
                        style={styles.card}
                        titleStyle={styles.cardTitle}
                        tipStyle={styles.cardTip}
                        pctStyle={styles.cardPct}
                        title={this.state.stringData.afternoonSnack.title}
                        recommended={this.state.stringData.afternoonSnack.recommended}
                        pctValue={this.state.afternoonSnackPct}
                    >
                        <ChangeCalories
                            style={{ backgroundColor: theme.surface }}
                            subTouch={{ backgroundColor: theme.primary }}
                            addTouch={{ backgroundColor: theme.primary }}
                            fontSubStyle={{ color: theme.onPrimary }}
                            fontAddStyle={{ color: theme.onPrimary }}
                            fontValueStyle={{ color: theme.onSurface }}
                            value={this.state.afternoonSnackKcal + '  kcal'}
                            onPressDecrement={() => this.changeCalories('afternoonSnack', "-")}
                            onPressIncrement={() => this.changeCalories('afternoonSnack', "+")}
                        />
                    </CardDistribuicao>

                    <CardDistribuicao
                        style={styles.card}
                        titleStyle={styles.cardTitle}
                        tipStyle={styles.cardTip}
                        pctStyle={styles.cardPct}
                        title={this.state.stringData.dinner.title}
                        recommended={this.state.stringData.dinner.recommended}
                        pctValue={this.state.dinnerPct}
                    >
                        <ChangeCalories
                            style={{ backgroundColor: theme.surface }}
                            subTouch={{ backgroundColor: theme.primary }}
                            addTouch={{ backgroundColor: theme.primary }}
                            fontSubStyle={{ color: theme.onPrimary }}
                            fontAddStyle={{ color: theme.onPrimary }}
                            fontValueStyle={{ color: theme.onSurface }}
                            value={this.state.dinnerKcal + '  kcal'}
                            onPressDecrement={() => this.changeCalories('dinner', "-")}
                            onPressIncrement={() => this.changeCalories('dinner', "+")}
                        />
                    </CardDistribuicao>

                    <CardDistribuicao
                        style={styles.card}
                        titleStyle={styles.cardTitle}
                        tipStyle={styles.cardTip}
                        pctStyle={styles.cardPct}
                        title={this.state.stringData.eveningSnack.title}
                        recommended={this.state.stringData.eveningSnack.recommended}
                        pctValue={this.state.eveningSnackPct}
                    >
                        <ChangeCalories
                            style={{ backgroundColor: theme.surface }}
                            subTouch={{ backgroundColor: theme.primary }}
                            addTouch={{ backgroundColor: theme.primary }}
                            fontSubStyle={{ color: theme.onPrimary }}
                            fontAddStyle={{ color: theme.onPrimary }}
                            fontValueStyle={{ color: theme.onSurface }}
                            value={this.state.eveningSnackKcal + '  kcal'}
                            onPressDecrement={() => this.changeCalories('eveningSnack', "-")}
                            onPressIncrement={() => this.changeCalories('eveningSnack', "+")}
                        />
                    </CardDistribuicao>



                </ScrollView>

                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    onPressForward={this.goNextScreen}
                />
            </View>
        );

    }
}


MealsCalories.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        objective: state.dietPlan.objective,
        difficulty: state.dietPlan.difficulty,
        calorieIntake: state.dietPlan.calorieIntake,
        calorieIntakeGoal: state.dietPlan.calorieIntakeGoal
    };
};

const MealsCaloriesConnect = connect(mapStateToProps, { changeCalorieIntakeGoal })(MealsCalories);
export default MealsCaloriesConnect;