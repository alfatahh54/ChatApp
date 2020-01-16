import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSvc from '../configs/firebaseSvk';
import {Text} from 'react-native';

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
  render() {
    return (
      <Text>ini chat loh</Text>
    );
  }
}