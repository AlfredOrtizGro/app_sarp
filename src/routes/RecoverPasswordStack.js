import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SendEmail from './../screens/SendEmail';
import RecoverCode from '../screens/RecoverCode';
import NewPassword from '../screens/NewPassword';


const Stack = createStackNavigator();

class RecoverPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='email' component={SendEmail} />
                <Stack.Screen name='code' component={RecoverCode} />
                <Stack.Screen name='new' component={NewPassword} />
            </Stack.Navigator>
        );
    }
}

export default RecoverPassword;
