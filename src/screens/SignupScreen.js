import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Button, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';


const SignupScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');
  const storeName = async()=>{
    try {
      await AsyncStorage.setItem('NAME_DATA',name);
      console.log("name was setted")
    } catch (error) {
      console.log(error);
    }
  }

  const storeDataFromSP = async () => {
    try {
      await AsyncStorage.setItem('SP_DATA', email);
      console.log("saved to asyncStorage");
    } catch (e) {
      console.log(e);
    }
  }
  const storeDataFromClient = async () => {
    try {
      await AsyncStorage.setItem('CLIENT_DATA', email);
      console.log("saved to asyncStorage");
    } catch (e) {
      console.log(e);
    }
  }
  const onSignupFromSP = async () => {
    try {
      await auth()
        .createUserWithEmailAndPassword(`${email}`, `${password}`)
        .then(() => {
          console.log('User account created & signed in!');
        });
      storeDataFromSP();
      // navigation.navigate('bottam');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert("You already have an account");
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert("You email is invalid")
      }
      if (error.code === 'auth/weak-password') {
        Alert.alert("Your password is very weak make a strong password")
      }
      console.error(error);

    }

  }
  const onSignupFromClient = async () => {
    try {
      await auth()
        .createUserWithEmailAndPassword(`${email}`, `${password}`)
        .then(() => {
          console.log('User account created & signed in!');
        });
      storeDataFromClient();
      // navigation.navigate('bottam');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert("You already have an account");
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert("You email is invalid")
      }
      if (error.code === 'auth/weak-password') {
        Alert.alert("Your password is very weak make a strong password")
      }
      console.error(error);

    }

  }
  

  const choosen = useSelector(state => state.choosedValue);
  console.log(choosen);
  const onSignupPress = () => {
    storeName();
    if (choosen == 'option1') {
      onSignupFromSP();
      navigation.navigate('drawer')
    }
    else {
      onSignupFromClient();
      navigation?.navigate('bottam')
    }
  }
  const [press, setPress] = useState('')
  return (
    <SafeAreaView style={{ backgroundColor: '#F4C50B', flex: 1 }}>
      <View style={{ justifyContent: 'space-around', }}>

        <KeyboardAvoidingView
          behavior={'position'}>
          <View style={{ alignItems: 'center' }}>
            <Image source={image.fuelStation} style={{ height: hp(24.63), width: wp(50) }} resizeMode={'contain'} />
            <Text style={styles.textStyle} >Create Account</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.inputStyle}>
              <Image style={{ height: hp(2.46), width: 20, marginTop: 5 }} source={image.name} resizeMode={'contain'} />
              <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                fontSize={RFValue(20, 812)}
                flex={1}
                marginLeft={7}
                placeholder="Name"
                onChangeText={(txt)=>setName(txt)}

              />
            </View>
            <View style={styles.inputStyle1}>
              <Image style={{ height: hp(2.46), width: 20, marginTop: 5 }} source={image.email} resizeMode={'contain'} />
              <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                fontSize={RFValue(20, 812)}
                flex={1}
                marginLeft={7}
                placeholder="Your Email"
                onChangeText={(txt) => setEmail(txt)}
              />
            </View>
            <View style={styles.inputStyle2}>
              <Image style={{ height: hp(2.46), width: 20, marginTop: 5 }} source={image.password} resizeMode={'contain'} />
              <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                fontSize={RFValue(20, 812)}
                flex={1}
                marginLeft={7}
                secureTextEntry={press == false ? true : false}
                placeholder="Password"
                onChangeText={(txt) => setPassword(txt)}
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
        <View>
          <TouchableOpacity style={{ height: 0, }} onPress={onSignupPress}>
            <ImageBackground source={image.rectangle} style={styles.iconStyle} resizeMode={'contain'} >
              <Text style={styles.textStyle3}>Sign Up</Text>
            </ImageBackground>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={{ marginTop: hp(25.63), alignSelf: 'center' }} onPress={() => navigation.navigate('login')} >
          <Text style={{ fontSize: RFValue(22, 812), fontWeight: 'bold', marginLeft: 15 }}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({

  inputStyle: {
    fontSize: 20,
    flexDirection: 'row',
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: hp(2.46),
    padding: 15,
    height: hp(7.38),
    width: wp(82.66),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'

  },
  inputStyle1: {
    fontSize: 20,
    backgroundColor: '#cecece',
    borderRadius: 20,
    padding: 15,
    margin: 19,
    height: hp(7.38),
    width: wp(82.66),

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
    height: hp(7.38),
    width: wp(82.66),
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: RFValue(40, 812),
    color: '#000000',
  },
  textStyle3: {
    fontWeight: 'bold',
    fontSize: RFValue(26, 812),
    color: '#F4C50B',
    alignSelf: 'center',

  },
  textStyle2: {
    fontWeight: 'bold',
    color: '#000000',
    height: hp(3.69),
    justifyContent: 'center',
    alignItems: 'center'

  },
  iconStyle: {
    height: hp(14.77),
    width: wp(32),
    marginLeft: 136.5,
    marginTop: hp(2.46),
    justifyContent: 'flex-end',
    paddingVertical: 20,


  },

})
//#F4C50B