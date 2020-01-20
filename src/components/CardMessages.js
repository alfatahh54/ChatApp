import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Thumbnail, Left, Body, ListItem, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {db} from '../configs/firebase';

export default class Card extends Component {
  state = {
    name: '',
  };
  getUser = async () => {
    const id = Object.entries(this.props.item)[
      Object.entries(this.props.item).length - 1
    ][1].uid;
    let name = '';
    await db()
      .ref('/users/' + id)
      .once('value')
      .then(function(snapshoot) {
        name = (snapshoot.val() && snapshoot.val().name) || '';
      });
    this.setState({
      name,
    });
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    const item = Object.entries(this.props.item)[
      Object.entries(this.props.item).length - 1
    ][1];
    return (
      <ListItem
        thumbnail
        onPress={() => {
          // here we navigate and pass props the components got it
          Actions.chat(item.uid);
        }}>
        <Left>
          <Thumbnail
            square
            source={{
              uri: 'https://via.placeholder.com/210x295.png?text=No+Image',
            }}
          />
        </Left>
        <Body style={styles.body}>
          <Text style={styles.title}>{this.state.name || 'Name'}</Text>
          <Text note numberOfLines={1}>
            {item.message}
          </Text>
        </Body>
        <Right>
          <Text>
            {(new Date(item.date)
              .getHours()
              .toString()
              .split('').length === 1
              ? '0' + new Date(item.date).getHours()
              : new Date(item.date).getHours()) +
              ':' +
              (new Date(item.date)
                .getMinutes()
                .toString()
                .split('').length === 1
                ? '0' + new Date(item.date).getMinutes()
                : new Date(item.date).getMinutes())}
          </Text>
        </Right>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  body: {marginRight: 20},
  title: {fontWeight: '600', fontSize: 17, marginBottom: 5},
});
