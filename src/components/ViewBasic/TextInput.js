import React, {Component} from 'react';
import RN, {View, StyleSheet} from 'react-native';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {icon, style} = this.props;
    return (
      <View style={[styles.content, style]}>
        {icon && <EvilIconsIcon name={icon} style={styles.icon} />}
        <RN.TextInput
          placeholder="Username"
          placeholderTextColor="gray"
          {...this.props}
          style={styles.txt_input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: 59,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    borderColor: 'rgba(31,178,204,1)',
    borderWidth: 1,
  },
  icon: {
    color: 'gray',
    fontSize: 30,
    marginLeft: 20,
    alignSelf: 'center',
  },
  txt_input: {
    height: '100%',
    color: 'black',
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
  },
});

export default TextInput;
