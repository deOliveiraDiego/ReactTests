import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Selecter, Buttons } from '../components'

class LaborSituation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}> Qual a sua situação atual de trabalho?</Text>
          <Selecter />
          <Buttons />
        </View>
      </View>
    )
  }
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    padding: 50,
    color: 'black'
  },
}

export { LaborSituation };