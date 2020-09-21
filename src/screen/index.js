import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RootNavigation} from '../navigations/AppNavigation';
import {
  Platform,
  KeyboardAvoidingView,
  View,
  StatusBar,
  BackHandler,
} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import {
  NavigationBack,
} from '../redux/actions/anotherActions';
import {isLoading} from '../redux/selectors';

class Screens extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener(
        'hardwareBackPress',
        this._handleHardwareBackPress,
      );
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this._handleHardwareBackPress,
      );
    }
  }

  _handleHardwareBackPress = () => {
    const {NavigationBack, nav} = this.props;
    if (nav.index === 0) {
      BackHandler.exitApp();
      return false;
    }
    NavigationBack();
    return true;
  };

  renderView() {
    const {isLoading} = this.props;
    return (
      <View style={{flex: 1}}>
        <RootNavigation />
        {isLoading && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 2,
            }}>
            <BallIndicator />
          </View>
        )}
      </View>
    );
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <StatusBar barStyle="light-content" translucent />
          {this.renderView()}
        </KeyboardAvoidingView>
      );
    }
    return <View style={{flex: 1}}>{this.renderView()}</View>;
  }
}
const mapStateToProps = (state) => ({
  nav: state.nav,
  isLoading: isLoading(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      NavigationBack,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Screens);
