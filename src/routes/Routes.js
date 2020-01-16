import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from './Home';
import Loading from '../screens/Loading';

export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="loading" component={Loading} title="Loading" initial={true}/>
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Register"/>
                    <Scene key="home" component={Home} title="Home"/>
                </Stack>
            </Router>
        )
    }
}
