import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default class extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      numerosSorteados: [],
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>{this.state.numerosSorteados.join(", ")}</Text>
        <Button
          title="Sortear"
          onPress={() => {
            this.setState({ numerosSorteados: this.sortearNumero()});
          }}
        />
      </View>
    )
  }

  sortearNumero() {
    if (this.state.numerosSorteados.length < 6) {
      let numerosSorteadosAux = this.state.numerosSorteados;
  
      let numeroSorteado = Math.round(Math.random() * 60);
  
      console.log(numeroSorteado);
      
      while (this.state.numerosSorteados.indexOf(numeroSorteado) >= 0) {
        console.log('repetido');
        numeroSorteado = Math.round(Math.random() * 60);
        console.log(numeroSorteado);
      }
  
      numerosSorteadosAux.push(numeroSorteado);
  
      return numerosSorteadosAux;
    }

    return this.state.numerosSorteados;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
