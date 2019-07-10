import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Tags from "react-native-tags";
import R from 'res/R'


import IngredientsSection from "library/components/IngredientsSection";
import ListItem from './ListItem';
import firebase from "library/networking/FirebaseConnection";





export default class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // recipeKey: this.props.navigation.getParam('recipeKey'),
            recipeKey: '11i1w7eLqK', //TODO PARA DEBUGG, VOltar co alinha de cima depois
            name: null,
            calories: null,
            preparationTime: null,
            difficulty: null,
            coverPhoto: null,
            description: null,
            servings: null,
            tags: ["Crepioca", "High Protein", "Almoço", "Jantar", "Fácil", "Low Carb", "Baixo Carboidrato", "Rápido", "Frango", '100-300 kcal'],
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
        this.addMeal = this.addMeal.bind(this);


        //verifica se tem usuario logado no sistema
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('recipes')
                    // .child(this.props.navigation.getParam('recipeKey'))
                    .child(this.state.recipeKey)  //TODO PARA DEBUGG, VOltar co alinha de cima depois
                    .once('value').then((snapshot) => {
                        // alert(JSON.stringify(snapshot));
                        let s = this.state;
                        s.key = snapshot.key;
                        s.name = snapshot.val().name;
                        s.calories = snapshot.val().calories;
                        s.preparationTime = snapshot.val().preparationTime;
                        s.difficulty = snapshot.val().difficulty;
                        s.description = snapshot.val().description;
                        s.servings = snapshot.val().servings;
                        this.setState(s);
                    });
                //Pegando a imagem de capa
                firebase.storage().ref('recipes').child(this.state.recipeKey).child('capa.jpg')
                    .getDownloadURL()
                    .then((url) => {
                        this.state.coverPhoto = url;
                        this.setState(this.state);
                    })


            } else {
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
        // Espera carregar
        if (this.state.calories == null) {
            return (<View style={styles.styleName}>

            </View>)
        }

        return (
            <View style={styles.body}>
                {/* <Text style={styles.txtName}>{JSON.stringify(this.state.breakfastRecipes, null, 2)}</Text>
                <Text style={styles.txtName}>{JSON.stringify(this.state.recipesList, null, 2)}</Text> */}


                <ScrollView style={styles.scrollContainer} >
                    <Image source={{ uri: this.state.coverPhoto }} style={styles.recipeImage} />
                    <View style={styles.headerView}>
                        <Text style={styles.nameTxt}>{this.state.name}</Text>
                        <Text style={styles.caloriesTxt}>{this.state.calories} kcal</Text>
                        <View style={styles.separator} />
                        <Text style={styles.descriptionTxt}>{this.state.description}</Text>

                        <View style={styles.separator} />

                        <View style={styles.infoRowView}>

                            <View style={styles.infoView}>
                                <View style={[styles.infoInsideView, styles.infoInsideLeftView]}>
                                    <Icon name='timer' size={25} color='#196A65' />
                                    <Text style={styles.infoTxt}>{this.state.preparationTime} min</Text>
                                </View>
                                <View style={[styles.infoInsideView, styles.infoInsideLeftView]}>
                                    <Icon name='group' size={25} color='#196A65' />
                                    <Text style={styles.infoTxt}>Serve {this.state.servings} pessoa(s)</Text>
                                </View>
                            </View>

                            <View style={styles.infoView}>
                                <View style={[styles.infoInsideView, styles.infoInsideRightView]}>
                                    <Icon name='shopping-cart' size={25} color='#196A65' />
                                    <Text style={styles.infoTxt}>{this.state.preparationTime} ingredientes</Text>
                                </View>
                                <View style={[styles.infoInsideView, styles.infoInsideRightView]}>
                                    <Icon name='network-check' size={25} color='#196A65' />
                                    <Text style={styles.infoTxt}>{this.state.difficulty}</Text>
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
    caloriesTxt: {
        fontSize: 20,
        textAlign: 'center',
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