import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LaborSituation, ViewerPagerAndroid } from './components'
import { Router, Scene } from 'react-native-router-flux';


export default class App extends Component {
  render() {
    return (
      <Router>

        <Scene key="root">
          <Scene
            key="LaborSituation"
            component={LaborSituation}
            hideNavBar={true}
            initial
          />
          <Scene
            key="ViewerPageAndroid"
            component={ViewerPagerAndroid}
            hideNavBar={true}
          />
        </Scene>

      </Router>

    )
  }
};

