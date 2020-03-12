import React, { Component } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NotificationButton({navigation }) {


const goNotifications = () => {
    navigation.navigate('Notificaciones');
}

return (
        <View>
            <MaterialIcons color='white' style={{marginRight:10}} name='notifications' size={28} onPress={goNotifications} />
        </View>
);
}