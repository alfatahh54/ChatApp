import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native'
import firebase from '../configs/firebase'
import {Actions} from 'react-native-router-flux';
export default class Main extends React.Component {
    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    } 
    logout() {
        firebase.auth().signOut()
    }
    render() {
    const { currentUser } = this.state
    console.log(this.props);
    
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.logout}>
            <Text>
                Hi {currentUser && currentUser.email}!
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Actions.chat}>
            <Text style={styles.buttonText}>
                Go to Chat
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
})