import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import MealsAccordion from "library/components/MealsAccordion";


export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        // let bg = 'green';
        // if (this.props.data.type == 'despesa') {
        //     bg = 'red'
        // }
        this.state = {
            bg: '#eee'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                      
                <View style={[styles.body, { backgroundColor: this.state.bg }]}>
                    <Text >{this.props.data.name}</Text>
                    <Text >R$ {this.props.data.calories}</Text>
                </View >

                <View style={[styles.body, { backgroundColor: this.state.bg }]}>
                    <Text >Dificuldade: {this.props.data.difficulty}</Text>
                    <Text >Tempo de Preparaçao : {this.props.data.preparationTime}</Text>
                </View>
                </View>
                <Button 
                    title='Ver' 
                    onPress={()=> {
                    this.props.navigation.navigate('ShowRecipe',{
                        recipeKey: this.props.data.key,
                    })
                }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        flexDirection: 'row',
    },
    column:{
        flex: 1,
    },
    body: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },

});