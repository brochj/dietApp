import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    Image,
    Dimensions,
    StatusBar,
    Platform
} from "react-native";
import R from 'res/R';

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
        };
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);

    }

    signUp() {
        this.props.navigation.navigate('SignUp');
    }

    login() {
        this.props.navigation.navigate('SignIn');

    }

    render() {
        const { height, width } = Dimensions.get('window');
        const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
        return (
            <View style={styles.container} >
                <StatusBar backgroundColor="rgba(0,0,0,.35)" barStyle="light-content" translucent={true} />

                <View style={styles.bgView}>
                    <Image source={R.images.login.bg} style={[styles.bg, { width: width }]} />
                </View>
                <View style={styles.body}>

                    <ImageBackground source={R.images.login.bgCadastro} blurRadius={50} imageStyle={styles.imageStyleBg} style={styles.imageBg}>
                        <Image source={R.images.login.logo} style={styles.logo} />
                        <View style={styles.buttonArea}>
                            <TouchableHighlight
                                underlayColor='#ccc'
                                style={styles.buttonCadastro}
                                onPress={this.signUp}
                            >
                                <Text style={styles.buttonTxt}>Cadastrar</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='#ccc'
                                style={styles.buttonLogin}
                                onPress={this.login}
                            >
                                <Text style={styles.buttonTxt}>Login</Text>

                            </TouchableHighlight>
                            <Text style={styles.descriptionTxt}>Nunca foi tão fácil fazer dieta.</Text>
                        </View>
                    </ImageBackground>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        // paddingBottom: 5,
    },
    imageBg: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    imageStyleBg: {
        flex: 1,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        // borderBottomRightRadius: 45,
        // borderBottomLeftRadius: 45,
    },
    body: {
        flex: 1,
        marginTop: -100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#196A65',
        marginHorizontal: 10,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        // borderBottomLeftRadius: 45,
    },
    bgView: {
        flexDirection: 'row',
        height: 350,
    },
    bg: {
        width: null,
        height: null,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
    },
    title: {
        fontSize: 30,
    },
    buttonArea: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonCadastro: {
        justifyContent: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        height: 60,
        width: 300,
        borderTopLeftRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    },
    buttonLogin: {
        justifyContent: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        height: 60,
        width: 300,
        borderBottomRightRadius: 20,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,

    },
    buttonTxt: {
        color: '#196A65',
        textAlign: 'center',
        fontSize: 22,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 10,
        backgroundColor: '#196A65'
    },
    descriptionTxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 25,
        paddingHorizontal: 20,
        // textShadowColor: 'rgba(0, 0, 0, 0.5)',
        // textShadowOffset: { width: -2, height: 1 },
        // textShadowRadius: 2
    },
});