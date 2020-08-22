import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 8.5 },
    { id: 3, nome: 'Bia', nota: 4.8 },
    { id: 4, nome: 'Luiz', nota: 7.0 },
    { id: 5, nome: 'André', nota: 9.9 },
    { id: 6, nome: 'Jorge', nota: 8.0 },
    { id: 7, nome: 'Matheus', nota: 7.7 },
    { id: 8, nome: 'Willian', nota: 7.2 },
    { id: 9, nome: 'Leonardo', nota: 6.1 },
    { id: 10, nome: 'Luan', nota: 7.1 },
    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Ana', nota: 8.5 },
    { id: 13, nome: 'Bia', nota: 4.8 },
    { id: 14, nome: 'Luiz', nota: 7.0 },
    { id: 15, nome: 'André', nota: 9.9 },
    { id: 16, nome: 'Jorge', nota: 8.0 },
    { id: 17, nome: 'Matheus', nota: 7.7 },
    { id: 18, nome: 'Willian', nota: 7.2 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    //justifyContent: 'center', //Main Axis
    alignItems: 'center', // Cross Axis

    //Inverte direção
    flexDirection: 'row', //Troca os Axis
    justifyContent: 'space-between',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}
