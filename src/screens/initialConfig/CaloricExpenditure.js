import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { changeCalorieIntake } from 'actions/DietPlanActions';
import { ThemeContext } from 'res/themeContext';
import R from 'res/R'
import ForwardBackBar from 'components/ForwardBackBar';
import CardTouch from 'components/CardTouch';
import { calculateCalories } from 'scripts/DietScripts.js'

export class CaloricExpenditure extends React.Component {

    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
        this.goNextScreen = this.goNextScreen.bind(this);
        this.goMainScreen = this.goMainScreen.bind(this);

    }
    componentDidMount() {
        let calcutedKcal = calculateCalories(
            {
                age: this.props.birthday,
                height: this.props.heightValue,
                weight: this.props.weightValue,
                gender: this.props.gender,
                activityLevel: this.props.activityLevel,
            }
        )
        this.props.changeCalorieIntake(calcutedKcal)
    }

    goNextScreen() {
        this.props.navigation.navigate('Objective')
    }
    goMainScreen() {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'HomeTab' })
            ]
        }))
    }


    render() {
        let theme = this.context;
        const styles = StyleSheet.create({
            body: {
                backgroundColor: theme.background,
                flex: 1,
                alignItems: 'center',
            },
            scrollView: {
                flex: 1,
            },
            imageView: {
                flexDirection: 'row',
                marginTop: -20,
            },
            cheersImage: {
                flex: 1,
                width: null,
                height: 170,
                resizeMode: 'contain',
                marginTop: 10,
            },
            descriptionView: {
                flex: 1,
            },
            descriptionTxt: {
                color: theme.onBackground,
                ...R.styles.basicText,
                ...R.styles.title1,
                padding: 10,
                fontSize: 25,
            },
            valueTxt: {
                color: theme.onBackground,
                ...R.styles.basicText,
                ...R.styles.extraTitle,
                padding: 10,
            },

        });

        return (
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.imageView}>
                        <Image source={R.images.womanCheers} style={styles.cheersImage} />
                    </View>

                    <View style={styles.descriptionView}>
                        <Text style={styles.descriptionTxt}>Seu gasto calórico diário é aproximadamente</Text>
                        <Text style={styles.valueTxt}>{this.props.calorieIntake}</Text>
                        <Text style={styles.descriptionTxt}>Calorias</Text>
                    </View>

                    <CardTouch
                        title='Montar Dieta'
                        description='Vamos juntos montar sua dieta de acordo com o seu objetivo.'
                        onPress={this.goNextScreen}
                        style={{ backgroundColor: theme.surface }}
                        descriptionStyle={{ color: theme.onSurface }}
                        titleStyle={{ color: theme.onSurface }}

                    />
                    <CardTouch
                        title='Ir para tela inicial'
                        description='A qualquer momento você poderá alterar sua dieta.'
                        onPress={this.goMainScreen}
                        style={{ backgroundColor: theme.surface }}
                        descriptionStyle={{ color: theme.onSurface }}
                        titleStyle={{ color: theme.onSurface }}
                    />

                </ScrollView>

                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    forwardDisabled
                    style={{ backgroundColor: theme.primary }}
                />
            </View>
        );
    }
}




CaloricExpenditure.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        birthday: state.user.birthday,
        gender: state.user.gender,
        weightValue: state.user.weightValue,
        heightValue: state.user.heightValue,
        activityLevel: state.user.activityLevel,

        calorieIntake: state.dietPlan.calorieIntake
    };
};

const CaloricExpenditureConnect = connect(mapStateToProps, { changeCalorieIntake })(CaloricExpenditure);
export default CaloricExpenditureConnect;