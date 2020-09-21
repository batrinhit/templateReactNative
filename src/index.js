import React from 'react';
// Libs
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// Components
import Screens from './screen';
import configureStore from './redux/store';

export const storeConfig = configureStore();
import {LogBox} from 'react-native';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    LogBox.ignoreLogs(['useNativeDriver` was not specified.']);
    LogBox.ignoreLogs(['componentWillReceiveProps has been renamed']);
  }
  

  render() {
    return (
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <Screens />
        </PersistGate>
      </Provider>
    );
  }
}
