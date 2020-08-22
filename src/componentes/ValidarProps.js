import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>

ValidarProps.defaultProps = {
    label: 'Ano: ',
    ano: PropTypes.number.isRequired
    //Obrigatoriamente tem que ser number
}

export default ValidarProps