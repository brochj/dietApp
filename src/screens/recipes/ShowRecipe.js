import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Tags from "react-native-tags";
import R from 'res/R'

import { connect } from 'react-redux';
import { ThemeContext } from 'res/themeContext';
import { getRecipe } from 'actions/RecipeActions';


import IngredientsSection from "components/ShowRecipe/IngredientsSection";
import IngredientItem from "components/ShowRecipe/IngredientItem";
import StepsSection from "components/ShowRecipe/StepsSection";
import { getRecipeData } from "networking/firebaseDatabase";
import { capitalize } from 'scripts/StringScripts'

export class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeData: null,
            coverPhoto: null,
        };
    }

    componentDidMount() {
        // getRecipeData('sPofalpQuZOzQ')
        getRecipeData(this.props.navigation.getParam('key'))
            .then((data) => {
                this.state.recipeData = data;

                this.state.tags = [];
                data.tags.map((item) => {
                    this.state.tags.push(item.tag)
                });

                let steps = []
                data.instructions.forEach(instruction => {

                    let item = {
                        title: instruction['section'],
                        data: instruction['steps']
                    };
                    steps.push(item)
                })
                data.instructions = steps;

                let items = []
                data.ingredients.forEach(ingredient => {

                    let item = {
                        title: ingredient['section'],
                        data: ingredient['items']
                    };
                    items.push(item)
                })
                data.ingredients = items;

                this.setState(this.state);
            });
    }

    render() {

        // Espera carregar
        if (this.state.recipeData == null) {
            return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
                <Text style={styles.txtName}>Carregando...</Text>
            </View>)
        } else {
            const { name, calories, description, preparationTime,
                servings, difficulty, ingredients, instructions,
                cover: { url } } = this.state.recipeData;


            return (
                <View style={styles.body}>

                    <ScrollView style={styles.scrollContainer} >
                        {/* <Text>{JSON.stringify(this.state.recipeData, null, 3)}</Text> */}
                        <Image source={{ uri: url }} style={styles.recipeImage} />
                        <View style={styles.headerView}>
                            <Text style={styles.nameTxt}>{name}</Text>
                            <View style={styles.rowView}>
                                <MaterialCommunityIcons name='fire' color='#196a65' size={30} />
                                <Text style={styles.caloriesTxt}>{calories} kcal</Text>
                            </View>
                            <View style={styles.separator} />
                            <Text style={styles.descriptionTxt}>{description}</Text>

                            <View style={styles.separator} />

                            <View style={styles.infoRowView}>

                                <View style={styles.infoView}>
                                    <View style={[styles.infoInsideView, styles.infoInsideLeftView]}>
                                        <Icon name='timer' size={25} color='#196A65' />
                                        <Text style={styles.infoTxt}>{preparationTime} min</Text>
                                    </View>
                                    <View style={[styles.infoInsideView, styles.infoInsideLeftView]}>
                                        <Icon name='group' size={25} color='#196A65' />
                                        <Text style={styles.infoTxt}>Serve {servings} pessoa(s)</Text>
                                    </View>
                                </View>

                                <View style={styles.infoView}>
                                    <View style={[styles.infoInsideView, styles.infoInsideRightView]}>
                                        <Icon name='shopping-cart' size={25} color='#196A65' />
                                        <Text style={styles.infoTxt}>{preparationTime} ingredientes</Text>
                                    </View>
                                    <View style={[styles.infoInsideView, styles.infoInsideRightView]}>
                                        <Icon name='network-check' size={25} color='#196A65' />
                                        <Text style={styles.infoTxt}>{difficulty}</Text>
                                    </View>

                                </View>
                            </View>


                            <View style={styles.separator} />

                            <View style={styles.tagsView}>
                                <Tags
                                    readonly={true}
                                    initialText="monkey"
                                    // textInputProps={{
                                    //     placeholder: "Any type of animal"
                                    // }}
                                    initialTags={this.state.tags}
                                    onChangeTags={tags => console.log(tags)}
                                    onTagPress={(index, tagLabel, event, deleted) => { }}
                                    containerStyle={{ justifyContent: "center" }}
                                    inputStyle={{ backgroundColor: "white" }}
                                    renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                                        <TouchableOpacity key={`${tag}-${index}`} onPress={onPress} style={styles.tagTouch}>
                                            <Text style={styles.tagTxt}>#{capitalize(tag)}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>

                        </View>

                        <View style={styles.ingredientsView}>
                            <View style={styles.ingredientsHeaderView}>
                                <MaterialCommunityIcons name='food-variant' color='#196a65' size={30} />
                                <Text style={styles.ingredientsTxt}>Ingredientes</Text>
                            </View>
                            <View style={[styles.separator, { marginBottom: 0, height: 0.9 }]} />
                            <IngredientsSection
                                data={ingredients}
                            />
                        </View>

                        <View style={styles.intructionsView}>
                            <View style={styles.ingredientsHeaderView}>
                                <MaterialCommunityIcons name='rice' color='#196a65' size={30} />
                                <Text style={styles.ingredientsTxt}>Modo de preparo</Text>
                            </View>
                            <View style={[styles.separator, { marginBottom: 0, height: 0.9 }]} />
                            <StepsSection
                                data={instructions}
                            />
                        </View>

                    </ScrollView>


                </View>
            );
        };

    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    recipeImage: {
        height: 300,
        width: '100%'
    },
    headerView: {
        marginBottom: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        ...R.styles.shadow,
    },
    nameTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#196A65',
        marginTop: 10,
    },
    rowView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
    },
    caloriesTxt: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    descriptionTxt: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'justify'
    },

    infoRowView: {
        flexDirection: 'row',
    },
    infoView: {
        flex: 1,
    },
    infoInsideView: {
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#196A65',

    },
    infoInsideLeftView: {
        marginRight: 5,
        marginBottom: 5,
    },
    infoInsideRightView: {
        marginRight: 0,
        marginBottom: 5,
    },
    infoTxt: {
        flex: 1,
        fontSize: 15,
        padding: 5,
    },

    tagsView: {
        alignItems: 'center',
    },
    tagTouch: {
        justifyContent: 'center',
        height: 30,
        margin: 5,
        paddingHorizontal: 10,
        backgroundColor: '#196A65',
        borderRadius: 15,
    },
    tagTxt: {
        fontSize: 14,
        color: '#fff'
    },
    ingredientsView: {
        marginBottom: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        ...R.styles.shadow,
    },
    ingredientsHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ingredientsTxt: {
        textTransform: 'uppercase',
        fontSize: 18,
        paddingVertical: 5,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#196a65',
    },

    intructionsView: {
        marginBottom: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        ...R.styles.shadow,
    },

    separator: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        height: 0.7,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
});

ShowRecipe.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        uid: state.auth.uid,
        status: state.auth.status,

    };
};

const ShowRecipeConnect = connect(mapStateToProps, { getRecipe })(ShowRecipe);
export default ShowRecipeConnect;