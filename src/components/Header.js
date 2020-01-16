import React from 'react'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export const header = type => {
    return (
    <Header>
      <Left>
        {type === 'Chat App' ? null : 
        <Button transparent>
          <Icon name='arrow-back' />
        </Button>}
        <Title>{'  ' + type}</Title>
      </Left>
      <Right>
        <Button transparent>
          <Icon name='search' />
        </Button>
        <Button transparent>
          <Icon name='more' />
        </Button>
      </Right>
    </Header>
    )
}