import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TouchableOpacity, Animated } from "react-native";
import { connect } from 'react-redux';
import { changeGender, changeBirthday, changeWeight, changeHeight } from 'actions/UserActions';
import { roundNumber, increaseValue, decreaseValue } from "scripts/MathScripts";
import { ThemeContext } from 'res/themeContext';
import R from 'res/R';
import ForwardBackBar from 'components/ForwardBackBar';
import SliderWithButtons from 'components/SliderWithButtons';

export class UserBasicData extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            cardHeight: new Animated.Value(0),
        };
        this.weightValue = this.weightValue.bind(this);
        this.ageValue = this.ageValue.bind(this);
        this.heightValue = this.heightValue.bind(this);
        this.goNextScreen = this.goNextScreen.bind(this);

        Animated.parallel([
            Animated.timing(
                this.state.cardHeight,
                {
                    toValue: 140,
                    duration: 1000
                }
            )

        ]).start()

    }

    componentWillMount() {
        this.props.changeBirthday(20);
        this.props.changeGender('male');
        this.props.changeWeight(70, 'kg');
        this.props.changeHeight(175, 'cm');
    }

    goNextScreen() {
        this.props.navigation.navigate('ActivityLevel')
    }

    weightValue(operator) {
        if (operator == 'add') {
            let value = roundNumber(increaseValue(this.props.weightValue, 0.1), 1);
            this.props.changeWeight(value)
        } else if (operator == 'sub') {
            let value = roundNumber(decreaseValue(this.props.weightValue, 0.1), 1);
            this.props.changeWeight(value)
        }
    }

    ageValue(operator) {
        if (operator == 'add') {
            this.props.changeBirthday(increaseValue(this.props.birthday, 1))
        } else if (operator == 'sub') {
            this.props.changeBirthday(decreaseValue(this.props.birthday, 1))
        }

    }

    heightValue(operator) {
        if (operator == 'add') {
            this.props.changeHeight(increaseValue(this.props.heightValue, 1))

        } else if (operator == 'sub') {
            this.props.changeHeight(decreaseValue(this.props.heightValue, 1))
        }
    }

    render() {
        let theme = this.context;
        const styles = StyleSheet.create({
            container: {
                backgroundColor: theme.background,
                flex: 1,
            },
            scrollView: {
                flex: 1,
                paddingTop: 25,
            },
            titleTxt: {
                color: theme.onBackground,
                ...R.styles.basicText,
                ...R.styles.title1,
                paddingVertical: 10,
            },
            genderView: {
                backgroundColor: theme.surface,
                ...R.styles.card,
                ...R.styles.shadow,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 10,
                padding: 10,
            },
            maleTouchable: {
                marginLeft: 25,
            },
            genderImage: {
                borderColor: theme.primary,
                height: 120,
                width: 120,
                borderRadius: 60,
                borderWidth: 5,
            },
            inputView: {
                backgroundColor: theme.surface,
                ...R.styles.card,
                ...R.styles.shadow,
                height: 150,
                alignSelf: 'stretch',
                margin: 10,
            },
            inputRow: {
                flex: 1,
                flexDirection: 'row',
            },
            inputLabel: {
                color: theme.onSurface,
                ...R.styles.basicText,
                ...R.styles.title1,
                flex: 2,
                textAlign: 'right',
            },
            inputUnit: {
                color: theme.onSurface,
                ...R.styles.basicText,
                ...R.styles.subhead,
                flex: 1,
                textAlign: 'left',
                marginTop: 10,
                paddingLeft: 10,
            },
            inputValue: {
                color: theme.onSurface,
                ...R.styles.basicText,
                ...R.styles.title1,
            },
            valuesView: {
                height: 70,
                width: 125,
                borderRadius: 10,
                marginRight: 10,
                padding: 10,
            },
        });

        const maleOpacity = {
            opacity: (this.props.gender == 'male') ? 1 : .3
        }
        const femaleOpacity = {
            opacity: (this.props.gender == 'female') ? 1 : .3
        }

        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <StatusBar backgroundColor="rgba(0,0,0,.35)" barStyle="light-content" translucent={false} />
                <ScrollView style={styles.scrollView}>

                    <Text style={styles.titleTxt}>Perfil</Text>
                    <View style={styles.genderView}>
                        <TouchableOpacity style={styles.femaleTouchable}
                            onPress={() => this.props.changeGender('female')}
                        >
                            <Image source={R.images.womanAvatar} style={[styles.genderImage, femaleOpacity]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.maleTouchable}
                            onPress={() => this.props.changeGender('male')}
                        >
                            <Image source={R.images.manAvatar} style={[styles.genderImage, maleOpacity]} />
                        </TouchableOpacity>
                    </View>

                    <Animated.View style={[styles.inputView, { height: this.state.cardHeight }]}>
                        <View style={styles.inputRow}>
                            <Text style={styles.inputLabel}>Idade</Text>
                            <Text style={styles.inputUnit}>    </Text>
                            <View style={styles.valuesView}>
                                <Text style={styles.inputValue}>{this.props.birthday}</Text>
                            </View>

                        </View>
                        <SliderWithButtons
                            onPressSub={() => this.ageValue('sub')}
                            onPressAdd={() => this.ageValue('add')}
                            onValueChange={value => this.props.changeBirthday(value)}
                            value={parseInt(this.props.birthday)}
                            maximumValue={100}
                            minimumValue={10}
                            step={1}
                            minimumTrackTintColor={theme.primary}
                            thumbTintColor={theme.primary}
                            buttonStyle={{ backgroundColor: theme.primary }}
                            subLabelStyle={{ color: theme.onPrimary }}
                            addLabelStyle={{ color: theme.onPrimary }}
                        />

                    </Animated.View>

                    <Animated.View style={[styles.inputView, { height: this.state.cardHeight }]}>
                        <View style={styles.inputRow}>
                            <Text style={styles.inputLabel}>Altura</Text>
                            <Text style={styles.inputUnit}>(cm)</Text>
                            <View style={styles.valuesView}>

                                <Text style={styles.inputValue}>{this.props.heightValue}</Text>
                            </View>

                        </View>
                        <SliderWithButtons
                            onPressSub={() => this.heightValue('sub')}
                            onPressAdd={() => this.heightValue('add')}
                            onValueChange={value => this.props.changeHeight(value)}
                            value={this.props.heightValue}
                            maximumValue={230}
                            minimumValue={60}
                            step={1}
                            minimumTrackTintColor={theme.primary}
                            thumbTintColor={theme.primary}
                            buttonStyle={{ backgroundColor: theme.primary }}
                            subLabelStyle={{ color: theme.onPrimary }}
                            addLabelStyle={{ color: theme.onPrimary }}
                        />

                    </Animated.View>

                    <Animated.View style={[styles.inputView, { height: this.state.cardHeight }]}>
                        <View style={styles.inputRow}>
                            <Text style={styles.inputLabel}>Peso</Text>
                            <Text style={styles.inputUnit}>(kg)</Text>
                            <View style={styles.valuesView}>

                                <Text style={styles.inputValue}>{this.props.weightValue.toFixed(1)}</Text>
                            </View>

                        </View>

                        <SliderWithButtons
                            onPressSub={() => this.weightValue('sub')}
                            onPressAdd={() => this.weightValue('add')}
                            onValueChange={value => this.props.changeWeight(roundNumber(value, 1))}
                            value={this.props.weightValue}
                            maximumValue={180}
                            minimumValue={10}
                            step={1}
                            minimumTrackTintColor={theme.primary}
                            thumbTintColor={theme.primary}
                            buttonStyle={{ backgroundColor: theme.primary }}
                            subLabelStyle={{ color: theme.onPrimary }}
                            addLabelStyle={{ color: theme.onPrimary }}
                        />
                    </Animated.View>

                </ScrollView >
                <ForwardBackBar
                    onPressBack={() => this.props.navigation.goBack()}
                    onPressForward={this.goNextScreen}
                    backDisabled
                    style={{ backgroundColor: theme.primary }}
                />
            </View>
        );
    }
}


UserBasicData.contextType = ThemeContext;

const mapStateToProps = (state) => {
    return {
        birthday: state.user.birthday,
        gender: state.user.gender,

        weightValue: state.user.weightValue,
        weightUnit: state.user.weightUnit,

        heightValue: state.user.heightValue,
        heightUnit: state.user.heightUnit,

        theme: state.appConfig.theme,
    };
};

const UserBasicDataConnect = connect(mapStateToProps, { changeGender, changeBirthday, changeWeight, changeHeight })(UserBasicData);
export default UserBasicDataConnect;