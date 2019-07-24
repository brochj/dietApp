import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { connect } from 'react-redux';
import { changeCalorieIntakeGoal } from 'actions/DietPlanActions';
import { ThemeContext } from 'res/themeContext';

import R from 'res/R'


import ListItem from './ListItem';
import firebase from "library/networking/FirebaseConnection";





export  class SearchRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesList: [],
            image: null,
           
        };

        //verifica se tem usuario logado no sistema
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                
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

            } else {
                this.props.navigation.navigate('Home')
            }
        });

    }


    render() {
        return (
            <ScrollView style={styles.body}>
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

SearchRecipes.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        uid: state.auth.uid,
        status: state.auth.status,

    };
};

const SearchRecipesConnect = connect(mapStateToProps, { changeCalorieIntakeGoal })(SearchRecipes);
export default SearchRecipesConnect;