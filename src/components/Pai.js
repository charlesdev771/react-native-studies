import React from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from './style';

import Filho from './Filho';
export default props =>
{
    let a = 1;
    let b = 2;

    return
    (
      <>
        <Filho a={x} b={y}/>  
        <Filho a={x + 100} b={y + 200}/>      
    
      </>
    );
}