import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Selecter } from '../components'
import { Actions } from 'react-native-router-flux';

class Buttons extends Component {

  onPressButton = () => {
    Actions.ViewerPageAndroid();
  }

  render() {
    return (
      <View style={{ padding: 10, alignSelf: 'center' }}>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressButton}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
            Próximo
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = {
  buttonView: {
    flex: 1,
    padding: 20,
  },
  buttonStyle: {
    padding: 10,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#009d00',
  }
}

export { Buttons }