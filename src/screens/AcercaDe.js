import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BackButton from '../components/backButton';


const Stack = createStackNavigator();

function AcercaDeScreen({ navigation }) {
    return (
        <View>
            <Text>Acerca de SARP</Text>
        </View>
    );
}


class AcercaDe extends Component {
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
                    name='Acerca de' 
                    component={AcercaDeScreen} 
                    options={({ navigation }) => {
                        return {
                            headerLeft: () => <BackButton navigation={navigation} />,
                        }
                    }}    
                />
            </Stack.Navigator>
        );
    }
}

export default AcercaDe;
