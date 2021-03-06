import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {auth} from '../configs/firebase';
import {Tab, Tabs, TabHeading, Container, Icon} from 'native-base';
import Contact from './Contact';
import Messages from './Messages';
import Camera from './Camera';
import {header} from '../components/Header';

export default class Main extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = auth();
    this.setState({currentUser});
  }
  render() {
    return (
      <Container>
        {header('Chat App', 0)}
        <Tabs initialPage={1}>
          <Tab
            heading={
              <TabHeading>
                <Icon name="map" />
                <Text style={styles.buttonTexts}>Map</Text>
              </TabHeading>
            }>
            <Camera />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="chatboxes" />
                <Text style={styles.buttonTexts}>Messages</Text>
              </TabHeading>
            }>
            <Messages />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="paper" />
                <Text style={styles.buttonTexts}>Contact</Text>
              </TabHeading>
            }>
            <Contact />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    backgroundColor: '#1c353a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonTexts: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
