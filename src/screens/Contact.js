import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Card from '../components/Card';
import {getData} from '../configs/api';
class Contact extends Component {
  state = {
    result: [],
  };
  componentDidMount() {
    this.unsubscribeGetContact = getData(snapshot => {
      snapshot.val()
        ? this.setState({
            result: Object.values(snapshot.val()),
          })
        : null;
    }, '/users/');
  }
  componentWillUnmount() {
    this.unsubscribeGetContact();
  }
  render() {
    const result = this.state.result;
    return (
      <View>
        {console.log(result)}
        <FlatList
          data={result}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={(item, index) => `email-${index}`}
        />
      </View>
    );
  }
}

export default Contact;
