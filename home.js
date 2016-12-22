/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ListView,
} from 'react-native';

import {api} from './api'
import {colors} from './consts'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple,
  }, 

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  banner: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: colors.white,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    backgroundColor: colors.white,
    marginLeft: 10,
    marginRight: 10,
  }
});

export default class HomeScene extends Component {

  constructor(props) {
      super(props);
      console.log(this.state);
      var user = props.user;
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        user: this.props.user
      };
  }
  componentDidMount() {
    Alert.alert("Welcome, " + this.props.user.first_name + "!");
  }

  render() {
    return (
      <View style={styles.main}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={() => <Text>TODO: Render Venue</Text>}/>
      </View>
    );
  }
}



