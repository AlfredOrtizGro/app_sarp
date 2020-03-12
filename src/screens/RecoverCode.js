import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from '../styles/stylesScreen';

class RecoverCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}>Código de Recuperación</Text>
            <TextInput
                style={styles.input}
                label='Código'
                mode='outlined'
                value={this.state.code}
                onChangeText={code => this.setState({ code })}
            />
            <Button style={styles.button} mode="contained" onPress={() => this.props.navigation.navigate('new')}>Validar</Button>
        </View>
        );
    }
}

export default RecoverCode;
