import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Chip, Title, Paragraph, Button } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';

class DetallesVacante extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <Card style={{ margin: 5 }}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title title='Nuuptech' subtitle='Programador'></Card.Title>
                    <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                            <Chip icon="information" onPress={() => console.log('Pressed')}>BackEnd</Chip>
                            <Chip icon="information" onPress={() => console.log('Pressed')}>FrontEnd</Chip>
                        </View>
                        <Title>Descripción</Title>
                        <Paragraph>Programador java con conocimientos en Spring </Paragraph>
                        <Title>Requisitos</Title>
                        <Paragraph>Programador java con conocimientos en Spring</Paragraph>
                        <Title>Sueldo</Title>
                        <Paragraph>$1000</Paragraph>
                    </Card.Content>
                    <Card.Actions style={{ justifyContent: 'center' }}>
                        <Button mode='contained'>Aplicar</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
        );
    }
}

export default DetallesVacante;
