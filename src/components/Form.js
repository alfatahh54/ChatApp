import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
TextInput,
TouchableOpacity
} from 'react-native';
import firebase from '../configs/firebase'
import {Actions} from 'react-native-router-flux';

export default class Logo extends Component {
    state = { email: '', password: '', errorMessage: null }
    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(result => console.log(result))
            .catch(error => {
                this.setState({ errorMessage: error.message })
                console.log(this.state.errorMessage);
            })
    }
    handleLogin = () => {
        const { email, password } = this.state
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(result => console.log(result))
          .catch(error => this.setState({ errorMessage: error.message }))
    }
    render(){
        return(
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            placeholderTextColor = "#000000"
            selectionColor="#000"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            />
            <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor = "#000000"
            onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity style={styles.button} onPress={this.props.type === 'Login' ? this.handleLogin : this.handleSignUp}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    inputBox: {
        width:300,
        backgroundColor:'rgba(0, 143,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#000000',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#1c353a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});
