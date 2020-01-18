import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {validationService} from '../validation/Service';
import {register, login, setData} from '../configs/firebase';

export default class Logo extends Component {
  state = {
    inputs: {
      email: {
        type: 'email',
        value: '',
      },
      password: {
        type: 'password',
        value: '',
      },
      name: {
        type: 'name',
        value: '',
      },
    },
    errorMessage: null,
  };
  onInputChange = validationService.onInputChange.bind(this);
  getFormValidation = validationService.getFormValidation.bind(this);
  handleSignUp = () => {
    register(this.state.inputs.email.value, this.state.inputs.password.value)
      .then(result => {
        const data = {
          name: this.state.inputs.name.value || result.user.email.split('@')[0],
          email: result.user.email,
        };
        setData('users/' + result.user.uid, data);
      })
      .catch(error => {
        this.setState({errorMessage: error.message});
        Alert.alert('Failed', this.state.errorMessage, [
          {
            text: 'Ok',
          },
        ]);
      });
  };
  handleLogin = () => {
    const {email, password} = this.state.inputs;
    login(email.value, password.value)
      .then(result => console.log(result))
      .catch(error => {
        this.setState({errorMessage: error.message});
        Alert.alert('Failed', this.state.errorMessage, [
          {
            text: 'Ok',
          },
        ]);
      });
  };
  renderError(id) {
    const {inputs} = this.state;

    if (inputs[id].errorLabel) {
      return <Text>{inputs[id].errorLabel}</Text>;
    }
    return null;
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.type === 'Login' ? null : (
          <>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Name"
              placeholderTextColor="#000000"
              selectionColor="#000"
              onChangeText={value => {
                this.onInputChange({id: 'name', value});
              }}
            />
            <Text style={styles.erorText}>{this.renderError('name')}</Text>
          </>
        )}
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#000000"
          selectionColor="#000"
          keyboardType="email-address"
          onChangeText={value => {
            this.onInputChange({id: 'email', value});
          }}
        />
        <Text style={styles.erorText}>{this.renderError('email')}</Text>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#000000"
          onChangeText={value => {
            this.onInputChange({id: 'password', value});
          }}
        />
        <Text style={styles.erorText}>{this.renderError('password')}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={
            this.props.type === 'Login' ? this.handleLogin : this.handleSignUp
          }>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(0, 143,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#1c353a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  erorText: {
    color: 'red',
  },
});
