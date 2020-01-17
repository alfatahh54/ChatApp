import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Loading from '../screens/Loading';
import Chat from '../screens/Chat'
import Profile from '../screens/Profile';

export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="loading" component={Loading} title="Loading" initial={true}/>
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Register"/>
                    <Scene key="home" component={Home} title="Home"/>
                    <Scene key="chat" component={Chat} title="Chat"/>
                    <Scene key="profile" component={Profile} title="Profile"/>
                </Stack>
            </Router>
        )
    }
}
