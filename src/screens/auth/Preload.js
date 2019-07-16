import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";
import { connect } from 'react-redux';
import { checkLogin } from 'actions/AuthActions';

import { NavigationActions, StackActions } from 'react-navigation';
import R from 'res/R';

export class Preload extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            bgImage: null,
        };
        // deixar esse stack acessivel nas camadas mais internas do App
        window.globalNavigator = this.props.navigation;

        this.directPages = this.directPages.bind(this);
        this.props.checkLogin();
    }
    componentDidMount() {
        let items = R.images.login.preloadArray;
        this.state.randomBgImage = items[Math.floor(Math.random() * items.length)];
        this.setState(this.state);

        this.directPages();
    }

    componentDidUpdate() {
        this.directPages();
    }


    directPages() {
        switch (this.props.status) {
            case 'loggedIn':
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'HomeTab' })
                    ]
                }))
                break;
            case 'loggedOut':
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' })
                    ]
                }))
                break;
        }
    }

    render() {
        return (
            <ImageBackground source={this.state.randomBgImage} style={styles.bgImage}>
                <StatusBar backgroundColor="rgba(0,0,0,.35)" barStyle="light-content" translucent={true} />
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>Diet App </Text>
                    </View>
                </View>

            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    bgImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    titleView: {

    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
    },

});

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
    };
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);
export default PreloadConnect;