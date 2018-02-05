import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Button, Form, Item, Input } from 'native-base';
class Settings extends Component {
    handleSettingsPress = () => {
      this.props.navigation.navigate('Me');
    };

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
        <Button block style={styles.buttonContainer} onPress={this.handleSettingsPress}>
            <Text style={styles.buttonText}>Back</Text>
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
buttonContainer:{
    backgroundColor: '#8E8E8E',
},
buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  18,
}

});
export default Settings;
