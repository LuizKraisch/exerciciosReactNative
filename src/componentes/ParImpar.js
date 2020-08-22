import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

function parOuImpar(num){
    if(num % 2== 0){
        return <Text style={Padrao.ex}>Par</Text>
    } else {
        return <Text style={Padrao.ex}>Impar</Text>
    }
    //OU
    // const v = num % 2 == 0 ? 'Par' : 'Impar'
    // return <Text style={Padrao.ex}>{v}</Text>
}

//Acima é o mesmo exemplo com function, abaixo com arrow function

export default props =>
    <View>
        {parOuImpar(props.numero)}
        {
            // props.numero % 2 == 0
            // ? <Text style={Padrao.ex}>Par</Text>
            // : <Text style={Padrao.ex}>Impar</Text>
        }
    </View>

//? = Verdadeiro : = Falso/Else
//Ctrl + K + C comenta múltiplas linhas, K + U apaga os //