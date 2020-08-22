import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

/*export default function(props) {
    return <Text>{props.texto}</Text>
}*/

//props significa propriedade, no caso do componente. props.texto vai interpolar o texto do app.js.

//Exemplo com função arrow, identico ao acima mas é simplificado. Pode-se referenciar mais componentes com uma <View> ou até com um vetor "[conteudo,conteudo]".

export default props => <Text style={[Padrao.ex]}>Arrow: {props.texto}</Text>

//Arrow possui um return implícito
//[Padrao.ex] é um vetor, o que permite usar vários estilos para o mesmo componente com ,