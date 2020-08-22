import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ParImpar from './componentes/ParImpar'
import { Inverter,  MegaSena } from './componentes/Multi'
//Precisa estar entre chaves por que não foi definido como padrão no Multi.js
import Simples from './componentes/Simples' 
//Referencia o componente Simples que eu mesmo criei


//importações básicas como View e Text, Component para estrutura

//Ele precisa exportar algo para a tela, pois o index.js chama o App.js
export default class App extends Component {
	render() { //Renderiza a tela 
		return ( //Retorna um código JSX 
			<View style={styles.container}>
				{/*Pode-se usar tanto o Text que foi criado neste arquivo como o Simples que foi referenciado!*/}
				{/* <Text style={styles.f40}>App!</Text> */}
				
				<Simples texto='Flexível!'/>
				{/*texto é um atributo da propriedade props, definida na function do simples.js*/}

				<ParImpar numero={32} />
				{/*numero vem do ParImpar.js definido na arrow function*/}

				<Inverter texto='React Nativo!' />
				<MegaSena numeros={6} />
			</View>
		)
	}
}

//Permite estilo, tem que adicionar no import!
const styles = StyleSheet.create({ //.create é um objeto
	container: { //defino um flexbox no container
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	/*f40: { //define tamanho e cor da fonte
		 fontSize: 40,
		 color: 'purple',
	}*/
})
