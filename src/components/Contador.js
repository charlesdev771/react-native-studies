import React from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from './style';


export default props =>
{

    let numero = props.inicial

    const inc = () => numero++;
    const dec = () => numero--;
    return
    (
        <View>
            <Text style={Estilo.grande}>{numero}</Text>
            <Button title='+' onPress={inc} />
            <Button title='-' onPress={dec}/>
        </View>
    );
}