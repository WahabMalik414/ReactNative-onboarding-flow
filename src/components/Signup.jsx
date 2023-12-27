/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CheckBox} from '@rneui/themed';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Signup() {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaProvider>
      <View style={styles.mainContainer}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <View style={styles.titleView}>
                <Text style={styles.title}>Sign up</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.textRegister}>
                  Please Register with email and sign up to continue using our
                  app.
                </Text>
              </View>
            </View>

            <Pressable style={({pressed}) => styles.googleButton(pressed)}>
              {({pressed}) => (
                <View style={styles.googleView}>
                  <Icon
                    name="google"
                    size={30}
                    color="black"
                    style={styles.Icon}
                  />

                  <Text style={styles.googleText}>Continue with Google</Text>
                </View>
              )}
            </Pressable>
            <Text style={styles.inputOr}>Or</Text>
            <TextInput style={styles.input} placeholder="Email" />

            <TextInput style={styles.input} placeholder="Create-Password" />
            <TextInput style={styles.input} placeholder="Confirm-Password" />

            <Pressable style={({pressed}) => styles.button(pressed)}>
              {({pressed}) => <Text style={styles.text}>Signup</Text>}
            </Pressable>
            <View style={styles.Term}>
              <Text>I agree to terms and conditions</Text>
              <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                size={15}
                checkedColor="#000"
                uncheckedColor="#000"
                iconType="fontisto"
                checkedIcon="checkbox-active"
                uncheckedIcon={'checkbox-passive'}
                containerStyle={styles.checkBoxContainer}
              />
            </View>
            <View style={styles.loginLink}>
              <Text style={styles.loginText}>
                Already have an account?{' '}
                <Text style={styles.link} onPress={handleLogin}>
                  {' '}
                  Log in
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    backgroundColor: 'transparent',
  },
  Term: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputOr: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 10,
  },
  Icon: {
    margin: 10,
  },
  googleImage: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
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
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#A9e0c5',
  },
  contentContainerStyle: {
    flex: 1,
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
    shadowColor: '#000', // Add this line
    elevation: 15,
  }),
  button: pressed => ({
    backgroundColor: pressed ? '#616060' : '#000000',
    width: 300,
    height: 60,
    borderRadius: 25,
    marginTop: 30,
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
