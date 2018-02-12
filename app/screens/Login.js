import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { List, ListItem, Button, Icon} from 'react-native-elements';
import { users } from '../config/data';

class Login extends Component {
    render() {
        return (
          <View style={styles.container}>
              <View style={styles.imageContainer}>
                  <Image style={styles.image2}
                      source={require('../images/chickenBusLogo1.png')}/>
              </View>

              <View style={styles.userNameContainer}>
              <TextInput
                  style={{height: 40,
                      backgroundColor: '#F9F6EB',
                      borderRadius: 6,}}
                  placeholder="User Name"
                  onChangeText={(text) => this.setState({text})}
              />
              </View>
              <View style={styles.userNameContainer}>
              <TextInput
                  style={{height: 40,
                      backgroundColor: '#F9F6EB',
                      borderRadius: 6,}}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={(text) => this.setState({text})}
              />
              </View>

              <View style={styles.buttonContainer}>
                  <TouchableOpacity
                      style={styles.buttonCell}
                      onPress={this.onPress}
                  >
                  <Text style={styles.buttonText}> Sign In </Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                  <TouchableOpacity
                      style={styles.buttonCell}
                      onPress={this.onPress}
                  >
                  <Text style={styles.buttonText}> Sign Up </Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                  <TouchableOpacity
                      style={styles.buttonCell}
                      onPress={this.onPress}
                  >
                  <Text style={styles.buttonText}> Sign in with FaceBook </Text>
                  </TouchableOpacity>
              </View>
        </View>

        );
      }


      onPress = () => {
          console.log("Start Button Pressed");
      }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F7EB7A',
  },
  imageContainer:{
      paddingBottom: 60,
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonContainer:{
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingTop: 10,
  },
  userNameContainer:{
      width: 300,
      paddingTop: 10,
  },
  buttonCell:{
     alignItems: 'center',
     padding: 10,
     backgroundColor: '#FFAB00',
     borderRadius: 10,
     width: 200,
  },
  buttonText:{
      color: '#fff',
      fontWeight: 'bold',
  },
  image1:{
      width: 150,
      height: 150,
  },
  image2:{
        width: 350,
        height: 100,
    },
  });
export default Login;
