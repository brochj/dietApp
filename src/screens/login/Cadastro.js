import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import firebase from "library/networking/FirebaseConnection";

export default class Cadastro extends React.Component {

    static navigationOptions = {
        title: 'Cadastro',
        headerStyle: {
            backgroundColor: '#ffff00'
        },
        headerTintColor: 'black'
    }

    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            senhaInput: '',
        };
        this.cadastrar = this.cadastrar.bind(this);
        firebase.auth().signOut();
    }
    cadastrar() {
        if (this.state.emailInput != '' && this.state.senhaInput != '') {

            firebase.auth().onAuthStateChanged((user) => {
                //verifica se o usurario ta logado,
                // pois qnd é feito um novo cadastros, automaticamente aquele usuario já passa a ficar logado
                // uma vez logado, podemos pegar o uid do usuario
                if (user) {
                    let uid = user.uid;
                    //adicionando valores na "tabela" do usuario
                    firebase.database().ref('users').child(uid).set({
                        saldo: 0,
                    })
                    this.props.navigation.navigate('dadosPerfil');
                }
            });
            // cadastrando o usuario
            firebase.auth().createUserWithEmailAndPassword(
                this.state.emailInput,
                this.state.senhaInput
            ).catch((error) => {
                alert(error.code);
            });
        }
    }

    render() {
        return (
            <View style={styles.body}>

                <Text>Email</Text>
                <TextInput style={styles.input}
                    keyboardType='email-address'
                    onChangeText={(emailInput) => { this.setState({ emailInput }); }}
                />
                <Text>Senha: </Text>
                <TextInput style={styles.input} secureTextEntry={true}
                    onChangeText={(senhaInput) => { this.setState({ senhaInput }); }}
                />
                <Button title="Cadastrar" onPress={this.cadastrar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 25,
        justifyContent: 'center',
        margin: 10,
    },
    input: {
        height: 40,
        backgroundColor: '#ccc',
        padding: 5,
        marginBottom: 10,

    },

});