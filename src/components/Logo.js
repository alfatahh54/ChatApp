import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
Image
} from 'react-native';

export default class Logo extends Component {
    render(){
        return(
        <View style={styles.container}>
            <Image  style={{width:180}}
            source={require('../images/logo.png')}/>
            <Text style={styles.logoText}>{this.props.type === 'Login' ? 'Login' : this.props.type === 'Signup' ? 'Signup' : 'Welcome to My app'}</Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        justifyContent:'center',
        alignItems: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize:32,
        fontWeight: "bold",
        color:'rgba(0, 25, 62, 0.7)'
    }
});