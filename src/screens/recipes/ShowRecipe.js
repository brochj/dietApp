import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
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

import ListItem from './ListItem';
import firebase from "library/networking/FirebaseConnection";



export default class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeKey: this.props.navigation.getParam('recipeKey'),
            name: null,
            calories: null,
            preparationTime: null,
            difficulty: null,
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.addMeal = this.addMeal.bind(this);


        //verifica se tem usuario logado no sistema
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('recipes')
                    .child(this.props.navigation.getParam('recipeKey'))
                    .once('value').then((snapshot) => {
                        // alert(JSON.stringify(snapshot));
                        let s = this.state;
                        s.key = snapshot.key;
                        s.name = snapshot.val().name;
                        s.calories = snapshot.val().calories;
                        s.preparationTime = snapshot.val().preparationTime;
                        s.difficulty = snapshot.val().difficulty;
                        this.setState(s);
                    });

            }else {
                this.props.navigation.navigate('Home')
            }

           

        });

        //OBS: nao tem problema em ter varios olheiros, pois são informaçoes diferentes, nós diferentes...


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
    }



    render() {



        return (
            <View style={styles.body}>
                {/* <Text style={styles.txtName}>{JSON.stringify(this.state.breakfastRecipes, null, 2)}</Text>
                <Text style={styles.txtName}>{JSON.stringify(this.state.recipesList, null, 2)}</Text> */}

                <ScrollView style={styles.scrollContainer}>
                    {/* <Text style={styles.titleTxt}>{this.state.recipeKey}</Text> */}
                    {/* <Text style={styles.titleTxt}>{this.state.key}</Text> */}
                    <Text style={styles.titleTxt}>{this.state.name}</Text>
                    <Text style={styles.titleTxt}>Calorias: {this.state.calories}</Text>
                    <Text style={styles.titleTxt}>Tempo de preparacao: {this.state.preparationTime}</Text>
                    <Text style={styles.titleTxt}>Dificuldade: {this.state.difficulty}</Text>

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
    titleTxt:{
        flex: 1,
        fontSize: 25,
        textAlign: 'center',

    },
    

});