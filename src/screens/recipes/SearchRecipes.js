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





export default class SearchRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesList: [],
            image: null,
            breakfastRecipes: breakfastRecipes,
            // morningSnackRecipes: morningSnackRecipes,
            // lunchRecipes: lunchRecipes,
            // afternoonSnackRecipes: afternoonSnackRecipes,
            // dinnerRecipes: dinnerRecipes,
            // preWorkoutRecipes: preWorkoutRecipes,
            // afterTraningRecipes: afterTraningRecipes,
            // eveningSnackRecipes: eveningSnackRecipes,
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.addMeal = this.addMeal.bind(this);


        //verifica se tem usuario logado no sistema
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                //olheiro que fica monitorando o nó users->usuario atual->, e fica atualizando o valor do saldo deste usuario quanto houver alguma mudanca no banco de dados.
                //pegar o saldo do usuario
                // firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
                //     let s = this.state;
                //     s.saldo = snapshot.val().saldo;
                //     this.setState(s);
                // });
                //gravar dados
                // firebase.database().ref('recipes').child('32fdsfds').update({
                //     type: 'receita',
                //     valor: 35,
                //     teste: 34,
                // });
                //olheiro que monitora o saldo do usuário
                // pegar lista usando on (atualiza em tempo real)
                // firebase.database().ref('recipes').on('value', (snapshot) => {
                //     let s = this.state;
                //     s.recipesList = [];
                //     snapshot.forEach((childItem) => {
                //         s.recipesList.push({
                //             key: childItem.key,
                //             name: childItem.val().name,
                //             calories: childItem.val().calories,
                //             preparationTime: childItem.val().preparationTime,
                //             difficulty: childItem.val().difficulty,
                //         });
                //     });
                //     this.setState(s);
                // });
                // pegar lista usando once (não atualiza até que seja feita uma nova requisicao)
                firebase.database().ref('recipes').once('value').then((snapshot) => {
                    let s = this.state;
                    s.recipesList = [];
                    //Salvar no array recipeList
                    snapshot.forEach((childItem) => {
                        s.recipesList.push({
                            key: childItem.key,
                            name: childItem.val().name,
                            calories: childItem.val().calories,
                            preparationTime: childItem.val().preparationTime,
                            difficulty: childItem.val().difficulty,
                            image: s.image
                        });
                    });
                    this.setState(s);
                });
                firebase.storage().ref('recipes/paodeaveia.jpg')
                    .getDownloadURL()
                    .then((url) => {
                        this.state.image = url;
                        this.setState(this.state);
                    })
                //OBS: nao tem problema em ter varios olheiros, pois são informaçoes diferentes, nós diferentes...

            } else {
                this.props.navigation.navigate('Home')
            }
        });

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
            <ScrollView style={styles.body}>
                {/* <Image source={{ uri: this.state.image }} style={{ width: 50, height: 50 }} />
                <Text style={styles.txtName}>{this.state.image}</Text> */}
                {/* <Text style={styles.txtName}>{JSON.stringify(this.state.breakfastRecipes, null, 2)}</Text> */}
                {/* <Text style={styles.txtName}>{JSON.stringify(this.state.recipesList, null, 2)}</Text> */}

                <ScrollView style={styles.scrollContainer}>

                    <FlatList
                        style={styles.historico}
                        data={this.state.recipesList}
                        renderItem={({ item }) => <ListItem data={item} navigation={this.props.navigation} />}
                    />
                </ScrollView>


            </ScrollView>
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

});