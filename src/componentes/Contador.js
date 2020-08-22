import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {
    //Estrutura de classes e estado
    //O this é muito importante!

    state = {
        numero: 0
    }
    
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                {/*Possibilita outros tipos de toques e cliques*/}
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

//Outra forma:

// maisUm() {
//     this.setState({ numero: this.state.numero + 1 })
// }

//Nisso, no evento:

// onPress={() => this.maisUm}

//A arrow function é definida no proprio evento, e não na função