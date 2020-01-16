import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Conatact from '../screens/Contact';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import Chat from '../components/Chat';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: 'Engineer',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: {backgroundColor: '#67baf6'},
      },
    },
    Conatact: {
      screen: Conatact,
      navigationOptions: {
        tabBarLabel: 'Company',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'yellow',
      showIcon: true,
      showLabel: true,
    },
  },
);
export default createAppContainer(AppNavigator);
