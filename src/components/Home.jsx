/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../util/Logo';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from '@rneui/themed';

function Home() {
  const navigation = useNavigation();
  function handleLoginPress() {
    navigation.navigate('Login');
  }
  function handleSignupPress() {
    navigation.navigate('Signup');
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Logo style={styles.image} />
        </View>

        <View style={styles.welcomeView}>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <Pressable
          onPress={handleLoginPress}
          style={({pressed}) => styles.button(pressed)}>
          {({pressed}) => (
            <View style={styles.buttonContainer}>
              <Text style={styles.text}>Login</Text>
              <Icon name="user" size={30} color="white" style={styles.Icon} />
            </View>
          )}
        </Pressable>
        <Pressable
          onPress={handleSignupPress}
          style={({pressed}) => styles.button(pressed)}>
          {({pressed}) => (
            <View style={styles.buttonContainer}>
              <Text style={styles.text}>Signup</Text>
              <Icon name="book" size={30} color="white" style={styles.Icon} />
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Icon: {
    left: 60,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#A9e0c5',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    right: -10,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  imageContainer: {
    backgroundColor: '#000',
    width: '100%',
    height: '35%',
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginBottom: 100,
  },
  welcome: {
    fontSize: 45,
    fontWeight: '400',
    fontFamily: 'krona',
    color: '#111',
  },
  welcomeView: {
    position: 'relative',
  },
  button: pressed => ({
    backgroundColor: pressed ? '#616060' : '#000000',
    width: 300,
    height: 55,
    borderRadius: 25,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Add this line
    elevation: 10,
  }),
  text: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'roboto',
  },
});
export default Home;
