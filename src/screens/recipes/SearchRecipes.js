import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { connect } from 'react-redux';
import { ThemeContext } from 'res/themeContext';
import { getRecipes } from 'actions/RecipeActions';

import ListItem from 'components/SearchRecipes/ListItem';
import firebase from "networking/FirebaseConnection";
import R from 'res/R'

export class SearchRecipes extends React.Component {
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


                    snapshot.forEach((childItem) => {
                        let d = childItem.val();
                        photos = [];
                        for (photo in d.photos) {
                            photos.push(
                                d.photos[photo]
                            )
                        };

                        let ingredients = [];
                        for (ingredient in d.ingredients) {
                            ingredients.push(
                                d.ingredients[ingredient]
                            )
                        };

                        let instructions = [];
                        for (instruction in d.instructions) {
                            instructions.push(
                                d.instructions[instruction]
                            )
                        };

                        let tags = [];
                        for (tag in d.tags) {
                            tags.push(
                                d.tags[tag]
                            )
                        };



                        s.recipesList.push({
                            key: childItem.key,
                            name: d.name,
                            description: d.description,
                            preparationTime: d.preparationTime,
                            servings: d.servings,
                            difficulty: d.difficulty,
                            public: d.public,
                            calories: d.calories,
                            creator: d.creator,
                            calories: d.calories,
                            nutritionFacts: d.nutritionFacts,
                            cover: d.cover,
                            photos,
                            ingredients,
                            instructions,
                            tags,
                            image: s.image, //TODO retirar depois
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

const SearchRecipesConnect = connect(mapStateToProps, { getRecipes })(SearchRecipes);
export default SearchRecipesConnect;