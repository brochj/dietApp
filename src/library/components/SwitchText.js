import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { R } from "res/R";

export class SwitchText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onButton: true,
            offButton: false,
            bgOnButton: 'green',
            bgOffButton: 'red',
        };
        
        // bgOnButton = this.state.onButton ? 'green' : 'red';
    }

    setType(type) {
        let s = this.state;
        if (type == 'OFF') {
            s.onButton = false;
            s.bgOnButton = 'red';

            s.offButton = true;
            s.bgOffButton = 'green';
        } else if (type == 'ON') {
            s.onButton = true;
            s.bgOnButton = 'green';

            s.offButton = false;
            s.bgOffButton = 'red';
        }
        this.setState(s);

    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'row',
                padding: 2,
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 5,
            },
            touchOpacity: {
                justifyContent: 'center',
                padding: 10,
                borderRadius: 5,
                backgroundColor: this.state.bgOnButton
            },
            txt: {
                fontSize: 18,
            },
            switchonButton: {
                // ...R.palette.actionButton,
                // backgroundColor: backgroundColor,
            },
        
            textActiveColor: {
                color: '#2b4141'
            },
        
        });

        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.touchOpacity, { backgroundColor: this.state.bgOnButton }]}
                    onPress={() => this.setType('ON')}>
                    <Text style={[styles.txt, styles.txtButton]} >{this.props.txt1}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.touchOpacity, { backgroundColor: this.state.bgOffButton }]}
                    onPress={this.props.callback(()=>this.setType('OFF'))}>
                    <Text style={[styles.txt, styles.txtButton]} >{this.props.txt2}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

