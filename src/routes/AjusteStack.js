import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuButton from '../components/menuButton';
import NotificationButton from '../components/notificationButton';


const Stack = createStackNavigator();

function AjustesScreen({ navigation }) {
    return (
        <View>
            <Text>Ajustes</Text>
        </View>
    );
}

class AjusteStack extends Component {
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
                    name='Ajustes'
                    component={AjustesScreen}
                    options={({ navigation }) => {
                        return {
                            headerLeft: () => <MenuButton navigation={navigation} />,
                        }
                    }}
                />
            </Stack.Navigator>
        );
    }
}

export default AjusteStack;
