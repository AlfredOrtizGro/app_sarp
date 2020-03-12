import React, { Component } from 'react';

import { Button, ActivityIndicator } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screens/Login'
import Registry from './screens/Registry';

import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileStack from './routes/ProfileStack';
import VacanteStack from './routes/VacanteStack';
import SolicitudStack from './routes/SolicitudStack';
import NotificationStack from './routes/NotificationStack';
import AjusteStack from './routes/AjusteStack';
import LogOut from './routes/LogOut'
import RecoverPassword from './routes/RecoverPasswordStack';

import CustomDrawerContent from './components/DrawerContent';
import { View } from 'react-native';
import AcercaDe from './screens/AcercaDe';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            isLoading: false
        };
    }



    render() {
        if (this.state.isLoading) { return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator /></View>); } else {
            if (!this.state.isLogin) {
                return (
                    <NavigationContainer>
                        <Stack.Navigator >
                            <Stack.Screen
                                name='Login'
                                component={Login}
                                options={{
                                    title: 'SARP',
                                    headerStyle: {
                                        backgroundColor: '#0057ED',
                                    },
                                    headerTitleAlign: 'center',
                                    headerTintColor: '#fff'
                                }}
                            />
                            <Stack.Screen
                                name='Registry'
                                component={Registry}
                                options={{
                                    title: 'SARP',
                                    headerStyle: {
                                        backgroundColor: '#0057ED',
                                    },
                                    headerTitleAlign: 'center',
                                    headerTintColor: '#fff'
                                }}
                            />
                            <Stack.Screen
                                name='Recover'
                                component={RecoverPassword}
                                options={{
                                    title: 'SARP',
                                    headerStyle: {
                                        backgroundColor: '#0057ED',
                                    },
                                    headerTitleAlign: 'center',
                                    headerTintColor: '#fff'
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                );
            } else {
                return (
                    <NavigationContainer>
                        <Drawer.Navigator initialRouteName="Vacantes" drawerType='slide' drawerContent={props => <CustomDrawerContent {...props} />} >
                            <Drawer.Screen name='Perfil' component={ProfileStack}
                                options={{
                                    drawerIcon: () => <Button icon='account'></Button>,
                                    drawerLabel: 'Perfil'
                                }}
                            />
                            <Drawer.Screen name='Vacantes' component={VacanteStack}
                                options={{
                                    drawerIcon: () => <Button icon='briefcase'></Button>,
                                    drawerLabel: 'Vacantes'
                                }}
                            />
                            <Drawer.Screen name='Solicitudes' component={SolicitudStack}
                                options={{
                                    drawerIcon: () => <Button icon='calendar-check'></Button>,
                                    drawerLabel: 'Solicitudes'
                                }} />
                            <Drawer.Screen name='Notificaciones' component={NotificationStack}
                                options={{
                                    drawerIcon: () => <Button icon='bell'></Button>,
                                    drawerLabel: 'Notificaciones'
                                }}
                            />
                            <Drawer.Screen name='Ajustes' component={AjusteStack}
                                options={{
                                    drawerIcon: () => <Button icon='settings'></Button>,
                                    drawerLabel: 'Ajustes'
                                }}
                            />
                            <Drawer.Screen name='Acerca de' component={AcercaDe}
                                options={{
                                    drawerIcon: () => <Button icon='information'></Button>,
                                    drawerLabel: 'Acerca de'
                                }}
                            />
                            <Drawer.Screen name='Cerrar Sesion' component={LogOut}
                                options={{
                                    drawerIcon: () => <Button icon='logout'></Button>,
                                    drawerLabel: 'Cerrar Sesión'
                                }}
                            />
                        </Drawer.Navigator>
                    </NavigationContainer>
                );
            }
        }
    }
}

export default Main;
