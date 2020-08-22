import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {
    state = {
        texto: '' //Por conta no espaço vazio aqui, no qual, vai deixar vazio a cada tecla digitada. Para permitir a digitação, é só trocar de '' para null. Sendo assim, com null eu tenho um componente não controlado.
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto} />
            </View>
        )
    }
}

//O onChangeText faz com que o valor da propriedade texto seja alterada a cada mudança no valor do input. Caso ela não existisse, não seria possivel digitar no input. Sendo assim, eu tenho um componente controlavél