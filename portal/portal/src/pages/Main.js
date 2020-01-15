import React, { Component } from "react";
import  {Text,View, FlatList, ScrollView} from 'react-native';
import CardNoticia from '../components/CardNoticia';
import axios from 'axios';


class Main extends Component {

    constructor(props){
        super(props);
        this.state = { listaRepublicas : [] };
    }

    UNSAFE_componentWillMount (){
    return axios.get('http://192.168.231.1:3333/main')
      .then((responseJson) => {this.setState({listaRepublicas: responseJson.data }); })
      .catch((error) =>{
        console.error('COM ERRO',error);
      });
    }


    render(){
        return(
            <ScrollView style={{flex: 1, paddingTop:20}}>
                 <FlatList
                data={this.state.listaRepublicas}
                renderItem={({item}) => <CardNoticia dados={item}></CardNoticia>}
                />
            </ScrollView>

        );
    }
}

export default Main;