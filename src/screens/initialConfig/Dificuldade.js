import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import ForwardBackBar from 'library/components/ForwardBackBar';

import R from 'res/R'

export default class Dificuldade extends React.Component {
    static navigationOptions = {
        title: 'Dificuldade',
        header: null
    }


    constructor(props) {
        super(props);
        this.state = {
            objective: this.props.navigation.getParam('objective'),
            calcutedKcal: 0,
            targetKcal: 0,
            difficultyLevel: 'easy',
            
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.selectLevel = this.selectLevel.bind(this);
    }
    componentDidMount() {
    }

    
    goNextScreen() {
        this.props.navigation.navigate('Distribuicao', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.props.navigation.getParam('calcutedKcal'),
            objective: this.props.navigation.getParam('objective'),
            difficultyLevel: this.state.difficultyLevel,
            targetKcal: this.state.targetKcal,
        })
    }

    selectLevel(level) {
        this.state.difficultyLevel = level;
        if (this.state.objective == 'emagrecer') {
            if (level == 'easy') {
                this.state.targetKcal = this.props.navigation.getParam('calcutedKcal') - 300;
            } else if (level == 'medium') {
                this.state.targetKcal = this.props.navigation.getParam('calcutedKcal') - 500;
            } else if (level == 'hard') {
                this.state.targetKcal = this.props.navigation.getParam('calcutedKcal') - 800;
            }
        } else if (this.state.objective == 'ganharMassa') {
            if (level == 'easy') {
                this.state.targetKcal = this.props.navigation.getParam('calcutedKcal') + 300;
            } else if (level == 'medium') {
                this.state.targetKcal = this.props.navigation.getParam('calcutedKcal') + 500;
            } else if (level == 'hard') {
                this.state.targetKcal = this.props.navigation.getParam('calcutedKcal') + 800;
            }
        } else if (this.state.objective == 'manterPeso') {
            this.state.targetKcal = this.props.navigation.getParam('calcutedKcal');
        }
        this.setState(this.state);
        this.goNextScreen();
    }
    render() {
        const activeBgColor = '#196A65';
        const defaultBgColor = '#eee';
        const activeTxtColor = '#fff';
        const defaultTxtColor = 'black';

        const bgColorLeve = (this.state.difficultyLevel == 'easy') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorLeve = (this.state.difficultyLevel == 'easy') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorModerada = (this.state.difficultyLevel == 'medium') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorModerada = (this.state.difficultyLevel == 'medium') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorElevada = (this.state.difficultyLevel == 'hard') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorElevada = (this.state.difficultyLevel == 'hard') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };




        const genderImage = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manWeight :
            R.images.womanWeight;
        const genderImage1 = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manRun :
            R.images.womanStretch;

        const stringsData = () => {
            if (this.props.navigation.getParam('objective') == 'emagrecer') {
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
            } else if (this.props.navigation.getParam('objective') == 'ganharMassa') {
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

                    <TouchableOpacity style={[styles.selectTouch, bgColorLeve]}
                        onPress={() => { this.selectLevel('easy') }}
                    >
                        <Text style={[styles.labelTitle, txtColorLeve]}>{stringsData().easy.title}</Text>
                        <Text style={[styles.labelDescription, txtColorLeve]}>
                            {stringsData().easy.description}
                        </Text>
                        <Text style={[styles.labelDescription, txtColorLeve]}>{stringsData().easy.difficulty}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorModerada]}
                        onPress={() => { this.selectLevel('medium') }}
                    >
                        <Text style={[styles.labelTitle, txtColorModerada]}>{stringsData().medium.title}</Text>
                        <Text style={[styles.labelDescription, txtColorModerada]}>
                            {stringsData().medium.description}
                        </Text>
                        <Text style={[styles.labelDescription, txtColorModerada]}>{stringsData().medium.difficulty}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorElevada]}
                        onPress={() => { this.selectLevel('hard') }}
                    >
                        <Text style={[styles.labelTitle, txtColorElevada]}>{stringsData().hard.title}</Text>
                        <Text style={[styles.labelDescription, txtColorElevada]}>
                            {stringsData().hard.description}
                        </Text>
                        <Text style={[styles.labelDescription, txtColorElevada]}>{stringsData().hard.difficulty}</Text>
                    </TouchableOpacity>


                </View>
                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    onPressForward={() => this.selectLevel(this.state.difficultyLevel)}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTxt: {
        fontSize: 23,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    selectView: {
        flex: 1,
        // backgroundColor: 'black',
    },
    selectTouch: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'gray',
        minHeight: 110,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    labelTitle: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    labelDescription: {
        fontSize: 17,
        color: 'black',
        textAlign: 'center',
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