import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ChangeCalories from "library/components/ChangeCalories";
import PropTypes from 'prop-types';



export default class CardDistribuicao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };


    }

    render() {
        return (
            <View style={[styles.cardView, this.props.style]}>
                <Text style={[styles.mealLabelTxt, this.props.titleStyle]}>{this.props.title}</Text>
                <Text style={[styles.calorieTipTxt, this.props.tipStyle]}>{this.props.recommended}</Text>
                <View style={styles.inputRowView}>
                    <Text style={[styles.pctTxt,this.props.pctStyle]}>{this.props.pctValue}%</Text>
                    <View style={styles.changeKcalView}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

    },
    calorieTipTxt: {
        fontSize: 14,
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

CardDistribuicao.defaultProps = {

};
CardDistribuicao.propTypes = {
    style: PropTypes.object,
    titleStyle: PropTypes.object,
    tipStyle: PropTypes.object,
    pctStyle: PropTypes.object,

    title: PropTypes.string,
    recommended: PropTypes.string,

    pctValue: PropTypes.number,
    kcalValue: PropTypes.number,

    onPressDecrement: PropTypes.func,
    onPressIncrement: PropTypes.func,
};

