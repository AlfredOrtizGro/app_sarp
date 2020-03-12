import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Title, Headline, Caption} from 'react-native-paper';

const styles = StyleSheet.create({
    stretch: {
        marginLeft: 5,
        width: 50,
        height: 50,
        borderRadius: 50,
    }
});

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor: 'gray',padding:10}}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10}}>
                    <Image
                        style={styles.stretch}
                        source={require('./../../assets/icon.png')}
                    />
                    <Title style={{ marginLeft: 10 }}>Usuario</Title>
                </View>
                <Title style={{ margin: 10 }}>Especialidad</Title>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
export default CustomDrawerContent;