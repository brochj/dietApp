import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import R from 'res/R'

export default class dificuldade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dificultyLevel: 'easy',
            dificultyData: {
                emagrecer: {
                    easy: {
                        title: '-270 até -170 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você perca de 0,5 a 0,8 kg por semana de maneira saudável e sustentável.',
                        dificulty: 'Dificuldade: fácil',
                    },
                    medium: {
                        title: '-300 até -500 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você perca de 0,8 a 1,2 kg por semana.',
                        dificulty: 'Dificuldade:  Médio',
                    },
                    hard: {
                        title: '-500 até -800 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você perca de 1,2 a 1,5 kg por semana.',
                        dificulty: 'Dificuldade:  Difícil',
                    }
                },
                ganharMassa: {
                    easy: {
                        title: '+270 até +170 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você ganhe de 0,5 a 0,8 kg por semana de maneira saudável e sustentável.',
                        dificulty: 'Dificuldade: fácil',
                    },
                    medium: {
                        title: '+300 até +500 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você ganhe de 0,8 a 1,2 kg por semana.',
                        dificulty: 'Dificuldade:  Médio',
                    },
                    hard: {
                        title: '+500 até +800 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você ganhe de 1,2 a 1,5 kg por semana.',
                        dificulty: 'Dificuldade:  Difícil',
                    }
                },
                manterPeso: {
                    easy: {
                        title: '-270 até -170 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você perca de 0,5 a 0,8 kg por semana de maneira saudável e sustentável.',
                        dificulty: 'Dificuldade: fácil',
                    },
                    medium: {
                        title: '-300 até -500 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você perca de 0,8 a 1,2 kg por semana.',
                        dificulty: 'Dificuldade:  Médio',
                    },
                    hard: {
                        title: '-500 até -800 kcal por dia',
                        description: 'Esta janela de calorias irá permitir que você perca de 1,2 a 1,5 kg por semana.',
                        dificulty: 'Dificuldade:  Difícil',
                    }
                }
            }
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.selectLevel = this.selectLevel.bind(this);
    }
    componentDidMount() {
    }

    goNextScreen() {
        this.props.navigation.navigate('teste', {
            age: this.props.navigation.getParam('age'),
            weight: this.props.navigation.getParam('weight'),
            height: this.props.navigation.getParam('height'),
            gender: this.props.navigation.getParam('gender'),
            activityLevel: this.props.navigation.getParam('activityLevel'),
            calcutedKcal: this.props.navigation.getParam('calcutedKcal'),
            objective: this.props.navigation.getParam('objective'),
            dificultyLevel: this.props.dificultyLevel,
        })
    }

    selectLevel(level) {
        this.state.dificultyLevel = level,
            this.setState(this.state);
    }
    render() {
        const activeBgColor = '#196A65';
        const defaultBgColor = '#eee';
        const activeTxtColor = '#fff';
        const defaultTxtColor = 'black';

        const bgColorLeve = (this.state.dificultyLevel == 'easy') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorLeve = (this.state.dificultyLevel == 'easy') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorModerada = (this.state.dificultyLevel == 'medium') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorModerada = (this.state.dificultyLevel == 'medium') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorElevada = (this.state.dificultyLevel == 'hard') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorElevada = (this.state.dificultyLevel == 'hard') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };




        const genderImage = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manWeight :
            R.images.womanWeight;
        const genderImage1 = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manRun :
            R.images.womanStretch;

        const opcoes = () => {
            return (
                <Text style={styles.txtName}>oi</Text>
            );

            // {false &&
            //     <Text style={styles.oi}>oi</Text>
            // }
            // true ? <Text style={styles.oi}>oi</Text> : null
        };

        const teste = 'oiiii';

        return (
            <View style={styles.body}>
                <Text style={styles.txtName}>{teste}</Text>

                <View style={styles.imageView}>
                    <Image source={genderImage} style={styles.genderImage} />
                    <Image source={genderImage1} style={styles.genderImage1} />
                </View>
                <View style={styles.selectView}>

                    <TouchableOpacity style={[styles.selectTouch, bgColorLeve]}
                        onPress={() => { this.selectLevel('easy') }}
                    >
                        <Text style={[styles.labelTitle, txtColorLeve]}>{this.state.dificultyData.emagrecer.easy.title}</Text>
                        <Text style={[styles.labelDescription, txtColorLeve]}>
                            {this.state.dificultyData.emagrecer.easy.description}
                        </Text>
                        <Text style={[styles.labelDescription, txtColorLeve]}>{this.state.dificultyData.emagrecer.easy.dificulty}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorModerada]}
                        onPress={() => { this.selectLevel('medium') }}
                    >
                        <Text style={[styles.labelTitle, txtColorModerada]}>{this.state.dificultyData.emagrecer.medium.title}</Text>
                        <Text style={[styles.labelDescription, txtColorModerada]}>
                            {this.state.dificultyData.emagrecer.medium.description}
                        </Text>
                        <Text style={[styles.labelDescription, txtColorModerada]}>{this.state.dificultyData.emagrecer.medium.dificulty}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectTouch, bgColorElevada]}
                        onPress={() => { this.selectLevel('hard') }}
                    >
                        <Text style={[styles.labelTitle, txtColorElevada]}>{this.state.dificultyData.emagrecer.hard.dificulty}</Text>
                        <Text style={[styles.labelDescription, txtColorElevada]}>
                            {this.state.dificultyData.emagrecer.hard.description}
                        </Text>
                        <Text style={[styles.labelDescription, txtColorElevada]}>{this.state.dificultyData.emagrecer.hard.dificulty}</Text>
                    </TouchableOpacity>


                </View>
                <Button title='Go to next screen'
                    onPress={this.goNextScreen}
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