import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';

{/*
  Add function here to pull all marker points
  from database, populate into list
*/}
class MapPage extends Component {
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
            />
            <Marker
            coordinate={{
            latitude: 35.904412,
            longitude: -78.943713}}
            title={"SouthPoint Mall"}
            description={"Shopping Mall"}
            />
            <Marker
            coordinate={{
            latitude: 35.797220,
            longitude: -79.011996}}
            title={"Jordan Lake"}
            description={"Public Recreation Area"}
            />



            </MapView>
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
}

});
export default MapPage;
