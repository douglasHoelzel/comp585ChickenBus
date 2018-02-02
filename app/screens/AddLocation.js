import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Button, Form, Item, Input } from 'native-base';
import { users } from '../config/data';

class AddLocation extends Component {
    render() {
      return (
        <Container style={styles.mainContainer}>
            <Text style={styles.headerText}>Add Route</Text>
          <Header />
          <Content>
            <Form>
              <Item>
                <Input placeholder="Route Name" />
              </Item>
              <Item>
                <Input placeholder="Origin" />
              </Item>
              <Item>
                <Input placeholder="Destination" />
              </Item>
              <Item>
                <Input placeholder="Duration" />
              </Item>
              <Item>
                <Input placeholder="Cost" />
              </Item>
              <Item last>
                <Input placeholder="Notes" />
              </Item>
            </Form>
            <Button block style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Submit Route</Text>
          </Button>
          </Content>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
buttonContainer:{
    backgroundColor: '#545BFF',
},
buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  18,
},
headerText:{
    marginTop: 60,
    backgroundColor: '#373CB6',
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  18,
    height: 60,
},
mainContainer:{
}

});
export default AddLocation;
