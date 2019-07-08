import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ChangeCalories from "library/components/ChangeCalories";

/*
Estilos
this.props.style --> estilo da view global

Valores a serem passados
this.props.title
this.props.recommended
this.props.pctValue
this.props.kcalValue

Callback
this.props.onPressDecrement --> callback do touch
this.props.onPressIncrement --> callback
*/

export default class CardDistribuicao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.styles = StyleSheet.create({
            cardView: {
                minHeight: 120,
                marginHorizontal: 10,
                marginVertical: 5,
                padding: 10,
                backgroundColor: '#eee',
                borderRadius: 10,

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
                ...this.props.style,
            },
            calorieTipTxt: {

            },
            inputRowView: {
                flexDirection: 'row',
                marginVertical: 10,
            },
            mealLabelTxt: {
                fontSize: 25,
            },
            changeKcalView: {
                flex: 1,
            },
            pctTxt: {
                flex: 0.7,
                fontSize: 20,
                textAlign: 'center',
                textAlignVertical: 'center',
            },
            kcalTxt: {
                flex: 1,
                fontSize: 25,
                textAlignVertical: 'center',
            },

        });
    }

    render() {
        return (
            <View style={this.styles.cardView}>
                <Text style={this.styles.mealLabelTxt}>{this.props.title}</Text>
                <Text style={this.styles.calorieTipTxt}>{this.props.recommended}</Text>
                <View style={this.styles.inputRowView}>
                    <Text style={this.styles.pctTxt}>{this.props.pctValue}%</Text>
                    {/* <Text style={this.styles.kcalTxt}>{this.props.kcalValue} kcal</Text> */}
                    <View style={this.styles.changeKcalView}>
                        <ChangeCalories
                            value={this.props.kcalValue + '  kcal'}
                            onPressDecrement={this.props.onPressDecrement}
                            onPressIncrement={this.props.onPressIncrement}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

