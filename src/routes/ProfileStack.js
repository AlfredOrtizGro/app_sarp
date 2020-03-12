import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import MenuButton from '../components/menuButton';
import NotificationButton from '../components/notificationButton';
import ProfileDetail from '../screens/ProfileDetail';
import EditCV from '../screens/EditCV';
import CV from '../screens/CV';

const Stack = createStackNavigator();


class ProfileStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#0057ED',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                }}
            >
                <Stack.Screen
                    name='ProfileDetail'
                    component={ProfileDetail}
                    options={({ navigation }) => {
                        return {
                            title:'Pérfil',
                            headerLeft: () => <MenuButton navigation={navigation} />,
                        }
                    }}
                />
                <Stack.Screen
                    name='CV'
                    component={CV}
                />
                <Stack.Screen
                    name='EditCV'
                    component={EditCV}
                />
            </Stack.Navigator>
        );
    }
}

export default ProfileStack;
