import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from '../styles/stylesScreen';


class NewPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Nueva Contraseña</Text>
                <TextInput
                    style={styles.input}
                    label='Contraseña'
                    mode='outlined'
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TextInput
                    style={styles.input}
                    label='Confirma Contraseña'
                    mode='outlined'
                    value={this.state.passwordtwo}
                    onChangeText={passwordtwo => this.setState({ passwordtwo })}
                />
                <Button style={styles.button} mode="contained" onPress={() => this.props.navigation.navigate('Login')}>Guardar</Button>
            </View>
        );
    }
}

export default NewPassword;
