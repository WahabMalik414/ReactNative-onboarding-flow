/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Linking,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Login() {
  const navigation = useNavigation();
  function handleSignup() {
    navigation.navigate('Signup');
  }
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.ScrollContainer}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Login Now</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.textRegister}>
                Please Login to continue using our app.
              </Text>
            </View>
          </View>

          <Pressable style={({pressed}) => styles.googleButton(pressed)}>
            {({pressed}) => (
              <View style={styles.googleView}>
                <Image
                  source={require('../../assets/google.png')}
                  style={styles.googleImage}
                />
                <Text style={styles.googleText}>Continue with Google</Text>
              </View>
            )}
          </Pressable>
          <Text style={styles.inputOr}>Or</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <Pressable style={({pressed}) => styles.button(pressed)}>
            {({pressed}) => <Text style={styles.text}>Login</Text>}
          </Pressable>
          <View style={styles.loginLink}>
            <Text style={styles.loginText}>
              Don't have an account?{' '}
              <Text style={styles.link} onPress={handleSignup}>
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputOr: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 10,
  },
  googleImage: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  ScrollContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#A9e0c5',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },

  container: {
    width: '100%',
    alignItems: 'center',
  },
  link: {
    color: 'white',
  },
  input: {
    margin: 15,
    padding: 20,
    fontSize: 20,
    height: 65,
    width: 296,
    borderRadius: 13,
    backgroundColor: '#D0EEDF',
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    fontSize: 20,
  },
  googleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleView: {
    marginTop: 30,
  },

  textView: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'roboto',
  },
  googleText: {
    fontSize: 24,
    color: '#222',
    fontFamily: 'roboto',
  },
  googleButton: pressed => ({
    backgroundColor: pressed ? '#c1e6d4' : '#D0EEDF',
    width: 300,
    color: '#222',
    height: 60,
    borderRadius: 25,
    marginTop: 30,
    justifyContent: 'center',
    shadowColor: '#000',
  }),
  button: pressed => ({
    backgroundColor: pressed ? '#616060' : '#000000',
    width: 300,
    height: 60,
    borderRadius: 25,
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Add this line
    elevation: 10,
  }),
  title: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'krona',
  },
  textRegister: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'roboto',
    fontWeight: '300',
  },

  image: {width: 500, height: 400},
  imageContainer: {
    backgroundColor: 'black',
    width: '105%',
    height: '20%',
    alignItems: 'flex-start',
    paddingLeft: 35,
    justifyContent: 'center',
    borderBottomLeftRadius: 52,
    borderBottomRightRadius: 52,
    paddingBottom: 20,
  },
});
