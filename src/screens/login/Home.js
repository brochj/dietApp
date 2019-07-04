import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from "react-native";
import firebase from "library/networking/FirebaseConnection";

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            saldoGeral: null,
        };
        this.cadastrar = this.cadastrar.bind(this);
        this.login = this.login.bind(this);

        // Somando todos os saldos de todas as contas
        let users = firebase.database().ref('users');
        users.on('value', (snapshot) => {
            let s = this.state;
            s.saldoGeral = 0,
            snapshot.forEach((childItem) => {
                s.saldoGeral += childItem.val().saldo;
            });
            this.setState(s);
        });
    }

    cadastrar() {
        this.props.navigation.navigate('Cadastro');
    }

    login() {
        this.props.navigation.navigate('Login');

    }

    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.title}>Fluxo de Caixa v1.0</Text>
                    <View style={styles.buttonArea}>
                        <TouchableHighlight
                            underlayColor='#ccc'
                            style={styles.button}
                            onPress={this.cadastrar}
                        >
                            <Text style={styles.buttonTxt}>Cadastrar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor='#ccc'
                            style={styles.button}
                            onPress={this.login}
                        >
                            <Text style={styles.buttonTxt}>Login</Text>

                        </TouchableHighlight>
                        <View style={styles.numerosArea}>
                            <Text style={styles.txtName}>No momento administramos </Text>
                            <Text style={styles.txtName}>R$ {this.state.saldoGeral}</Text>
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: null,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
    buttonArea: {
        marginTop: 30,
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#bfb300',
        margin: 10,
        height: 40,
        width: 200,
    },
    buttonTxt: {
        color: '#fff',
        textAlign: 'center',

    },
    numerosArea: {
        height: 80,
        alignItems: 'center',

    },
});