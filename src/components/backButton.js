import React, { Component } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BackButton({navigation }) {


const back = () => {
    navigation.navigate('Vacantes');
}
   
return (
        <View>
            <MaterialIcons color='white' style={{marginLeft:10}} name='arrow-back' size={28} onPress={back } />
        </View>
);
}