import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import styles from '../styles/stylesScreen'
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Registry extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled enableOnAndroid={true}>
                <View style={styles.container}>
                    <Text style={styles.text}>Registro</Text>
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Email'
                        placeholder='email@something.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Contraseña'
                        placeholder='*******'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Confirma contraseña'
                        placeholder='*******'
                        value={this.state.passwordtwo}
                        onChangeText={passwordtwo => this.setState({ passwordtwo })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Nombre'
                        placeholder='John'
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Apellido Paterno'
                        placeholder='Connor'
                        value={this.state.apPaterno}
                        onChangeText={apPaterno => this.setState({ apPaterno })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Apellido Materno'
                        placeholder='Connor'
                        value={this.state.apMaterno}
                        onChangeText={apMaterno => this.setState({ apMaterno })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Direccion'
                        placeholder='Av. Siempre Viva 123'
                        value={this.state.adress}
                        onChangeText={adress => this.setState({ adress })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Colonia'
                        placeholder='Metepec'
                        value={this.state.town}
                        onChangeText={town => this.setState({ town })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Municipio'
                        placeholder='Metepec'
                        value={this.state.city}
                        onChangeText={city => this.setState({ city })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        label='Estado'
                        placeholder='Estado de México'
                        value={this.state.state}
                        onChangeText={state => this.setState({ state })}
                    />
                    <TextInput
                        style={{ marginBottom: 50 }}
                        mode='outlined'
                        label='Teléfono'
                        placeholder='+52 722 123123123'
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                    <Button mode='contained' style={styles.button}>REGISTRARSE</Button>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}


export default Registry;
