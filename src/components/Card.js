import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Thumbnail, Left, Body, ListItem} from 'native-base';
import {withNavigation} from 'react-navigation';
import {Actions} from 'react-native-router-flux';
const Card = props => {
  const {item} = props;
  console.log(item);
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
        <Text style={styles.title}>{item.name}</Text>
        <Text note numberOfLines={1}>
          {item.email ? item.email : ''}
        </Text>
      </Body>
    </ListItem>
  );
};

export default withNavigation(Card);

const styles = StyleSheet.create({
  body: {marginRight: 20},
  title: {fontWeight: '600', fontSize: 17, marginBottom: 5},
});
