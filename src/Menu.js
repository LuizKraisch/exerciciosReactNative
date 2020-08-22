import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Simples from './componentes/Simples'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

function Flexbox() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Flex/>
      </View>
  );
}

function ListaAlunos() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ListaFlex/>
      </View>
  );
}

function TextoSync() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextoSincronizado/>
      </View>
  );
}

function Comunicacao1() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Avo nome='João' sobrenome='Silva'/>
      </View>
  );
}


function AppEvento() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Evento/>
      </View>
  );
}

function ValidarProp() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ValidarProps /*label="Teste: "*/ ano={18}/>
      </View>
  );
}

function Plataforma() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Plataformas />
      </View>
  );
}

function Contagem() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Contador />
        </View>
    );
}

function megaSena() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MegaSena numeros={8} />
        </View>
    );
}

function Inverte() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Inverter texto='React Nativo!' />
        </View>
    );
}

function numeroImparPar() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ParImpar numero={31} />
      </View>
    );
}

function Simple() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Simples texto='Flexível!' />
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Flexbox" component={Flexbox} />
      <Drawer.Screen name="Lista de Alunos (Flexbox)" component={ListaAlunos} />
      <Drawer.Screen name="Comunicação Indireta" component={TextoSync} />
      <Drawer.Screen name="Comunicação Direta" component={Comunicacao1} />
      <Drawer.Screen name="Evento Input" component={AppEvento} />
      <Drawer.Screen name="Validar Props" component={ValidarProp} />
      <Drawer.Screen name="Plataformas" component={Plataforma} />
      <Drawer.Screen name="Contador" component={Contagem} />
      <Drawer.Screen name="Mega Sena" component={megaSena} />
      <Drawer.Screen name="Inverter" component={Inverte} />
      <Drawer.Screen name="Par & Ímpar" component={numeroImparPar} />
      <Drawer.Screen name="Simples" component={Simple} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
