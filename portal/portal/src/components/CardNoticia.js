import React, { Component } from "react";
import  {Text,View,StyleSheet} from 'react-native';

class CardNoticia extends Component {
    render(){
        return(
                <View style={estilo.card}>
                     <Text style={estilo.titulo} >{this.props.dados.titulo}</Text>
                    <Text style={estilo.data} >{this.props.dados.valor}</Text>
                    <Text style={estilo.autor} >{this.props.dados.desc}</Text>
                </View>
        );
    }
}

const estilo = StyleSheet.create({
    titulo:{
        fontSize:30,
    },
    data:{
        fontSize:15,
    },
    autor:{
        justifyContent:'flex-end',
        fontSize:18,
    },
    card:{
        
        height:100,
        marginBottom: 5,
        backgroundColor:'gray'
    },


});



export default CardNoticia;