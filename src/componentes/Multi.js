import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export const Inverter  = props => {
    const inv = props.texto.split('').reverse().join('')
    //Split - transforma em array
    //Reverse - inverte o conteúdo
    //Join - junta os valores em um só
    return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0)
    // || 6 define o padrão de 6 números caso não seja definido uma quantidade pelo props.numeros.
    //.fill(0) preenche com 0 ao sobrar numeros.

    for (let i = 0; i < numeros.length; i++) {
        let novo = 0
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[i] = novo
    }

    numeros.sort((a, b) => a - b)
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}
    
//export precisa ter um nome, no caso é definido sempre como default, mas acima foi definido com uma const