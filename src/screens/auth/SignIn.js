import React from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { changeEmail, changePassword, signInAction, signOutAction } from 'actions/AuthActions';
import R from 'res/R'
// TODO Colocar os textinput animados
// TODO colocar botao de ver senha
// TODO no textinput de senha, deixar vermelho em volta quando o numero de caracteres forem menor que 6
export class SignIn extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
        };
        this.signIn = this.signIn.bind(this);
        signOutAction();
    }

    componentDidUpdate() {
        if (this.props.status == 'loggedIn') {
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'HomeTab' })
                ]
            }))
        }
    }
    signIn() {
        this.props.signInAction(
            this.props.email,
            this.props.password
        )
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
                    value={this.props.email}
                    onChangeText={this.props.changeEmail}
                    onSubmitEditing={() => this.senhaInput.focus()}
                />
                <Text style={styles.labelTxt}>Senha</Text>
                <TextInput
                    ref={(input => (this.senhaInput = input))}
                    style={[styles.input, styles.inputSenha]}
                    secureTextEntry={true}
                    maxLength={20}
                    placeholder='Sua senha super secreta'
                    returnKeyLabel='testes'
                    value={this.props.password}
                    onChangeText={this.props.changePassword}
                    onSubmitEditing={() => this.signIn()}
                />
                <TouchableOpacity
                    style={styles.buttonCadastro}
                    onPress={this.signIn}

                >
                    <Text style={styles.buttonTxt}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.loginView}>
                    <Text style={styles.loginTxt}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >Ainda não tem uma conta?</Text>
                    <Text style={[styles.loginTxt, styles.loginWordTxt]}
                        onPress={() => this.props.navigation.navigate('SignUp')}
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

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        uid: state.auth.uid,
        email: state.auth.email,
        password: state.auth.password,
    };
};

const SignInConnect = connect(mapStateToProps, { changeEmail, changePassword, signInAction, signOutAction })(SignIn);
export default SignInConnect;
