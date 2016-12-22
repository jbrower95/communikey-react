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
  Alert
} from 'react-native';

import HomeScene from './home'
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

export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.state = {email: "", password: "", user: null};
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.banner}>Communikey</Text>
        <TextInput style={styles.textInput} 
        placeholder="Username" 
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onChangeText={(event) => this.setState({email: event})}/>
        <TextInput style={styles.textInput} 
        placeholder="Password" 
        secureTextEntry={true}
        onChangeText={(event) => this.setState({password: event})}/>
        <Button
          onPress={() => api.doLogin(this.state.email, this.state.password).then(user => {
              this.props.navigator.push({
                name: 'Home',
                title: 'Home',
                index: 1,
                user: user
              });
          }).catch(e => Alert.alert("Error: " + e))}
          title="Login"
          color={colors.white}
        />
      </View>
    );
  }
}



