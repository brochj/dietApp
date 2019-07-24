import React from "react";
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import R from 'res/R'

import { connect } from 'react-redux';
import { changeCalorieIntakeGoal } from 'actions/DietPlanActions';
import { ThemeContext } from 'res/themeContext';


import MealsAccordion from "library/components/MealsAccordion";
import breakfastRecipes from "res/meals/breakfastRecipes";
import morningSnackRecipes from "res/meals/morningSnackRecipes";
import lunchRecipes from "res/meals/lunchRecipes";
import afternoonSnackRecipes from "res/meals/afternoonSnackRecipes";
import dinnerRecipes from "res/meals/dinnerRecipes";
import preWorkoutRecipes from "res/meals/preWorkoutRecipes";
import afterTraningRecipes from "res/meals/afterTraningRecipes";
import eveningSnackRecipes from "res/meals/eveningSnackRecipes";


export class Meals extends React.Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            breakfastRecipes: breakfastRecipes,
            morningSnackRecipes: morningSnackRecipes,
            lunchRecipes: lunchRecipes,
            afternoonSnackRecipes: afternoonSnackRecipes,
            dinnerRecipes: dinnerRecipes,
            preWorkoutRecipes: preWorkoutRecipes,
            afterTraningRecipes: afterTraningRecipes,
            eveningSnackRecipes: eveningSnackRecipes,
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
        this.addMeal = this.addMeal.bind(this);
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

    addMeal() {
        this.props.navigation.navigate('SearchRecipes');
    }


    render() {



        return (
            <View style={[styles.body]}>
                <StatusBar hidden={false} backgroundColor='#196A65' />
                <Button title='Pesquisar receita' onPress={() => this.props.navigation.navigate('SearchRecipes')} />

                {/* <Text>email: {this.props.email}</Text>
                <Text>password: {this.props.password}</Text>
                <Text>uid: {this.props.uid}</Text>
                <Text>status: {this.props.status}</Text>

                <Text>objective: {this.props.objective}</Text>
                <Text>difficulty: {this.props.difficulty}</Text>
                <Text>calorieIntake: {this.props.calorieIntake}</Text>
                <Text>calorieIntakeGoal: {this.props.calorieIntakeGoal}</Text>
                <Text>breakfastKcal: {this.props.breakfastKcal}</Text>
                <Text>morningSnackKcal: {this.props.morningSnackKcal}</Text>
                <Text>lunchKcal: {this.props.lunchKcal}</Text>
                <Text>afternoonSnackKcal: {this.props.afternoonSnackKcal}</Text>
                <Text>dinnerKcal: {this.props.dinnerKcal}</Text>
                <Text>eveningSnackKcal: {this.props.eveningSnackKcal}</Text>
                <Text>preWorkoutKcal: {this.props.preWorkoutKcal}</Text>
                <Text>afterTraningKcal: {this.props.afterTraningKcal}</Text> */}




                <ScrollView style={styles.scrollContainer}>


                    <FlatList
                        data={[{ key: '1,', value: '321' }, { key: '1,', value: '321' }]}
                        renderItem={({ item }) => <Text >{item.value}</Text>}
                    />

                    <View style={styles.cardMeal}>
                        <View style={styles.titleRowView}>
                            <Text style={styles.mealTitleTxt}>{this.state.stringData.breakfast.title}</Text>
                            <Text style={styles.mealQuantityTxt}>5 Refeições</Text>
                        </View>

                        <MealsAccordion sections={this.state.breakfastRecipes} />
                        <TouchableOpacity
                            style={styles.addMealTouch}
                            onPress={this.addMeal}
                        >
                            <Text style={styles.addMealTxt}>Adicionar refeição</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardMeal}>
                        <View style={styles.titleRowView}>
                            <Text style={styles.mealTitleTxt}>{this.state.stringData.lunch.title}</Text>
                            <Text style={styles.mealQuantityTxt}>3 Refeições</Text>
                        </View>

                        {/* <MealsAccordion sections={this.state.breakfastRecipes} /> */}
                        <TouchableOpacity
                            style={styles.addMealTouch}
                            onPress={this.addMeal}
                        >
                            <Text style={styles.addMealTxt}>Adicionar refeição</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardMeal}>
                        <View style={styles.titleRowView}>
                            <Text style={styles.mealTitleTxt}>{this.state.stringData.morningSnack.title}</Text>
                            <Text style={styles.mealQuantityTxt}>5 Refeições</Text>
                        </View>

                        {/* <MealsAccordion sections={this.state.breakfastRecipes} /> */}
                        <TouchableOpacity
                            style={styles.addMealTouch}
                            onPress={this.addMeal}
                        >
                            <Text style={styles.addMealTxt}>Adicionar refeição</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


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
    separator: {
        backgroundColor: 'gray',


    },
    cardMeal: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    titleRowView: {
        flexDirection: 'row'
    },
    mealTitleTxt: {
        flex: 1,
        fontSize: 18,
        marginBottom: 20,
    },
    mealQuantityTxt: {
        flex: 1,
        textAlign: 'right',
        fontSize: 18,
        marginBottom: 20,
    },
    addMealTouch: {
        backgroundColor: '#196A65',
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addMealTxt: {
        color: 'white'

    },


});

Meals.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        uid: state.auth.uid,
        status: state.auth.status,



        objective: state.dietPlan.objective,
        difficulty: state.dietPlan.difficulty,
        calorieIntake: state.dietPlan.calorieIntake,
        calorieIntakeGoal: state.dietPlan.calorieIntakeGoal,

        breakfastKcal: state.dietPlan.breakfastKcal,
        morningSnackKcal: state.dietPlan.morningSnackKcal,
        lunchKcal: state.dietPlan.lunchKcal,
        afternoonSnackKcal: state.dietPlan.afternoonSnackKcal,
        dinnerKcal: state.dietPlan.dinnerKcal,
        eveningSnackKcal: state.dietPlan.eveningSnackKcal,
        preWorkoutKcal: state.dietPlan.preWorkoutKcal,
        afterTraningKcal: state.dietPlan.afterTraningKcal,
    };
};

const MealsConnect = connect(mapStateToProps, { changeCalorieIntakeGoal })(Meals);
export default MealsConnect;