import React, { Component } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MenuButton({navigation }) {


const openMenu = () => {
    navigation.openDrawer();
}

return (
        <View>
            <MaterialIcons color='white' style={{marginLeft:10}} name='menu' size={28} onPress={openMenu} />
        </View>
);
}