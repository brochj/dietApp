import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { connect } from 'react-redux';
import { ThemeContext } from 'res/themeContext';
import { getRecipes } from 'actions/RecipeActions';

import ListRecipe from 'components/SearchRecipes/ListRecipe';
import { getRecipesList } from "networking/firebaseDatabase";

import firebase from "networking/FirebaseConnection";
import R from 'res/R'

export class SearchRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesList: [],
            image: null,
        };

        this.onClick = this.onClick.bind(this);

    }


    componentDidMount() {
        getRecipesList().then((data) => {
            this.setState({ recipesList: data });
        });
    }


    onClick(key) {
        this.props.navigation.navigate('ShowRecipe', { key })
    }

    render() {
        return (
            <ScrollView style={styles.body}>
                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.txtName}>{JSON.stringify(this.state.recipesList, null, 2)}</Text>

                    <FlatList
                        style={styles.historico}
                        data={this.state.recipesList}
                        renderItem={({ item }) => <ListRecipe data={item} onPress={this.onClick} />}
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