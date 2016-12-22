/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
} from 'react-native';

import LoginScene from "./login"
import HomeScene from "./home"

import {api} from './api'
import {colors} from './consts'

const styles = StyleSheet.create({});

export default class Main extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Login', index: 0 }}
        renderScene={this._renderScene}
      />
    );
  } 

  _renderScene(route, navigator) {
   if(route.title == 'Login') {
     return <LoginScene navigator={navigator} />
   }
   if(route.title == 'Home') {
     return <HomeScene navigator={navigator} user={route.user} />
   }
    }
}



