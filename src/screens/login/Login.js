import React from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import firebase from "library/networking/FirebaseConnection";
import R from 'res/R'
// TODO Colocar os textinput animados
// TODO colocar botao de ver senha
// TODO no textinput de senha, deixar vermelho em volta quando o numero de caracteres forem menor que 6
export default class Login extends React.Component {

    static navigationOptions = {
        title: 'Login',
        header: null,
        
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

                    this.props.navigation.navigate('InicioNavigator');
                }
            });
            // Logando o usuario
            firebase.auth().signInWithEmailAndPassword(
                this.state.emailInput,
                this.state.senhaInput
            ).catch((error) => {
                alert(error.code);
            });
        } else {
            if (this.state.emailInput == '') {
                alert('Digite o seu email')
            } else if (this.state.senhaInput == '') {
                alert('Digite a sua senha')

            }
        }
    }

    render() {
        return (<ImageBackground source={R.images.login.bgCadastro} style={styles.imageBg}>

            <View style={styles.body}>

                <Text style={styles.labelTxt}>Email</Text>
                <TextInput
                    style={[styles.input, styles.inputEmail]}
                    autoFocus={true}
                    blurOnSubmit={false}
                    placeholder='seu-email@email.com'
                    returnKeyType='next'
                    keyboardType='email-address'
                    onChangeText={(emailInput) => { this.setState({ emailInput }); }}
                    onSubmitEditing={() => this.senhaInput.focus()}
                />
                <Text style={styles.labelTxt}>Senha</Text>
                <TextInput
                    ref={(input => (this.senhaInput = input))}
                    style={[styles.input, styles.inputSenha]}
                    secureTextEntry={true}
                    maxLength={20}
                    placeholder='Digite uma senha'
                    returnKeyLabel='testes'
                    onChangeText={(senhaInput) => { this.setState({ senhaInput }); }}
                    onSubmitEditing={() => this.entrar()}
                />
                <TouchableOpacity
                    style={styles.buttonCadastro}
                    onPress={this.entrar}

                >
                    <Text style={styles.buttonTxt}>Login</Text>
                </TouchableOpacity>
                {/* <Button title="Cadastrar" onPress={this.entrar} /> */}
                <View style={styles.loginView}>
                    <Text style={styles.loginTxt}
                        onPress={() => this.props.navigation.navigate('Cadastro')}
                    >Ainda não tem uma conta?</Text>
                    <Text style={[styles.loginTxt, styles.loginWordTxt]}
                        onPress={() => this.props.navigation.navigate('Cadastro')}
                    >Cadastrar</Text>

                </View>
            </View>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imageBg: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    body: {
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 5,
    },
    input: {
        height: 50,
        marginBottom: 10,
        padding: 5,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255,255,255,.80)',
        color: '#196A65',
        fontSize: 17,

    },
    inputEmail: {
        borderTopLeftRadius: 15,
    },
    inputSenha: {

    },
    labelTxt: {
        color: 'white',
        fontSize: 22,
    },
    buttonCadastro: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#196A65',
        borderBottomRightRadius: 15,

    },
    buttonTxt: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'

    },
    loginView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginTxt: {
        color: 'white',
        fontSize: 16,
    },
    loginWordTxt: {
        marginLeft: 5,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

});