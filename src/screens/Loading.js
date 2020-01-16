import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from '../configs/firebase'
import {Actions} from 'react-native-router-flux';
import Logo from '../components/Logo';
export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          Actions.reset(user ? 'home' : 'login' )
        })
      }
    render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})