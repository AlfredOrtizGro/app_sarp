
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import styles  from '../styles/stylesScreen';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput
                    style={styles.input}
                    label='Correo'
                    mode='outlined'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    style={styles.input}
                    label='Contraseña'
                    mode='outlined'
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <Button style={styles.button} mode="contained"  onPress={()=> this.props.navigation.navigate('Vacantes')}>INGRESAR</Button>
                <Button style={styles.button} mode='contained' onPress={()=> this.props.navigation.navigate('Registry')}>REGISTRO</Button>
                <Button style={styles.button} color='black'mode='text' onPress={()=> this.props.navigation.navigate('Recover')}>¿Olvidaste tu contraseña?</Button>
            </View>
        );
    }
}


export default Login;
