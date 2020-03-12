import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MenuButton from '../components/menuButton';
import NotificationButton from '../components/notificationButton';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

function NotificacionScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Notificaciones</Text>
            <Button
                onPress={() => navigation.navigate('Detalles Notificaciones')}>
                detalles
            </Button>
        </View>
    );
}

function DetallesNotificacionScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Detalles Notificaciones</Text>
        </View>
    );
}

const Stack = createStackNavigator();
class NotificationStack extends Component {
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
                    name='Notificaciones'
                    component={NotificacionScreen}
                    options={({ navigation }) => {
                        return {
                            headerLeft: () => <MenuButton navigation={navigation} />,
                        }
                    }}
                />
                <Stack.Screen
                    name='Detalles Notificaciones'
                    component={DetallesNotificacionScreen}
                />
            </Stack.Navigator>
        );
    }
}

export default NotificationStack;
