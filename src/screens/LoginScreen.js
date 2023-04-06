import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Button, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const LoginScreen = ({ navigation }) => {
  const [press, setPress] = useState('')
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView>
        <View>
        <Image source={image.fuelStation} style={{ height: hp(24.63), marginTop: 70 }} resizeMode={'contain'} />
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={styles.textStyle} >Welcome Back </Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={styles.inputStyle}>
          <Image style={{ height: hp(2,46), width: 20, marginTop: 5 }} source={image.email} resizeMode={'contain'} />
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
          <Image style={{ height:hp(2.46), width: 20, marginTop: 5 }} source={image.password} resizeMode={'contain'} />
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
            <Image style={{ height: hp(2.46), width: 20, marginTop: 9 }} source={press == false ? image.eyclose : image.eyeopen} resizeMode={'contain'} />
          </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={{alignItems:'center'}}>
        <View>
        <TouchableOpacity style={{ height: 0, }} onPress={() => navigation?.navigate('bottam')}>
          <ImageBackground source={image.rectangle} style={styles.iconStyle} resizeMode={'contain'} >
            <Text style={styles.textStyle3}>Login</Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop: hp(20.63), alignSelf: 'center' }} onPress={() => navigation.navigate('signUp')} >
          <Text style={{ fontSize: RFValue(24,812), fontWeight: 'bold', marginLeft: 15, marginTop: 15 }}> Create New Account</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F4C50B',
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputStyle: {
    fontSize: 20,
    flexDirection: 'row',
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: 30,
    padding: 15,
    height: hp(7.38),
    width: wp(82.66),
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
    height: hp(7.38),
    width: wp(82.66),
    marginTop:hp(3.69),
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
    marginTop: 30,
  },
  textStyle3: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#F4C50B',
    alignSelf: 'center',

  },
  iconStyle: {
    height: hp(14.77),
    width: wp(32),
    marginTop: 20,
    justifyContent: 'flex-end',
    paddingVertical: 20,

  },
})