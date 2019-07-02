import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import R from 'res/R';


/* 
Date: 02/july/2019
props deste componente
callbacks
this.props.value --> valor a ser incrementado e decrementado
this.props.onPressDecrement --> onPress do botao de decrementar
this.props.onPressIncrement --> onPress do botao deincrementar

PROPS de ESTILIZACAO 
this.props.style --> global/master view
this.props.touchStyle --> do comuns botoes de + e -
this.props.addTouch --> do botao de incrementar
this.props.subTouch --> do botao de deccrementar
this.props.fontValueStyle --> onde aparece o valor a ser mudado
this.props.fontAddStyle --> fonte do botao de incrementar
this.props.fontSubStyle --> fonte do botao de decrementar

*/
export default class MealsAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSections: [],
            sections: this.props.sections,

        };

        this.styles = StyleSheet.create({
            container: {
                // flexDirection: 'row',
                // justifyContent: 'center',
                backgroundColor: '#fefefe',
                borderRadius: 5,
                ...this.props.style,
            },

        });

        this.styles_renderHeader = StyleSheet.create({
            container: {
                flexDirection: 'row',
                // backgroundColor: '#fefefe',
                borderRadius: 5,
                padding: 5,
            },
            headerTitleTxt: {
                flex: 1,
                textAlignVertical: 'center',
                paddingLeft: 10,
                fontSize: 18,
            },
            headerCaloriesTxt: {
                paddingLeft: 10,
                textAlignVertical: 'center',
                fontSize: 18,
            },
            headerKcalTxt: {
                paddingLeft: 10,
                textAlignVertical: 'center',
                fontSize: 18,
            },
            headerImage: {
                width: 60,
                height: 60,
                borderRadius: 30,
            },
            separator: {
                alignSelf: 'center',
                width: '85%',
                height: 0.5,
                backgroundColor: 'gray',
            },

        });

        this.styles_renderContent = StyleSheet.create({
            container: {
                flexDirection: 'row',
                padding: 5,
                marginBottom: 15,
            },
            timeView: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
            },
            timeTxt: {
                marginLeft: 5,
                fontSize: 17,
            },
            difficultyTxt: {
                flex: 1,
                textAlign: 'center',
                fontSize: 17,

            },
            separator: {
                alignSelf: 'center',
                width: '85%',
                height: 0.5,
                backgroundColor: 'gray',
            },
        });
    }

    _renderContent = section => {
        return (
            <View style={this.styles.content}>
                {/* <Text>{section.title}</Text> */}
            </View>
        );
    };

    _renderHeader = section => {
        return (
            <View>
                <View style={this.styles_renderHeader.container}>
                    <Image source={section.image} style={this.styles_renderHeader.headerImage} />
                    <Text style={this.styles_renderHeader.headerTitleTxt}>{section.recipeName}</Text>
                    <Text style={this.styles_renderHeader.headerCaloriesTxt}>{section.calories}</Text>
                    <Text style={this.styles_renderHeader.headerKcalTxt}>kcal</Text>

                </View>
                <View style={this.styles_renderHeader.separator} />
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View>

                <View style={this.styles_renderContent.container}>
                    <View style={this.styles_renderContent.timeView}>
                        <Text style={this.styles_renderContent.timeTxt} >{section.preparationTime}</Text>
                        <Text style={this.styles_renderContent.timeTxt}>min</Text>
                    </View>
                    <Text style={this.styles_renderContent.difficultyTxt}>{section.difficulty}</Text>

                </View>
                <View style={this.styles_renderHeader.separator} />
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <View style={this.styles.container}>

                <Accordion
                    sections={this.state.sections}
                    activeSections={this.state.activeSections}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                    touchableComponent={TouchableOpacity}
                    expandMultiple={true}
                />
            </View>
        );
    }
}

