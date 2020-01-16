import React, { Component } from 'react';
import {
StyleSheet,
View,
StatusBar
} from 'react-native';
import Routes from './src/routes/Routes';
import {initApi} from './src/configs/api'

export default class App extends Component {
  componentWillMount(){
    initApi();
  }
  render() {
    return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#1c313a"
        barStyle="light-content"
      />
      <Routes/>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});