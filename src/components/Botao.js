import React, {Fragment} from 'react';
import {View, Text, Button} from 'react-native';
import Estilo from './style';

export default props =>
{

    function executar()
    {
        console.warn("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }


    return (

        <Button title='executar' onPress={executar}>
        </Button>

    );
}