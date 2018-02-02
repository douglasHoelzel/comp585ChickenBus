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
        <Container>
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
            <Button block>
            <Text>Add Route</Text>
          </Button>
          </Content>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1AD17',
},
text: {
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  color: '#fff',
}

});
export default AddLocation;
