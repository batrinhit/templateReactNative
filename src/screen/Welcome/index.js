import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {COLOR_BG_APP} from '~/AppValues';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            borderColor: COLOR_BG_APP,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text>1232</Text>
        </View>
      </View>
    );
  }
}

export default connect(null, {})(Welcome);
