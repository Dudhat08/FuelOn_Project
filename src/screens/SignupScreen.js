import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Button, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { image } from '../Helper/ImageHelper'

const SignupScreen = ({ navigation }) => {
  const [press, setPress] = useState('')
  return (
    <SafeAreaView style={{ backgroundColor: '#F4C50B', flex: 1 }}>
      <View>

        <KeyboardAvoidingView
          behavior={'position'}>
          <Image source={image.fuelStation} style={{ height: 200, width: 500, marginLeft: -50, marginTop: 0 }} resizeMode={'center'} />
          <Text style={styles.textStyle} >Create Account</Text>

          <View style={styles.inputStyle}>
            <Image style={{ height: 20, width: 20, marginTop: 5 }} source={image.name} resizeMode={'contain'} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              fontSize={20}
              flex={1}
              marginLeft={7}
              placeholder="Name"

            />
          </View>
          <View style={styles.inputStyle1}>
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
              <Text style={styles.textStyle3}>Sign Up</Text>
            </ImageBackground>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={{ marginTop: 200, alignSelf: 'center' }} onPress={() => navigation.navigate('login')} >
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 15 }}>Already have an account?</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({

  backiconStyle: {
    height: 20,
    width: 20,
    marginLeft: 25,
    marginTop: -300,
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
  inputStyle1: {
    fontSize: 20,
    backgroundColor: '#cecece',
    borderRadius: 20,
    padding: 15,
    margin: 19,
    height: 60,
    width: 325,
    marginLeft: 40,
    flexDirection: 'row',
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
    marginLeft: 50,
    marginTop: 0,
  },
  textStyle3: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#F4C50B',
    alignSelf: 'center',

  },
  textStyle2: {
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 110,
    marginTop: 200,
    height: 30

  },
  iconStyle: {
    height: 120,
    width: 120,
    marginLeft: 136.5,
    marginTop: 20,
    justifyContent: 'flex-end',
    paddingVertical: 20,
    

  },

})
//#F4C50B