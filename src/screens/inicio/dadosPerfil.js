import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from "react-native";
import Slider from "react-native-slider";
import R from 'res/R'

export default class dadosPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 20,
            weight: 70,
            height: 175,

        };
        this.weightValue = this.weightValue.bind(this);
        this.ageValue = this.ageValue.bind(this);
        this.heightValue = this.heightValue.bind(this);
    }

    weightValue(mathOperator) {
        if (mathOperator = 'add') {
            this.state.weight += 0.1;
        } else if (mathOperator = 'sub') {
            this.state.weight -= 0.1;
        }
        this.setState(this.state);
    }
    ageValue(mathOperator) {
        if (mathOperator = 'add') {
            this.state.age += 1;
        } else if (mathOperator = 'sub') {
            this.state.age -= 1;
        }
        this.setState(this.state);
    }
    heightValue(mathOperator) {
        if (mathOperator = 'add') {
            this.state.height += 1;
        } else if (mathOperator = 'sub') {
            this.state.height -= 1;
        }
        this.setState(this.state);
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.genderView}>
                    <Image source={R.images.womanAvatar} style={styles.genderImage} />
                    <Image source={R.images.manAvatar} style={styles.genderImage} />
                </View>


                <View style={styles.inputView}>
                    <View style={styles.inputRow}>
                        <Text style={styles.inputLabel}>Idade</Text>
                        <Text style={styles.inputUnit}>    </Text>
                        <View style={styles.valuesView}>
                            <Text style={styles.inputValue}>{this.state.age}</Text>
                        </View>

                    </View>
                    <View style={styles.sliderRow}>
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => this.ageValue('sub')}
                        >
                            <Text style={styles.subButtonLabel}>-</Text>
                        </TouchableOpacity>
                        <Slider
                            style={styles.slider}
                            value={this.state.age}
                            onValueChange={age => this.setState({ age })}
                            maximumValue={100}
                            minimumValue={10}
                            step={1}

                        />
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => this.ageValue('add')}
                        >
                            <Text style={styles.addButtonLabel}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputView}>
                    <View style={styles.inputRow}>
                        <Text style={styles.inputLabel}>Altura</Text>
                        <Text style={styles.inputUnit}>(cm)</Text>
                        <View style={styles.valuesView}>

                            <Text style={styles.inputValue}>{this.state.height}</Text>
                        </View>

                    </View>
                    <View style={styles.sliderRow}>
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => this.heightValue('sub')}
                        >
                            <Text style={styles.subButtonLabel}>-</Text>
                        </TouchableOpacity>
                        <Slider
                            style={styles.slider}
                            value={this.state.height}
                            onValueChange={height => this.setState({ height })}
                            maximumValue={230}
                            minimumValue={60}
                            step={1}

                        />
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => this.heightValue('add')}
                        >
                            <Text style={styles.addButtonLabel}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputView}>
                    <View style={styles.inputRow}>
                        <Text style={styles.inputLabel}>Peso</Text>
                        <Text style={styles.inputUnit}>(kg)</Text>
                        <View style={styles.valuesView}>

                            <Text style={styles.inputValue}>{this.state.weight.toFixed(1)}</Text>
                        </View>

                    </View>
                    <View style={styles.sliderRow}>
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => this.weightValue('sub')}
                        >
                            <Text style={styles.subButtonLabel}>-</Text>
                        </TouchableOpacity>
                        <Slider
                            style={styles.slider}
                            value={this.state.weight}
                            onValueChange={weight => this.setState({ weight })}
                            maximumValue={180}
                            minimumValue={10}
                            step={0.1}

                        />
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => this.weightValue('add')}
                        >
                            <Text style={styles.addButtonLabel}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <Button title='Go to next screen'
                    onPress={() => { this.props.navigation.navigate('atividade') }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 25,
        alignItems: 'center',
    },
    genderView: {
        flex: 1,
        flexDirection: 'row',
    },
    genderImage: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    inputView: {
        flex: 1,
        height: 100,
        alignSelf: 'stretch',
        margin: 10,

    },
    inputRow: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: '#eee',
    },
    inputLabel: {
        flex: 2,
        textAlignVertical: 'center',
        textAlign: 'right',
        fontSize: 30,
    },
    inputUnit: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'left',
        fontSize: 15,
        marginTop: +10,
        paddingLeft: 10,
    },
    inputValue: {
        fontSize: 40,

    },
    valuesView: {
        height: 70,
        width: 125,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
        padding: 10,
    },


    sliderRow: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    slider: {
        flex: 1,
        marginHorizontal: 20,
    },
    addButton: {
        height: 40,
        width: 40,
        backgroundColor: 'green',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    subButtonLabel: {
        fontSize: 35,
        textAlignVertical: 'center',
        textAlign: 'center'

    },
    addButtonLabel: {
        fontSize: 30,
        textAlignVertical: 'center',
        textAlign: 'center'
    },


});