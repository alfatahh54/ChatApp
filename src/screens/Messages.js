import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {getMessages} from '../configs/api';
import {uid} from '../configs/firebase';
import CardMessages from '../components/CardMessages';
class Contact extends Component {
  state = {
    result: [],
  };
  componentDidMount() {
    this.unsubscribeGetMessages = getMessages(
      snapshot => {
        snapshot.val()
          ? this.setState({
              result: Object.values(snapshot.val()),
            })
          : null;
      },
      uid(),
      '',
    );
  }
  componentWillUnmount() {
    this.unsubscribeGetMessages();
  }
  render() {
    const result = this.state.result;
    return (
      <View>
        <FlatList
          data={result.sort(function(a, b) {
            Object.entries(a)[Object.entries(a).length - 1][1].date -
              Object.entries(b)[Object.entries(b).length - 1][1].date;
          })}
          renderItem={({item}) => <CardMessages item={item} />}
          keyExtractor={(item, index) => `key-${index}`}
        />
      </View>
    );
  }
}

export default Contact;
