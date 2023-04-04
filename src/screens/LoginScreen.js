import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Button, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { image } from '../Helper/ImageHelper'

const LoginScreen = ({ navigation }) => {
  const [press, setPress] = useState('')
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView>
        <Image source={image.fuelStation} style={{ height: 200, width: 500, marginLeft: -50, marginTop: 70 }} resizeMode={'center'} />
        <Text style={styles.textStyle} >Welcome Back </Text>
        <View style={styles.inputStyle}>
          <Image style={{ height: 20, width: 20, marginTop: 5 }} source={image.email} resizeMode={'contain'} />
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            fontSize={20}
            flex={1}
            marginLeft={7}
            placeholder="Your Email"

          />
        </View>
        <View style={styles.inputStyle2}>
          <Image style={{ height: 20, width: 20, marginTop: 5 }} source={image.password} resizeMode={'contain'} />
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            fontSize={20}
            flex={1}
            marginLeft={7}
            secureTextEntry={press == false ? true : false}
            placeholder="Password"
          />
          <TouchableOpacity onPress={() => {
            setPress(!press);
            return false;
          }} >
            <Image style={{ height: 20, width: 20, marginTop: 9 }} source={press == false ? image.eyclose : image.eyeopen} resizeMode={'contain'} />
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
      <View>
        <TouchableOpacity style={{ height: 0, }} onPress={() => navigation?.navigate('bottam')}>
          <ImageBackground source={image.rectangle} style={styles.iconStyle} resizeMode={'contain'} >
            <Text style={styles.textStyle3}>Login</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 200, alignSelf: 'center' }} onPress={() => navigation.navigate('signUp')} >
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 15, marginTop: 15 }}> Create New Account</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F4C50B',
    flex: 1
  },
  inputStyle: {
    fontSize: 20,
    flexDirection: 'row',
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: 30,
    padding: 15,
    height: 60,
    width: 325,
    marginLeft: 40,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  inputStyle2: {
    fontSize: 20,
    backgroundColor: '#cecece',
    borderRadius: 20,
    padding: 15,
    height: 60,
    width: 325,
    marginLeft: 40,
    marginTop: 30,
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#000000',
    marginLeft: 63,
    marginTop: 30,
  },
  textStyle3: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#F4C50B',
    alignSelf: 'center',

  },
  iconStyle: {
    height: 120,
    width: 120,
    marginLeft: 136.5,
    marginTop: 20,
    justifyContent: 'flex-end',
    paddingVertical: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
})