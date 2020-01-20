import React from 'react';
import {View, StyleSheet, Keyboard, Button, TextInput} from 'react-native';
class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  //Membuat state text
  state = {
    text: '',
  };
  //submit method yang berfungsi ketika tombol ditekan
  submit() {
    //mengirim nilai ke database berdasarkan state text yang diterima
    this.props.submit(this.state.text, this.props.idS, this.props.idR);
    //mengatur state text menjadi kosong
    this.setState({
      text: '',
    });
    //menutup keyboard
    Keyboard.dismiss();
  }
  render() {
    return (
      <View style={styles.compose}>
        <TextInput
          style={styles.composeText}
          placeholder="Type a message..."
          //value diatur berdasarkan nilai dari state text
          value={this.state.text}
          //ketika text berubah maka akan melakukan set text
          onChangeText={text => this.setState({text})}
          //Ketika user memasukkan text dan meng-klik return pada phone keyboard maka akan disubmit.
          onSubmitEditing={event => this.submit()}
          editable={true}
          maxLength={40}
        />
        <Button
          //ketika tombol ditekan maka akan memanggil method submit
          onPress={this.submit}
          title="Send"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  composeText: {
    width: '80%',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  compose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
});
export default Compose;
