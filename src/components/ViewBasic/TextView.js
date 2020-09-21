import React, {Component} from 'react';
import {Text, Platform} from 'react-native';
import {
  COLOR_BG_BLACK,
  SIZE_H3,
  SIZE_H1,
  SIZE_H2,
  SIZE_H4,
  SIZE_H5,
  SIZE_H6,
  SIZE_H7,
} from '~/AppValues';
class TextView extends Component {
  getFontSize() {
    const {h1, h2, h3, h4, h5, h6, h7, h8} = this.props;
    if (h1) {
      return SIZE_H1;
    }
    if (h2) {
      return SIZE_H2;
    }
    if (h3) {
      return SIZE_H3;
    }
    if (h4) {
      return SIZE_H4;
    }
    if (h5) {
      return SIZE_H5;
    }
    if (h6) {
      return SIZE_H6;
    }
    if (h7) {
      return SIZE_H7;
    }
    if (h8) {
      return SIZE_H8;
    }
    return SIZE_H5;
  }
  render() {
    const {children, style} = this.props;

    let fontSize = this.getFontSize();
    if (Platform.OS === 'ios') {
      fontSize = fontSize + 2;
    }
    if (style && Array.isArray(style)) {
      for (const element of style) {
        if (element.fontSize) {
          fontSize = element.fontSize;
        }
      }
    } else if (style && style.fontSize) {
      fontSize = style.fontSize;
    }

    return (
      <Text
        {...this.props}
        ellipsizeMode="tail"
        style={[
          {
            color: COLOR_BG_BLACK,
            letterSpacing: 0.2,
          },
          style,
          {fontSize: fontSize},
        ]}>
        {children || ''}
      </Text>
    );
  }
}

export default TextView;
