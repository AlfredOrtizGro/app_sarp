import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const CardVacante = ({navigation, title, company, description}) => (
    <Card style={{margin:5, borderWidth:1,borderColor:'gray' ,borderRadius:10}}>
        <Card.Title  left={(props) => <Avatar.Icon {...props} icon="folder" />} title={title} subtitle={company}  />
        <Card.Content>
            <Paragraph>{description}</Paragraph>
        </Card.Content>
        <Card.Actions style={{justifyContent:'space-around'}}>
            <Button onPress={()=>navigation.navigate('Detalles Vacante')}>Ver</Button>
            <Button>Aplicar</Button>
        </Card.Actions>
    </Card>
);

export default CardVacante;