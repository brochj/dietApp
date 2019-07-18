import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import { connect } from 'react-redux';
import { changeActivityLevel } from 'actions/UserActions';
import { ThemeContext } from 'res/themeContext';

import ForwardBackBar from 'library/components/ForwardBackBar';
import CardTouch from 'library/components/CardTouch';

import R from 'res/R';


export class ActivityLevel extends React.Component {
    static navigationOptions = {
        title: 'ActivityLevel',
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.goNextScreen = this.goNextScreen.bind(this);
        this.selectLevel = this.selectLevel.bind(this);

    }

    goNextScreen() {
        this.props.navigation.navigate('GastoCalorico')
    }
    selectLevel(level) {

        this.props.changeActivityLevel(level);
        // this.goNextScreen(); //TODO voltar essa linha depois
    }
    render() {
        let theme = this.context;

        const styles = StyleSheet.create({
            body: {
                backgroundColor: theme.background,
                flex: 1,
                paddingTop: 10,
                alignItems: 'center',
            },
            selectView: {
                flex: 1,
                // backgroundColor: 'black',
            },

            titleTxt: {
                fontSize: 23,
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
                paddingVertical: 10,
                paddingHorizontal: 15,
            },

            imageView: {
                flexDirection: 'row'
            },
            genderImage: {
                flex: 1,
                width: null,
                height: 100,
                resizeMode: 'contain'
            },
            genderImage1: {
                flex: 1,
                width: null,
                height: 100,
                resizeMode: 'contain'
            },
        });

        const activeBgColor = theme.primary;
        const defaultBgColor = theme.foreground;
        const activeTxtColor = theme.lightText;
        const defaultTxtColor = theme.darkText;

        const bgColorLight = (this.props.activityLevel == 'light') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };
        const txtColorLight = (this.props.activityLevel == 'light') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const bgColorModerate = (this.props.activityLevel == 'moderate') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };
        const txtColorModerate = (this.props.activityLevel == 'moderate') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const bgColorHigh = (this.props.activityLevel == 'high') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };
        const txtColorHigh = (this.props.activityLevel == 'high') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const bgColorIntense = (this.props.activityLevel == 'intense') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };
        const txtColorIntense = (this.props.activityLevel == 'intense') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const genderImage = (this.props.gender == 'male') ?
            R.images.manWeight :
            R.images.womanWeight;
        const genderImage1 = (this.props.gender == 'male') ?
            R.images.manRun :
            R.images.womanStretch;


        return (
            <View style={styles.body}>

                <ScrollView style={styles.selectView}>
                    <View style={styles.imageView}>
                        <Image source={genderImage} style={styles.genderImage} />
                        <Image source={genderImage1} style={styles.genderImage1} />
                    </View>

                    <CardTouch
                        title='Sedentário'
                        description='Sentado na maior parte do tempo (ex.: trabalho em escritório)'
                        onPress={() => { this.selectLevel('light') }}
                        style={bgColorLight}
                        descriptionStyle={txtColorLight}
                        titleStyle={txtColorLight}
                    />
                    <CardTouch
                        title='Moderada'
                        description='Em pé na maior parte do tempo (ex.: professor)'
                        onPress={() => { this.selectLevel('moderate') }}
                        style={bgColorModerate}
                        descriptionStyle={txtColorModerate}
                        titleStyle={txtColorModerate}
                    />
                    <CardTouch
                        title='Elevada'
                        description='Andando na maior parte do tempo (ex.: vendedor)'
                        onPress={() => { this.selectLevel('high') }}
                        style={bgColorHigh}
                        descriptionStyle={txtColorHigh}
                        titleStyle={txtColorHigh}
                    />
                    <CardTouch
                        title='Intensa'
                        description='Trabalho que exige muita atividade (ex.: pedreiro)'
                        onPress={() => { this.selectLevel('intense') }}
                        style={bgColorIntense}
                        descriptionStyle={txtColorIntense}
                        titleStyle={txtColorIntense}
                    />
                </ScrollView>

                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    onPressForward={this.goNextScreen}
                />
            </View>
        );
    }
}

ActivityLevel.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        birthday: state.user.birthday,
        gender: state.user.gender,

        weightValue: state.user.weightValue,
        weightUnit: state.user.weightUnit,

        heightValue: state.user.heightValue,
        heightUnit: state.user.heightUnit,

        activityLevel: state.user.activityLevel
    };
};

const ActivityLevelConnect = connect(mapStateToProps, { changeActivityLevel })(ActivityLevel);
export default ActivityLevelConnect;