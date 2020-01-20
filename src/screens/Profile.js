import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {header} from '../components/Header';
import {signOut, db, uid} from '../configs/firebase';
class Profile extends Component {
  state = {
    name: '',
    email: '',
  };
  getUser = async () => {
    const id = this.props.data;
    let name = '',
      email = '';
    await db()
      .ref('/users/' + id)
      .once('value')
      .then(function(snapshoot) {
        name = (snapshoot.val() && snapshoot.val().name) || '';
        email = (snapshoot.val() && snapshoot.val().email) || '';
      });
    this.setState({
      name,
      email,
    });
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    return (
      <View>
        {header('Profile')}
        <ScrollView>
          <Image
            style={styles.image}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.header}>
            <View style={styles.row}>
              <View style={styles.posterContainer}>
                <Image
                  style={styles.poster}
                  source={{
                    uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                  }}
                />
              </View>
              <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>
                  {this.state.name}
                </Text>
              </View>
            </View>
            <Text style={styles.subHeader}>Deskripsi:</Text>
            <Text style={styles.summary}>-</Text>
            <Text style={styles.subHeader}>Email:</Text>
            <Text style={styles.summary}>{this.state.email}</Text>
            {this.props.data === uid() ? (
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  signOut();
                }}>
                <Text>LogOut</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  image: {
    height: 350,
    resizeMode: 'cover',
  },

  header: {
    marginHorizontal: 20,
    top: -50,
  },
  row: {flexDirection: 'row'},
  poster: {
    width: 126,
    height: 177,
    top: -40,
    borderRadius: 10,
  },
  posterContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  info: {
    marginLeft: 20,
    marginTop: 50,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textType: {
    fontWeight: '400',
    color: '#B4B9C5',
    marginBottom: 5,
  },
  subHeader: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#B4B9C5',
    marginTop: 20,
    marginBottom: 5,
  },
  summary: {lineHeight: 25},
  genresContainer: {
    marginRight: 5,
    backgroundColor: '#FFBB27',
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 80,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  genreText: {paddingHorizontal: 5, color: '#FFF'},
});
