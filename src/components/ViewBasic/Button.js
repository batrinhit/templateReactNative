import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { COLOR_BG_BLUE } from '~/AppValues';

class Button extends Component {
  render() {
    const {title, light, style} = this.props;
    if (light)
      return (
        <TouchableOpacity {...this.props} style={[styles.container, style]}>
          <Text style={styles.text2}>{title}</Text>
        </TouchableOpacity>
      );
    return (
      <TouchableOpacity {...this.props} style={[styles.button, style]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 59,
    backgroundColor: COLOR_BG_BLUE,
    borderRadius: 15,
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    fontSize: 17,
    fontWeight:"bold",
    textTransform:"uppercase"
  },
  container: {
    backgroundColor: 'rgba(247,247,247,220)',
    borderRadius: 5,
    borderColor: 'skyblue',
    borderWidth: 1,
    height: 59,
    justifyContent: 'center',
  },
  text2: {
    fontSize: 20,
    color: 'skyblue',
    alignSelf: 'center',
  },
});

export default Button;
