import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager'

class ViewerPagerAndroid extends Component {

  _renderDotIndicator() {
    return <PagerDotIndicator dotStyle={{ padding: 10, borderRadius: 10 }} selectedDotStyle={{ padding: 10, borderRadius: 10 }} pageCount={3} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this._renderDotIndicator()}
        >
          <View style={styles.viewStyle}>
            <Image source={require('../assets/images/ViewerPic.png')} />
          </View>
          <View style={styles.viewStyle}>
            <Image source={require('../assets/images/ViewerPic2.png')} />

          </View>
          <View style={styles.viewStyle}>
            <Image source={require('../assets/images/ViewerPic3.png')} />

          </View>
        </IndicatorViewPager>
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
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b241'
  }
}

export { ViewerPagerAndroid };