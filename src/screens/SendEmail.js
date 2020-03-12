import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/stylesScreen';
import { TextInput, Button } from 'react-native-paper';

class SendEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}>Recuperar Contraseña</Text>
            <TextInput
                style={styles.input}
                label='Correo'
                mode='outlined'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
            <Button style={styles.button} mode="contained" onPress={() => this.props.navigation.navigate('code')}>Recuperar</Button>
        </View>
        );
    }
}

export default SendEmail;
