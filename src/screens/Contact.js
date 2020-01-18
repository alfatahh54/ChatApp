import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {db} from '../configs/firebase';
import Card from '../components/Card';
class Contact extends Component {
  state = {
    result: [],
  };
  getUser = async () => {
    let result = [];
    await db()
      .ref('/users/')
      .once('value')
      .then(function(snapshoot) {
        snapshoot.forEach(child => {
          result.push({
            uid: child.key,
            name: child.val().name,
            email: child.val().email,
          });
        });
      });
    this.setState({
      result,
    });
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    const result = this.state.result;
    console.log();

    return (
      <View>
        <FlatList
          data={result}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={item => item.uid}
        />
      </View>
    );
  }
}

export default Contact;
