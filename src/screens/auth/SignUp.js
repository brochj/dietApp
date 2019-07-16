import React from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, } from "react-native";
import firebase from "networking/FirebaseConnection";
import { connect } from 'react-redux';
import { changeEmail, changePassword, changeName, signUpAction } from 'actions/AuthActions';
import R from 'res/R';
// TODO colocar botoes de cadastro com google e facebook
// TODO Colocar os textinput animados
// TODO colocar botao de ver senha
// TODO colocar uma snackbar ou um modal com um 'tick'verde indicando que o cadastro foi feito com sucesso
export class SignUp extends React.Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
        };
        // this.cadastrar = this.cadastrar.bind(this);
        this.signUp = this.signUp.bind(this);
        firebase.auth().signOut();
    }

    componentDidUpdate() {
        if (this.props.status == 'loggedIn') {
            this.props.navigation.navigate('InicioNavigator');
        }
    }

    // cadastrar() {
    //     if (this.props.email != '' && this.props.password != '') {

    //         firebase.auth().onAuthStateChanged((user) => {
    //             //verifica se o usurario ta logado,
    //             // pois qnd é feito um novo cadastros, automaticamente aquele usuario já passa a ficar logado
    //             // uma vez logado, podemos pegar o uid do usuario
    //             if (user) {
    //                 let uid = user.uid;
    //                 //adicionando valores na "tabela" do usuario
    //                 firebase.database().ref('users').child(uid).set({
    //                     saldo: 0,
    //                 })
    //                 this.props.navigation.navigate('InicioNavigator');
    //             }
    //         });
    //         // cadastrando o usuario
    //         firebase.auth().createUserWithEmailAndPassword(
    //             this.props.email,
    //             this.props.password
    //         ).catch((error) => {
    //             alert(error.code);
    //         });
    //     } else {
    //         if (this.props.email == '') {
    //             alert('Digite o seu email')
    //         } else if (this.props.password == '') {
    //             alert('Digite a sua senha')

    //         }
    //     }
    // }

    signUp() {
        this.props.signUpAction(
            this.props.email,
            this.props.password
        )
    }

    render() {
        return (
            <ImageBackground source={R.images.login.bgCadastro} style={styles.imageBg}>

                <View style={styles.body}>

                    <Text style={styles.labelTxt}>Email</Text>
                    <TextInput
                        style={[styles.input, styles.inputEmail]}
                        autoFocus={true}
                        blurOnSubmit={false}
                        placeholder='seu_email@email.com'
                        returnKeyType='next'
                        keyboardType='email-address'
                        onChangeText={this.props.changeEmail}
                        value={this.props.email}
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
                        value={this.props.password}
                        onChangeText={this.props.changePassword}
                        onSubmitEditing={() => this.signUp()}
                    />
                    <TouchableOpacity
                        style={styles.buttonSignUp}
                        onPress={() => this.signUp()}

                    >
                        <Text style={styles.buttonTxt}>Cadastrar</Text>
                    </TouchableOpacity>
                    {/* <Button title="Cadastrar" onPress={this.cadastrar} /> */}
                    <View style={styles.loginView}>
                        <Text style={styles.loginTxt}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >Já tem uma conta?</Text>
                        <Text style={[styles.loginTxt, styles.loginWordTxt]}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >Login</Text>

                    </View>
                    <Text style={styles.loginTxt}>{this.props.status}</Text>
                    <Text style={styles.loginTxt}>{this.props.uid}</Text>
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
    buttonSignUp: {
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

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        uid: state.auth.uid,
        // name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password,

    };
};

const SignUpConnect = connect(mapStateToProps, { changeEmail, changePassword, changeName, signUpAction })(SignUp);
export default SignUpConnect;