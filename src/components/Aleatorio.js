import React from 'react';
import {Text} from 'react-native';
import Estilo from './style';

export default props  =>
{
    const delta = props.max - props.min + 1;
    const aleatroio = parseInt(Math.random() * delta) + props.min;

    return (
        <Text style={Estilo.grande}>
            Valor: {aleatroio}
        </Text>
    );
}