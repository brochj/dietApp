import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaData: [
                {title: 'B', data:[
                    {key: '1', nome: 'Bonieky', idade: 90},
                    {key: '2', nome: 'Bonieky', idade: 90},
                    {key: '3', nome: 'Bonieky', idade: 90},
                    {key: '4', nome: 'Bonieky', idade: 90},
                    {key: '5', nome: 'Bonieky', idade: 90},
                    {key: '6', nome: 'Bonieky', idade: 90},
                    {key: '7', nome: 'Bonieky', idade: 90},
                ]},
                {title: 'C', data:[
                    {key: '8', nome: 'Conieky', idade: 90},
                    {key: '9', nome: 'Conieky', idade: 32},
                    {key: '10', nome: 'Conieky', idade: 35},
                    {key: '11', nome: 'Conieky', idade: 35},
                    {key: '12', nome: 'Conieky', idade: 35},
                    {key: '13', nome: 'Conieky', idade: 35},
                    {key: '14', nome: 'Conieky', idade: 35},
                ]},
                {title: 'D', data:[
                    {key: '15', nome: 'Donieky', idade: 90},
                    {key: '16', nome: 'Donieky', idade: 90},
                    {key: '17', nome: 'Donieky', idade: 90},
                    {key: '18', nome: 'Donieky', idade: 90},
                    {key: '19', nome: 'Donieky', idade: 90},
                ]},
            ]
        };
        
    }
    listSectionRender(section) {
        return(
            <Text style={styles.section}>Letra: {section.title} </Text>
        );

    }
    listRender(item) {
        return(
            <Text style={styles.item}>{item.nome} - {item.idade}</Text>
        );

    }
    
    render() {
        return (
            <View style={styles.body}>
                <SectionList sections={this.state.listaData} 
                renderItem={({item})=>this.listRender(item)}
                renderSectionHeader={({section})=>this.listSectionRender(section)}
                stickySectionHeadersEnabled={true}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 25,
        height: 300,
    },
    item:{
        fontSize: 18,
    },
    section:{
        fontSize: 20,
        backgroundColor: 'red',
        padding: 10,
    },
});