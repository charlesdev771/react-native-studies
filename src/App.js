import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import First from './components/Primeiro';
import MinMax from './components/MinMax';
import {Comp1, Comp2} from './components/Mult';
import Estilo from './components/style';




const App = function ()
{
    return(


        <SafeAreaView style={style.App}>
           <First />
            <Comp1 />
            <Comp2 />
            <Text style={Estilo.grande}>Teste</Text>
            <MinMax />
            <Aleatorio min={10} max={100}/>
            <Titulo principal="Cadastro de produtos"
                segundario="Camisa" />
            <Botao />
        </SafeAreaView>

    );
}

export default App;

const style = StyleSheet.create({

    App: 
    {
        backgroundColor: 'blue',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 120,
        
    },


});