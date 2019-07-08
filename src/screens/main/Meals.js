import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import R from 'res/R'
import MealsAccordion from "library/components/MealsAccordion";
import breakfastRecipes from "res/meals/breakfastRecipes";
import morningSnackRecipes from "res/meals/morningSnackRecipes";
import lunchRecipes from "res/meals/lunchRecipes";
import afternoonSnackRecipes from "res/meals/afternoonSnackRecipes";
import dinnerRecipes from "res/meals/dinnerRecipes";
import preWorkoutRecipes from "res/meals/preWorkoutRecipes";
import afterTraningRecipes from "res/meals/afterTraningRecipes";
import eveningSnackRecipes from "res/meals/eveningSnackRecipes";


export default class Meals extends React.Component {
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
            <View style={[styles.body, { paddingTop: StatusBar.currentHeight }]}>
                <StatusBar backgroundColor='#196A65' />
                <Button title='Pesquisar receita' onPress={() => this.props.navigation.navigate('SearchRecipes')} />
                {/* <Text style={styles.txtName}>age: {this.props.navigation.getParam('age')}</Text>
                <Text style={styles.txtName}>weight: {this.props.navigation.getParam('weight')}</Text>
                <Text style={styles.txtName}>height: {this.props.navigation.getParam('height')}</Text>
                <Text style={styles.txtName}>gender: {this.props.navigation.getParam('gender')}</Text>
                <Text style={styles.txtName}>activityLevel: {this.props.navigation.getParam('activityLevel')}</Text>
                <Text style={styles.txtName}>calcutedKcal: {this.props.navigation.getParam('calcutedKcal')}</Text>
                <Text style={styles.txtName}>objective: {this.props.navigation.getParam('objective')}</Text>
                <Text style={styles.txtName}>dificultyLevel: {this.props.navigation.getParam('dificultyLevel')}</Text>
                <Text style={styles.txtName}>mealCalories: {this.props.navigation.getParam('mealCalories').summedKcal}</Text> */}
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.cardMeal}>
                        <View style={styles.titleRowView}>
                            <Text style={styles.mealTitleTxt}>{this.state.stringData.breakfast.title}</Text>
                            <Text style={styles.mealQuantityTxt}>0 Refeições</Text>
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