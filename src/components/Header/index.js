import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR_BG_BLUE, IS_PHONE_X} from '~/AppValues';

class Headerbar extends Component {
  render() {
    const {navigation, title} = this.props;

    return (
      <View style={styles.header_bar}>
        <TouchableOpacity
          style={{paddingRight: 5}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Text style={styles.title_header_bar}>{title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header_bar: {
    backgroundColor: COLOR_BG_BLUE,
    padding: 20,
    paddingTop: IS_PHONE_X ? 40 : 20,
    alignItems: 'center',
    // borderBottomRightRadius:15,
    // borderBottomLeftRadius:15,
    flexDirection: 'row',
  },
  title_header_bar: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});
export default Headerbar;
