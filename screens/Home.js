import React, {Componente} from 'react';
import {Text, View} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{
            flex: 1,
             justifyContent: 'center',
             alignItens: 'center',
             backgroundColor: 'blue'}}>
            <Text>Tela Inicial</Text>
            </View>
        )
    }
}