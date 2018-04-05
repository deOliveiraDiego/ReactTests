
import React, { Component } from 'react';
import { Picker, View } from 'react-native';


export default class Selecter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'Selecionar',
    }
  }
  render() {
    return (

      <View style={styles.pickerStyles}>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
          <Picker.Item label="Carteira Assinada" value="carteira assinada" />
          <Picker.Item label="Desempregado" value="desempregado" />
          <Picker.Item label="Autônomo" value="autônomo" />
        </Picker>
      </View>
    )
  }
}

const styles = {
  pickerStyles: {
    justifyContent: 'center',
    padding: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0f0f0f',
    width: 400
  },
}

export { Selecter }