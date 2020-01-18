import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {onAuth} from '../configs/firebase';
import Logo from '../components/Logo';
export default class Loading extends React.Component {
  componentDidMount() {
    onAuth();
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
