import React from "react";
import { StyleSheet, Text, View, Image, } from "react-native";
import { connect } from 'react-redux';
import { changeObjective } from 'actions/DietPlanActions';
import { ThemeContext } from 'res/themeContext';
import ForwardBackBar from 'components/ForwardBackBar';
import CardTouch from 'components/CardTouch';
import R from 'res/R'

export class Objective extends React.Component {

    static navigationOptions = {
        title: 'Objective',
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.goNextScreen = this.goNextScreen.bind(this);
        this.selectLevel = this.selectLevel.bind(this);
        this.goToDistribuicao = this.goToDistribuicao.bind(this);
    }

    goNextScreen() {
        this.props.navigation.navigate('Difficulty')
    }

    selectLevel(level) {
        this.props.changeObjective(level);
        // this.goNextScreen();
    }

    goToDistribuicao(level) {
        this.props.changeObjective(level);
        this.props.navigation.navigate('Distribuicao')
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
                ...R.styles.title1,
                paddingVertical: 10,
                paddingHorizontal: 15,
            },
            selectView: {
                flex: 1,
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

        const bgColorLoss = (this.props.objective == 'lossWeight') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorLoss = (this.props.objective == 'lossWeight') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorGain = (this.props.objective == 'gainMuscle') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorGain = (this.props.objective == 'gainMuscle') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };


        const bgColorMantain = (this.props.objective == 'maintainWeight') ?
            { backgroundColor: activeBgColor } :
            { backgroundColor: defaultBgColor };

        const txtColorMantain = (this.props.objective == 'maintainWeight') ?
            { color: activeTxtColor } :
            { color: defaultTxtColor };

        const genderImage = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manWeight :
            R.images.womanWeight;
        const genderImage1 = (this.props.navigation.getParam('gender') == 'male') ?
            R.images.manRun :
            R.images.womanStretch;

        return (
            <View style={styles.body}>
                <View style={styles.imageView}>
                    <Image source={genderImage} style={styles.genderImage} />
                    <Image source={genderImage1} style={styles.genderImage1} />
                </View>
                <Text style={styles.titleTxt}>Qual o seu objetivo?</Text>
                <View style={styles.selectView}>

                    <CardTouch
                        title='Emagrecimento'
                        description='Peder peso de forma saudável'
                        onPress={() => { this.selectLevel('lossWeight') }}
                        style={bgColorLoss}
                        descriptionStyle={txtColorLoss}
                        titleStyle={txtColorLoss}
                    />
                    <CardTouch
                        title='Ganho de massa muscular'
                        description='Ganhar peso aumentando a massa magra.'
                        onPress={() => { this.selectLevel('gainMuscle') }}
                        style={bgColorGain}
                        descriptionStyle={txtColorGain}
                        titleStyle={txtColorGain}
                    />
                    <CardTouch
                        title='Manter o peso'
                        description='Reeducação alimentar. Manter o peso com saúde.'
                        onPress={() => { this.goToDistribuicao('maintainWeight') }}
                        style={bgColorMantain}
                        descriptionStyle={txtColorMantain}
                        titleStyle={txtColorMantain}
                    />
                </View>

                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    onPressForward={this.goNextScreen}
                    style={{ backgroundColor: theme.primary }}
                />
            </View>
        );
    }
}

Objective.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        objective: state.dietPlan.objective,
    };
};

const ObjectiveConnect = connect(mapStateToProps, { changeObjective })(Objective);
export default ObjectiveConnect;