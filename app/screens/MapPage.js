import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { Button, List, ListItem } from 'native-base';
import { users } from '../config/data';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import Modal from "react-native-modal";
import api from '../config/API';

{/*
  Add function here to pull all marker points
  from database, populate into list
  http://nodejs-mongo-persistent-nmchenry.cloudapps.unc.edu/api/alllocations
*/}
class MapPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            rovers: []
        }
    }
   componentWillMount(){
        api.getRovers().then((res) => {
            this.setState({
                rovers: res.rovers
            })
        });
    }
    state = {
      isModalVisible: false
    };

    _toggleModal = () =>
      this.setState({ isModalVisible: !this.state.isModalVisible });

    likePress(){
        Alert.alert('Like Clicked')
    }



  render() {
      console.log("Rovers: ", this.state.rovers);
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
                <ScrollView>
              <View style={{width: 372}}>
                <Text style={styles.detailsHeader}>Details </Text>
                    <ScrollView horizontal>
                           <Image style={{width: 400, height: 300}}source={require('../images/bunsTestImage.png')} />
                           <Image style={{width: 400, height: 300}}source={require('../images/bunsTestImage2.png')} />
                           <Image style={{width: 400, height: 300}}source={require('../images/bunsTestImage3.png')} />
                           <Image style={{width: 400, height: 300}}source={require('../images/bunsTestImage4.png')} />
                    </ScrollView>
                    <List>
                        <ListItem >
                          <Text>Name: Buns </Text>
                        </ListItem>
                        <ListItem>
                          <Text>Description: Hamburger Restaurant</Text>
                        </ListItem>
                        <ListItem>
                          <Text>Town: Chapel Hill </Text>
                        </ListItem>
                        <ListItem>
                          <Text>Times Visited:  847 </Text>
                        </ListItem>
                        <ListItem>
                          <Text>Comments:  Comments can go here, they might be long and overflow </Text>
                        </ListItem>
                        <ListItem>
                          <Text>Placeholder: Data can go here </Text>
                        </ListItem>
                   </List>
                <View style={styles.rowContainer}>
                    <Text style={styles.thumbsIconText}><Image style={styles.thumbsUpIcon} source={require('../images/thumbsUpIcon.png')}/> 9 </Text>
                    <Text style={styles.thumbsIconText}><Image style={styles.thumbsDownIcon} source={require('../images/thumbsDownIcon.png')}/> 2 </Text>
                </View>

                <Button block style={styles.backButton}
                    onPress={this._toggleModal}>
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
              </View>
          </ScrollView>

            </Modal>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
},
fieldText:{
    fontWeight: 'bold',
    fontSize:  16,
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 10,
    color: '#4B4B4B',
},
detailsHeader:{
    paddingTop: 20,
    paddingLeft: 10,
    backgroundColor: '#5E8DF7',
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  20,
    height: 60,
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
  backgroundColor: '#5E8DF7',
  height: 50,
},
thumbsIconText: {
    fontWeight: 'bold',
    fontSize:  21,
    color: '#4B4B4B',
    paddingLeft: 10,
},
thumbsUpIcon:{
    width: 20,
    height: 20,
    marginLeft: 10,
},
thumbsDownIcon:{
    width: 20,
    height: 20,
    marginLeft: 10,
},
rowContainer:{
    paddingTop: 30,
    justifyContent: 'center',
    flexDirection: 'row'
}
});
export default MapPage;
