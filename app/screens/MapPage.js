import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { Button } from 'native-base';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import Modal from "react-native-modal";


{/*
  Add function here to pull all marker points
  from database, populate into list
*/}
class MapPage extends Component {
    state = {
      isModalVisible: false
    };

    _toggleModal = () =>
      this.setState({ isModalVisible: !this.state.isModalVisible });
  render() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 35.889942,
                  longitude: -78.862621,
                  latitudeDelta: 1,
                  longitudeDelta: 1,
                }}>
            <Marker
            coordinate={{
            latitude: 35.913448,
            longitude:  -79.056190}}
            title={"Buns"}
            description={"Hamburger Restaurant"}
            onCalloutPress={this._toggleModal}
            />
            <Marker
            coordinate={{
            latitude: 35.904412,
            longitude: -78.943713}}
            title={"SouthPoint Mall"}
            description={"Shopping Mall"}
            onCalloutPress={this._toggleModal}
            />
            <Marker
            coordinate={{
            latitude: 35.797220,
            longitude: -79.011996}}
            title={"Jordan Lake"}
            description={"Public Recreation Area"}
            onCalloutPress={this._toggleModal}
            />
            </MapView>


            <Modal style={styles.modal}
                isVisible={this.state.isModalVisible}>
              <View style={{ flex: 2 }}>
                <Text>Details: </Text>
                <Text>Name: Buns </Text>
                <Text>Description: Hamburger Restaurant: </Text>
                <Text>Town: Chapel Hill </Text>

                <Button block style={styles.backButton}
                    onPress={this._toggleModal}>
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
              </View>
          </Modal>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17A2F1',
},
map:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
},
text: {
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  color: '#fff',
},
modal: {
    justifyContent: 'center',
    alignItems: 'center',
  backgroundColor: '#E4E4E4',
  height: 300,
  width: 350,
},
buttonText: {
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  18,
},
backButton: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize:  18,
  borderRadius: 0,
  backgroundColor: '#1F57D2',
  height: 50,
  width: 350,
}


});
export default MapPage;
