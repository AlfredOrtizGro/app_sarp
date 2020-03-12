import React, { Component } from 'react';
import { View, } from 'react-native';
import { Button, Text, Menu } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import MenuButton from '../components/menuButton';
import NotificationButton from '../components/notificationButton';
import CardVacante from '../components/cardVacante';
import styles from '../styles/stylesScreen';
import ListaVacantes from '../screens/ListaVacantes';
import DetallesVacante from '../screens/DetallesVacante';

const Stack = createStackNavigator();


class VacanteStack extends Component {
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
                    name='Vacantes'

                    component={ListaVacantes}
                    options={({ navigation }) => {
                        return {
                            title: 'SARP',
                            headerLeft: () => <MenuButton navigation={navigation} />,
                            headerRight: () => <NotificationButton navigation={navigation} />
                        }
                    }}
                />
                <Stack.Screen
                    name='Detalles Vacante'
                    component={DetallesVacante}
                />
            </Stack.Navigator>
        );
    }
}

export default VacanteStack;
