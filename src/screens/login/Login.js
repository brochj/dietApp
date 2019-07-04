import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import firebase from "library/networking/FirebaseConnection";


export default class Login extends React.Component {

    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#ffff00'
        },
        headerTintColor: 'black'
    }

    constructor(props) {
        super(props);
        this.state = {
            emailInput: 'brochj@gmail.com', // limpar essas strings depois
            senhaInput: '123456',
        };
        this.entrar = this.entrar.bind(this);
        firebase.auth().signOut();
    }
    entrar() {
        if (this.state.emailInput != '' && this.state.senhaInput != '') {
            // olheiro pra saber quando deu certo o login
            firebase.auth().onAuthStateChanged((user) => {
                //verifica se o usurario ta logado,
                // pois qnd é feito um novo cadastros, automaticamente aquele usuario já passa a ficar logado
                // uma vez logado, podemos pegar o uid do usuario
                if (user) {

                    this.props.navigation.navigate('dadosPerfil');
                }
            });
            // Logando o usuario
            firebase.auth().signInWithEmailAndPassword(
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
                    value={this.state.emailInput} // RETIRA ISSO DEPOIS
                />
                <Text>Senha: </Text>
                <TextInput style={styles.input} 
                    secureTextEntry={true}
                    onChangeText={(senhaInput) => { this.setState({ senhaInput }); }}
                    value={this.state.senhaInput} // RETIRA ISSO DEPOIS
                />
                <Button title="entrar" onPress={this.entrar} />
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