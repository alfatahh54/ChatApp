import React from 'react';
import {ImageBackground, StyleSheet, FlatList} from 'react-native';
import {getMessages, postMessage} from '../configs/api';
import Message from '../components/Message';
import Compose from '../components/Compose';
import {uid, db} from '../configs/firebase';
import {header} from '../components/Header';

export default class Chat extends React.Component {
  state = {
    messages: [],
    idS: '',
    idR: '',
    name: '',
  };
  getUser = async () => {
    const id = this.props.data;
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
    const idS = uid(),
      idR = this.props.data;
    this.setState({
      idS,
      idR,
    });
    this.unsubscribeGetMessages = getMessages(
      snapshot => {
        snapshot.val()
          ? this.setState({
              messages: Object.values(snapshot.val()),
            })
          : null;
      },
      idS,
      idR,
    );
  }
  componentWillUnmount() {
    this.unsubscribeGetMessages();
  }
  render() {
    return (
      <ImageBackground
        style={[styles.container, styles.backgroundImage]}
        source={require('../images/background.png')}>
        {header(this.state.name)}
        {this.state.messages ? (
          <FlatList
            style={styles.container}
            data={this.state.messages}
            renderItem={Message}
            keyExtractor={(item, index) => `message-${index}`}
          />
        ) : null}
        <Compose
          submit={postMessage}
          idS={this.state.idS}
          idR={this.state.idR}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  listItem: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  incomingMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7',
  },
});
