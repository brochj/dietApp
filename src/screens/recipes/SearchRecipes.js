import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, FlatList, TextInput } from "react-native";
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
        this.filter = this.filter.bind(this);
        // this.filter();

    }


    componentDidMount() {
        getRecipesList().then((data) => {
            this.setState({ recipesList: data });
        });
    }

    filter() {
        let referenceToOldestKey = '';
        if (!referenceToOldestKey) { // if initial fetch

            firebase.database().ref('tags')
                // .orderByChild("name").equalTo("Rap de atum light")
                // .orderByChild("tag").equalTo("easy")
                .limitToLast(4)
                .once('value')
                .then((snapshot) => {       // changing to reverse chronological order (latest first)
                    let arrayOfKeys = Object.keys(snapshot.val())
                        .sort()
                        .reverse();      // transforming to array
                    let results = arrayOfKeys
                        .map((key) => snapshot.val()[key]);      // storing reference
                    referenceToOldestKey = arrayOfKeys[arrayOfKeys.length - 1];
                    alert(JSON.stringify(results, null, 2))
                })
        } else {

            firebase.database().ref('recipes')
                .orderByKey()
                .endAt(oldestKeyReference)
                .limitToLast(6)
                .once('value')
                .then((snapshot) => {     // changing to reverse chronological order (latest first)
                    // & removing duplicate
                    let arrayOfKeys = Object.keys(snapshot.val())
                        .sort()
                        .reverse()
                        .slice(1);      // transforming to array
                    let results = arrayOfKeys
                        .map((key) => snapshot.val()[key]);      // updating reference
                    referenceToOldestKey = arrayOfKeys[arrayOfKeys.length - 1];      // Do what you want to do with the data, i.e.
                    // append to page or dispatch({ … }) if using redux   })
                    alert(results)

                })
        }
    }


    onClick(key) {
        this.props.navigation.navigate('ShowRecipe', { key })
    }

    render() {
        const theme = this.context;
        return (
            <View style={styles.body}>
                <View style={[styles.searchView, { backgroundColor: theme.surface }]}>
                    <TextInput
                        style={[styles.searchInput, { color: theme.onSurface }]}
                        placeholder='Pesquisar receita'
                        onChangeText={(txt) => { }}
                        placeholderTextColor={theme.onSurface}
                        autoCapitalize

                    />
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {/* <Text style={styles.txtName}>{JSON.stringify(this.state.recipesList, null, 2)}</Text> */}

                    <FlatList
                        style={styles.historico}
                        data={this.state.recipesList}
                        renderItem={({ item }) => <ListRecipe data={item} onPress={this.onClick} />}
                    />

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
    searchView: {
        height: 50,
        ...R.styles.shadow,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    searchInput: {
        paddingLeft: 15,
        fontSize: 18,
        color: 'black'
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