import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Button, Form, Item, Input } from 'native-base';
import { me } from '../config/data';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large}}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />

        <Button block style={styles.buttonContainer} onPress={this.handleSettingsPress}>
            <Text style={styles.buttonText}>Setings</Text>
        </Button>

        <List>
          <ListItem
            title="Email"
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={this.props.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.props.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.props.location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

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
export default Me;
