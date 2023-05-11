import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth';


const SplashScreen = ({ navigation }) => {


  useEffect(() => {
    getDataFromClient();
  }, [])
  const getDataFromClient = async () => {
    try {
      let valueOfClient = await AsyncStorage.getItem('CLIENT_DATA');
      let valueOfSP = await AsyncStorage.getItem('SP_DATA');
      if (valueOfClient == null && valueOfSP == null) {
        navigation?.navigate('vc')
        console.log("splash screen to direct vc");
      }
      else if (valueOfClient !== null) {
        navigation?.navigate('bottam')
        console.log("splash screen to direct home");
      }
      else if (valueOfSP !== null) {
        navigation?.navigate('drawer')
        console.log("splash screen to direct home2");
      }
      console.log(valueOfClient, "client value");
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <TouchableOpacity onPress={() => navigation.navigate('vc')}>
      <View >
        <Image source={image.splash} style={{ height: '100%', width: '100%' }} />
      </View>
    </TouchableOpacity>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})