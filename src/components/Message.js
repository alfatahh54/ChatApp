import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Message = ({item}) => (
  <View>
    {item.day ? <Text style={styles.dayText}>{item.day}</Text> : null}
    <View style={[styles.message, !item.incoming && styles.incomingMessage]}>
      <Text>{item.message}</Text>
      <Text style={styles.timeText}>
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
    </View>
  </View>
);
const styles = StyleSheet.create({
  message: {
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
    backgroundColor: '#E5FFFF',
  },
  timeText: {
    fontSize: 12,
    textAlign: 'right',
    color: '#979797',
  },
  dayText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#979797',
  },
});
export default Message;
