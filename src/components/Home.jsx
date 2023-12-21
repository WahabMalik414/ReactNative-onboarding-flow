/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.welcomeView}>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <Pressable
          onPress={handleLoginPress}
          style={({pressed}) => styles.button(pressed)}>
          {({pressed}) => <Text style={styles.text}>Login</Text>}
        </Pressable>
        <Pressable
          onPress={handleSignupPress}
          style={({pressed}) => styles.button(pressed)}>
          {({pressed}) => <Text style={styles.text}>Signup</Text>}
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
  container: {
    flex: 1,
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#A9e0c5',
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  imageContainer: {
    backgroundColor: '#000',
    width: '120%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    top: -100,
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
