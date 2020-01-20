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
export default class Signup extends Component {
  goBack() {
    Actions.pop();
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo type="Signup" />
          <Form type="Signup" />
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={this.goBack}>
              <Text style={styles.signupButton}> Sign in</Text>
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
