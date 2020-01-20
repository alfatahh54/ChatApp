import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  signup() {
    Actions.signup();
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo type="Login" />
          <Form type="Login" />
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Dont have an account yet?</Text>
            <TouchableOpacity onPress={this.signup}>
              <Text style={styles.signupButton}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8080',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
});
