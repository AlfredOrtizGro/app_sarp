import React, { Component } from 'react';
import { View, } from 'react-native';
import { Button, Menu, Text, Divider } from 'react-native-paper';
import CardVacante from '../components/cardVacante';
import styles from '../styles/stylesScreen';



class ListaVacantes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            filtro: 'Todo'
        };
    }
    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false });

    render() {
        return (
            <View style={{ flex: 1, }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{flex:1}}/>
                    <View style={{ flex: 1 , justifyContent:'center'}}>
                        <Text style={{ textAlign: 'center' }, styles.text}>Vacantes</Text>
                    </View>
                    <View style={{flex:1, alignItems:'flex-end'}}>
                        <Menu
                            visible={this.state.visible}
                            onDismiss={this._closeMenu}
                            anchor={
                                <Button onPress={this._openMenu} icon='chevron-down'>{this.state.filtro}</Button>
                            }
                        >
                            <Menu.Item onPress={() => { }} title="Todo" />
                            <Menu.Item onPress={() => { }} title="Filtro 2" />
                            <Menu.Item onPress={() => { }} title="Filtro 3" />
                        </Menu>
                    </View>
                </View>

                <CardVacante navigation={this.props.navigation} title='Programer' company='nuup' description='Programador back'></CardVacante>

            </View>
        );
    }
}

export default ListaVacantes;
