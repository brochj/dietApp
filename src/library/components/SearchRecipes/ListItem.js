import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";


export default class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bg: '#eee',
            image: this.props.data.image
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.data.image }} style={styles.image} />
                <View style={styles.column}>
                    <Text>{JSON.stringify(this.props.data, null, 3)}</Text>
                    <View style={[styles.body, { backgroundColor: this.state.bg }]}>
                        <Text >{this.props.data.name}</Text>
                        <Text >R$ {this.props.data.calories}</Text>
                    </View >

                    <View style={[styles.body, { backgroundColor: this.state.bg }]}>
                        <Text >Dificuldade: {this.props.data.difficulty}</Text>
                        <Text >{this.props.data.preparationTime} min</Text>
                    </View>
                </View>
                <Button
                    title='Ver'
                    onPress={() => {
                        this.props.navigation.navigate('ShowRecipe', {
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
    column: {
        flex: 1,
    },
    body: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,

    },
    image: {
        width: 50,
    },

});