import React from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from './style';


export default props =>
{


    return
    (
       <View>
        <Text style={Estilo.grande}>{props.a}</Text>
        <Text style={Estilo.grande}>{props.b}</Text>
       </View>
    );
}