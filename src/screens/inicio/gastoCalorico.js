import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import R from 'res/R'

export default class dadosPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return (
            <View style={styles.body}>
                
                <Text>React-Native Dados</Text>
                <Button title='Go to next screen' 
                onPress={()=>{this.props.navigation.navigate('objetivo')} }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

});