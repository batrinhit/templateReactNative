import React, {Component} from 'react';
import RN, {View, StyleSheet} from 'react-native';
class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {icon, style} = this.props;
    return (
      <View style={[styles.content, style]}>
        <RN.TextInput
          placeholder="Username"
          placeholderTextColor="gray"
          multiline={true}
          underlineColorAndroid="transparent"
          {...this.props}
          style={styles.txt_input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: 120,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    borderColor: 'rgba(31,178,204,1)',
    borderWidth: 1,
  },
  txt_input: {
    height: '100%',
    color: 'black',
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
    textAlignVertical: 'top',
  },
});

export default TextArea;
