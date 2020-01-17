import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux';
import {auth} from '../configs/firebase'
import { Tab, Tabs, TabHeading, Container, Header, Icon } from 'native-base';
import Contact from './Contact'
import Messages from './Messages'
import Camera from './Camera'
import {header} from '../components/Header'

export default class Main extends React.Component {
    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = auth()
        this.setState({ currentUser })
    } 
    render() {
    const { currentUser } = this.state
    console.log(this.props);
    
    return (
        <Container>
        {header('Chat App')}
        <Tabs initialPage= {1}>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text style={styles.buttonTexts}>Camera</Text></TabHeading>}>
            <Camera />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="chatboxes" /><Text style={styles.buttonTexts}>Messages</Text></TabHeading>}>
            <Messages />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="paper" /><Text style={styles.buttonTexts}>Contact</Text></TabHeading>}>
            <Contact />
          </Tab>
        </Tabs>
        <TouchableOpacity onPress={this.logout}>
            <Text>
                Hi {currentUser && currentUser.email}!
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Actions.chat}>
            <Text style={styles.buttonText}>
                Go to Chat
            </Text>
        </TouchableOpacity>
        </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width:300,
    backgroundColor:'#1c353a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  buttonTexts: {
    marginLeft: 12,
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
})