import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { changeDifficulty, changeCalorieIntakeGoal } from 'actions/DietPlanActions';
import { ThemeContext } from 'res/themeContext';
import ForwardBackBar from 'library/components/ForwardBackBar';
import CardTouch from 'components/CardTouch';

import R from 'res/R';

export class Difficulty extends React.Component {
    static navigationOptions = {
        title: 'Dificuldade',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.selectedLevel = this.selectedLevel.bind(this);
    }

    goNextScreen() {
        this.props.navigation.navigate('MealsCalories');
    }

    selectedLevel(level) {
        this.props.changeDifficulty(level);
        this.goNextScreen();
    }

    render() {
        let theme = this.context;

        const styles = StyleSheet.create({
            body: {
                backgroundColor: theme.background,
                flex: 1,
                paddingTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
            },
            titleTxt: {
                color: theme.onBackground,
                ...R.styles.basicText,
                ...R.styles.title2,
                paddingVertical: 10,
                paddingHorizontal: 15,
            },
            selectView: {
                flex: 1,
            },
            labelDescription: {
                color: theme.onSurface,
                ...R.styles.basicText,
                ...R.styles.callout,
                marginTop: 10,
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
        const defaultBgColor = theme.surface;
        const activeTxtColor = theme.onPrimary;
        const defaultTxtColor = theme.onSurface;

        const bgColorEasy = (this.props.difficulty == 'easy') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorEasy = (this.props.difficulty == 'easy') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorMedium = (this.props.difficulty == 'medium') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorMedium = (this.props.difficulty == 'medium') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorHard = (this.props.difficulty == 'hard') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorHard = (this.props.difficulty == 'hard') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const genderImage = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manWeight :
            R.images.womanWeight;
        const genderImage1 = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manRun :
            R.images.womanStretch;

        const stringsData = () => {
            if (this.props.objective == 'lossWeight') {
                return ({
                    easy: {
                        title: 'Diminuir 300 kcal por dia',
                        description: 'Esse valor irá permitir que você perca de 0,5 a 0,8 kg por semana de maneira saudável e sustentável.',
                        difficulty: 'Dificuldade: fácil',
                    },
                    medium: {
                        title: 'Diminuir 500 kcal por dia',
                        description: 'Esse valor irá permitir que você perca de 0,8 a 1,2 kg por semana.',
                        difficulty: 'Dificuldade:  Médio',
                    },
                    hard: {
                        title: 'Diminuir 800 kcal por dia',
                        description: 'Esse valor irá permitir que você perca de 1,2 a 1,5 kg por semana.',
                        difficulty: 'Dificuldade:  Difícil',
                    }
                });
            } else if (this.props.objective == 'gainMuscle') {
                return ({
                    easy: {
                        title: 'Aumentar 300 kcal por dia',
                        description: 'Esse valor irá permitir que você ganhe de 0,5 a 0,8 kg por semana de maneira saudável e sustentável.',
                        difficulty: 'Dificuldade: fácil',
                    },
                    medium: {
                        title: 'Aumentar 500 kcal por dia',
                        description: 'Esse valor irá permitir que você ganhe de 0,8 a 1,2 kg por semana.',
                        difficulty: 'Dificuldade:  Médio',
                    },
                    hard: {
                        title: 'Aumentar 800 kcal por dia',
                        description: 'Esse valor irá permitir que você ganhe de 1,2 a 1,5 kg por semana.',
                        difficulty: 'Dificuldade:  Difícil',
                    }
                });
            }
        }


        return (
            <View style={styles.body}>
                <View style={styles.imageView}>
                    <Image source={genderImage} style={styles.genderImage} />
                    <Image source={genderImage1} style={styles.genderImage1} />
                </View>
                <Text style={styles.titleTxt}>Selecione o nível de dificuldade da dieta</Text>
                <View style={styles.selectView}>

                    <CardTouch
                        title={stringsData().easy.title}
                        description={stringsData().easy.description}
                        onPress={() => { this.selectedLevel('easy') }}
                        style={bgColorEasy}
                        descriptionStyle={txtColorEasy}
                        titleStyle={txtColorEasy}
                    >
                        <Text style={[styles.labelDescription, txtColorEasy]}>{stringsData().easy.difficulty}</Text>
                    </CardTouch>

                    <CardTouch
                        title={stringsData().medium.title}
                        description={stringsData().medium.description}
                        onPress={() => { this.selectedLevel('medium') }}
                        style={bgColorMedium}
                        descriptionStyle={txtColorMedium}
                        titleStyle={txtColorMedium}
                    >
                        <Text style={[styles.labelDescription, txtColorMedium]}>{stringsData().medium.difficulty}</Text>
                    </CardTouch>

                    <CardTouch
                        title={stringsData().hard.title}
                        description={stringsData().hard.description}
                        onPress={() => { this.selectedLevel('hard') }}
                        style={bgColorHard}
                        descriptionStyle={txtColorHard}
                        titleStyle={txtColorHard}
                    >
                        <Text style={[styles.labelDescription, txtColorHard]}>{stringsData().hard.difficulty}</Text>
                    </CardTouch>

                </View>
                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    onPressForward={() => this.selectedLevel(this.props.difficulty)}
                    style={{ backgroundColor: theme.primary }}
                />
            </View>
        );

    }
}

Difficulty.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        objective: state.dietPlan.objective,
        difficulty: state.dietPlan.difficulty,
        calorieIntake: state.dietPlan.calorieIntake,
        calorieIntakeGoal: state.dietPlan.calorieIntakeGoal
    };
};

const DifficultyConnect = connect(mapStateToProps, { changeDifficulty, changeCalorieIntakeGoal })(Difficulty);
export default DifficultyConnect;