import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { ImageBackground, StyleSheet, FlatList } from 'react-native';
import { getMessages, postMessage } from '../configs/api';
import Message from '../components/Message';
import Compose from '../components/Compose';
import {uid} from '../configs/firebase';

export default class Chat extends React.Component {

//   constructor(props) {
//     super(props);
//   }
//   static navigationOptions = ({ navigation }) => ({
//     title: (navigation.state.params || {}).name || 'Scv Chat!',
//   });

//   state = {
//     messages: [],
//   };

//   get user() {
//     return {
//       name: this.props.navigation.state.params.name,
//       email: this.props.navigation.state.params.email,
//       avatar: this.props.navigation.state.params.avatar,
//       _id: firebaseSvc.uid,
//     };
//   }

//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={firebaseSvc.send}
//         user={this.user}
//       />
//     );
//   }

//   componentDidMount() {
//     firebaseSvc.refOn(message =>
//       this.setState(previousState => ({
//         messages: GiftedChat.append(previousState.messages, message),
//       }))
//     );
//   }
//   componentWillUnmount() {
//     firebaseSvc.refOff();
//   }
  state = {
    messages: []
  }
  componentDidMount() {
    this.unsubscribeGetMessages = getMessages((snapshot) => {
        this.setState({
            messages: Object.values(snapshot.val())
        })
    }, uid(), this.props.data)
  }
  componentWillUnmount() {
    this.unsubscribeGetMessages();
  }
  render() {
    return (
      <ImageBackground
        style={[ styles.container, styles.backgroundImage ]}
        source={require('../images/background.png')}>
      <FlatList
        style={styles.container}
        data={this.state.messages}
        renderItem={Message}
        keyExtractor={(item, index) => (`message-${index}`)}
      />
      <Compose submit={postMessage} />
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    listItem: {
        width: '70%',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },
    incomingMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#E1FFC7'
    } 
})