import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';

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
        <Button
          title="Back"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />
      </ScrollView>
    );
  }
}

export default Settings;
