import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import MenuButton from '../components/menuButton';
import NotificationButton from '../components/notificationButton';


const Stack = createStackNavigator();

function SolicitudScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Solicitudes</Text>
        </View>
    );
}


function DetallesSolicitudScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Detalles Solicitudes</Text>
        </View>
    );
}

class SolicitudStack extends Component {
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
                    name='Solicitudes'
                    component={SolicitudScreen}
                    options={({ navigation }) => {
                        return {
                            headerLeft: () => <MenuButton navigation={navigation} />,
                        }
                    }}
                />
                <Stack.Screen
                    name='Detalles Solicitud'
                    component={DetallesSolicitudScreen}
                />
            </Stack.Navigator>
        );
    }
}

export default SolicitudStack;
