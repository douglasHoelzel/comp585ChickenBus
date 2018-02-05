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
          <Content>
           <Text style={styles.headerTextTop}>Add Location</Text>
            <Form>
              <Item>
                <Input placeholder="Location Name" />
              </Item>
              <Item>
                <Input placeholder="Coordinates (Will open map soon)" />
              </Item>
              <Item>
                <Input placeholder="Placeholder" />
              </Item>
              <Item>
                <Input placeholder="Placeholder2" />
              </Item>
              <Item>
                <Input placeholder="Placeholder3" />
              </Item>
              <Item last>
                <Input placeholder="Comments" />
              </Item>
            </Form>
            <Text style={styles.headerTextBottom}>Add Route</Text>
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
                <Text style={styles.buttonText}>Submit</Text>
            </Button>
          </Content>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
buttonContainer:{
    backgroundColor: '#00A3FF',
},
buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  18,
},
headerTextTop:{
    paddingTop: 30,
    backgroundColor: '#D03038',
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  18,
    height: 80,

},
headerTextBottom:{
    paddingTop: 30,
    marginTop: 60,
    backgroundColor: '#FFAB00',
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  18,
    height: 80,

},
mainContainer:{
}

});
export default AddLocation;
