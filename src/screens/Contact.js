import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Card from '../components/Card';
import {getData} from '../configs/api';
import {Icon, Fab, Button, Item, Input} from 'native-base';
class Contact extends Component {
  state = {
    result: [],
    active: false,
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
      <View style={{flex: 1}}>
        {console.log(result)}
        <FlatList
          data={result}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={(item, index) => `email-${index}`}
        />
        <Fab
          active={this.state.active}
          direction="left"
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={() => this.setState({active: !this.state.active})}>
          <Icon name="add" />
          <Item rounded>
            <Input placeholder="Rounded Textbox" />
          </Item>
        </Fab>
      </View>
    );
  }
}

export default Contact;
