/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/redux/reducers';
import AppNavigation from './src/common/appNavigation';

export default class App extends React.Component {

  render(){

    const appStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
        <Provider store={appStore}>
          <View>
              <AppNavigation />            
          </View>  
        </Provider>
    )

  }

}
AppRegistry.registerComponent('app', () => App);