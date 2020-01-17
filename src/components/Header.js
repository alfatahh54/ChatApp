import React from 'react'
import {signOut, auth} from '../configs/firebase'
import { Header, Left, Right, Button, Icon, Title } from 'native-base';
import Menu, { MenuItem } from 'react-native-material-menu';
import {Actions} from 'react-native-router-flux';
import {View} from 'react-native';

_menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
  logout = () => {
    signOut()
  }
export const header = type => {
    return (
    <Header>
      <Left>
        {type === 'Chat App' ? <Title>{'  ' + type}</Title> : 
       <Button transparent onPress={Actions.home}>
          <Icon name='arrow-back' />
          <Title>{'    ' + type}</Title>
        </Button>
        }
      </Left>
      <Right>
      {type==='Profile' ? null :
        <>
        <Button transparent>
          <Icon name='search' />
        </Button>
         <Menu
          ref={this.setMenuRef}
          button={<Button transparent onPress={this.showMenu}><Icon name='more' /></Button>}
          >
          <MenuItem onPress={()=>{this.hideMenu() 
            Actions.profile(auth().currentUser.uid)}}>Profile</MenuItem>
          <MenuItem onPress={this.hideMenu, this.logout}>Logout</MenuItem>
        </Menu>
        </>
        }
      </Right>
    </Header>
    )
}