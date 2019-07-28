import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Tags from "react-native-tags";
import R from 'res/R'

import { connect } from 'react-redux';
import { ThemeContext } from 'res/themeContext';
import { getRecipe } from 'actions/RecipeActions';


import IngredientsSection from "library/components/ShowRecipe/IngredientsSection";
import ListItem from 'components/SearchRecipes/ListItem';
import firebase from "library/networking/FirebaseConnection";
import { getRecipeData } from "library/networking/firebaseDatabase";





export class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        getRecipeData()
            .then((data) => {
                this.state.recipeData = data;
                this.state.tags = [];
                data.tags.map((item) => {
                    this.state.tags.push(item.tag)
                })
                this.setState(this.state);
            });
        this.state = {
            recipeData: null,
            // recipeKey: this.props.navigation.getParam('recipeKey'),
            recipeKey: '11i1w7eLqK', //TODO PARA DEBUGG, VOltar co alinha de cima depois
            name: null,
            calories: null,
            preparationTime: null,
            difficulty: null,
            coverPhoto: null,
            description: null,
            servings: null,
            tags: ["Crepioca"],
            ingredients: [
                {
                    title: 'Crepioca',
                    data: [
                        { key: '1', item: '1 ovo', },
                        { key: '2', item: '2 colheres de sopa de tapioca', },
                        { key: '3', item: 'Sal a gosto' }

                    ]
                },
                {
                    title: 'Recheio',
                    data: [
                        { key: '4', item: '1 colher (sopa) de queijo parmesão ralado polvilho e o iogurte (ou cottage) no mixer o', },
                        { key: '5', item: '1 colher (sopa) de cenoura ralada', },
                        { key: '6', item: '1 colher (sopa) peito de peru picado' }

                    ]
                }

            ],
            instructions: [
                {
                    title: 'Crepioca',
                    data: [
                        { key: '1', item: 'Bata os ovos, a água, o polvilho e o iogurte (ou cottage) no mixer ou liquidificador.', },
                        { key: '2', item: 'Coloque 1/3 da massa na frigideira antiaderente pré aquecida e cozinhe em fogo baixo.', },
                        { key: '3', item: 'Quando despregar da panela, vire e espere dourar do outro lado. Frite o restante da massa.' }
                    ]
                },
                {
                    title: 'Recheio',
                    data: [
                        { key: '4', item: 'Recheie cada crepioca com frango e um pouquinho de requeijão e enrole ou dobre ao meio.', },
                    ]
                }
            ],
        };
        this.goNextScreen = this.goNextScreen.bind(this);




    }
    componentDidUpdate() {
        // getRecipeData()
        //     .then((data) => {
        //         this.state.recipeData = data

        //         this.setState(this.state);
        //     })
    }

    componentDidMount() {
        // getRecipeData()
        //     .then((data) => {
        //         this.state.recipeData = data

        //         this.setState(this.state);
        //     })
    }


    goNextScreen() {
        this.saveMealCalories();
        this.props.navigation.navigate('teste')
    }





    render() {

        // Espera carregar
        if (this.state.recipeData == null) {
            return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.txtName}>Carregando...</Text>
            </View>)
        }

        return (
            <View style={styles.body}>
                {/* <Text style={styles.txtName}>{JSON.stringify(this.state.breakfastRecipes, null, 2)}</Text>
                <Text style={styles.txtName}>{JSON.stringify(this.state.recipesList, null, 2)}</Text> */}


                <ScrollView style={styles.scrollContainer} >
                    <Text>{JSON.stringify(this.state.recipeData, null, 3)}</Text>
                    <Image source={{ uri: this.state.recipeData.cover.url }} style={styles.recipeImage} />
                    <View style={styles.headerView}>
                        <Text style={styles.nameTxt}>{this.state.recipeData.name}</Text>
                        <View style={styles.rowView}>
                            <MaterialCommunityIcons name='fire' color='#196a65' size={30} />
                            <Text style={styles.caloriesTxt}>{this.state.recipeData.calories} kcal</Text>
                        </View>
                        <View style={styles.separator} />
                        <Text style={styles.descriptionTxt}>{this.state.recipeData.description}</Text>

                        <View style={styles.separator} />

                        <View style={styles.infoRowView}>

                            <View style={styles.infoView}>
                                <View style={[styles.infoInsideView, styles.infoInsideLeftView]}>
                                    <Icon name='timer' size={25} color='#196A65' />
                                    <Text style={styles.infoTxt}>{this.state.recipeData.preparationTime} min</Text>
                                </View>
                                <View style={[styles.infoInsideView, styles.infoInsideLeftView]}>
                                    <Icon name='group' size={25} color='#196A65' />
                                    <Text style={styles.infoTxt}>Serve {this.state.recipeData.servings} pessoa(s)</Text>
                                </View>
                            </View>

                            <View style={styles.infoView}>
                                <View style={[styles.infoInsideView, styles.infoInsideRightView]}>
                                    <Icon name='shopping-cart' size={25} color='#196A65' />
                                    <Text style={styles.infoTxt}>{this.state.recipeData.preparationTime} ingredientes</Text>
                                </View>
                                <View style={[styles.infoInsideView, styles.infoInsideRightView]}>
                                    <Icon name='network-check' size={25} color='#196A65' />
                                    <Text style={styles.infoTxt}>{this.state.recipeData.difficulty}</Text>
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
                                        <Text style={styles.tagTxt}>{tag}</Text>
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
                            data={this.state.ingredients}
                        />
                    </View>

                    <View style={styles.intructionsView}>
                        <View style={styles.ingredientsHeaderView}>
                            <MaterialCommunityIcons name='rice' color='#196a65' size={30} />
                            <Text style={styles.ingredientsTxt}>Modo de preparo</Text>
                        </View>
                        <View style={[styles.separator, { marginBottom: 0, height: 0.9 }]} />
                        <IngredientsSection
                            data={this.state.instructions}
                        />
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
    recipeImage: {
        height: 300,
        width: '100%'
    },
    headerView: {
        marginBottom: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
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