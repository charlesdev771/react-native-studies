import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Estilo from './style';

export default props =>
{
    return (

        <View>
        <Fragment>
            <Text style={Estilo.grande}>
                Produtos
            </Text>
            <Text>{props.segundario}</Text>
            </Fragment>
        </View>

    );
}