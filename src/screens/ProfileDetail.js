import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { IconButton, Title, Paragraph, Card, Button } from 'react-native-paper';

class ProfileDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: 'https://picsum.photos/700'
        };
    }

    render() {
        return (

            <ScrollView>
                <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Image style={{ borderRadius: 65, width: 130, height: 130, borderColor: 'black', borderWidth: 1 }} source={{ uri: this.state.photo }}></Image>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 1, }}>
                        <IconButton icon='camera'></IconButton>
                    </View>
                </View>
                <View style={{ margin: 5 }}>
                    <Card style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Title>Datos Personales</Title>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <IconButton color='green' icon='border-color'></IconButton>
                            </View>
                        </View>
                        <Paragraph>Nombre Apellido Apellido</Paragraph>
                        <Paragraph>Dirección</Paragraph>
                        <Paragraph>Municipio</Paragraph>
                        <Paragraph>Estado</Paragraph>
                        <Paragraph>Telefono</Paragraph>
                    </Card>
                    <Card style={{ marginVertical: 10, padding: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Title>Datos Academicos</Title>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <IconButton icon='border-color'></IconButton>
                            </View>
                        </View>
                        <Paragraph>Nombre Escuela</Paragraph>
                        <Paragraph>Carrera</Paragraph>
                        <Paragraph>Año de termino</Paragraph>
                        <Paragraph>Especialidad</Paragraph>
                        <Paragraph>Telefono</Paragraph>
                        <Card.Actions style={{flexDirection:'row', justifyContent:'space-around'}}>
                            <Button onPress={()=>this.props.navigation.navigate('CV')}>VER</Button>
                            <Button>COMPARTIR</Button>
                        </Card.Actions>
                    </Card>
                </View>
                <View>

                </View>
            </ScrollView>
        );
    }
}

export default ProfileDetail;
