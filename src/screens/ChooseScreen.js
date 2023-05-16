import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChooseScreen = ({ navigation }) => {

  const [fuel, setFuel] = useState('');
  const [mechanic, setMechanic] = useState('');
  const [puncture, setPuncture] = useState('');
  const [press, setPress] = useState('')
  const [press1, setPress1] = useState('')
  const [press2, setPress2] = useState('')
  console.log(fuel,"1");
  console.log(puncture,"2");
  console.log(mechanic,"3");
  const onFuel = () => {
    if (press == true) {
      setFuel("fuel")
    }
    else {
      setFuel(null)
    }
    console.log(fuel,"inside");
  }
  const onMechanic = () => {
    if (press1 == true) {
      setMechanic("mechanic");
    }
    else {
      setMechanic(null)
    }
  }
  const onPuncture = () => {
    if (press2 == true) {
      setPuncture("puncture")
    }
    else {
      setPuncture(null)
    }
  }
  const storeChoosed = async () => {
    try {
      if (fuel == true && press == true) {
        await AsyncStorage.setItem('FUEL_DATA', "fuel").then(
        console.log(fuel, "fuel stored to Asyncstorage"));
      }
      if (mechanic == true && press1 == true) {
        await AsyncStorage.setItem('MECHANIC_DATA',"mechanic");
        console.log(mechanic, "mechanic stored to Asyncstorage");

      }
      if (puncture == true && press2 == true) {
        await AsyncStorage.setItem('PUNCTURE_DATA', "puncture");
        console.log(puncture, "puncture stored to Asyncstorage");

      }
    } catch (error) {
      console.log(error);
    }
  }
  const onNext = () => {
    if (press == true || press1 == true || press2 == true) {
      console.log("helooooooo");
      storeChoosed();
      navigation?.navigate('signUp')
    } else {
      Alert.alert("Choose any one option which will you provide service")
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B', }}>
      <View style={{
        height: hp(6.15),
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderRadius: 14,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
        <TouchableOpacity style={{ height: hp(3.07), width: wp(6.66), marginLeft: wp(4), marginTop: hp(1.84) }} onPress={() => navigation.goBack('')}>
          <Image source={image?.backicon} style={{ height: hp(3.07), width: wp(6.66), }} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Text style={{
            fontSize: RFValue(40, 812),
            fontWeight: 'bold',
            marginLeft: wp(23)
          }}>FuelOn</Text>
        </View>
      </View>
      <View style={{
        marginTop: hp(3.69),
        width: wp(80.66),
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginLeft: wp(10.66),
      }}>
        <Text style={{ fontSize: RFValue(40, 812), fontWeight: 'bold' }}>Choose which service you will provide</Text>
      </View>
      <View style={{ alignItems: 'center', }}>

        <TouchableOpacity style={styles.TextStyle} onPress={() => {
          setPress(!press);
          setFuel(!fuel);
          return false;

        }}>
          <Text style={{ fontSize: RFValue(20, 812) }}>Fuel service provider</Text>
          <Image source={press == true ? image.check : image.null} style={{ height: 30, width: 30 }} resizeMode='contain' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.TextStyle} onPress={() => {
          setPress1(!press1);
          setMechanic(!mechanic);
          return false;
        }}>
          <Text style={{ fontSize: RFValue(20, 812) }}>Mechanic service provider</Text>
          <Image source={press1 == true ? image.check : image.null} style={{ height: 30, width: 30 }} resizeMode='contain' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.TextStyle} onPress={() => {
          setPress2(!press2);
          setPuncture(!puncture);
          return false;
        }}>
          <Text style={{ fontSize: RFValue(20, 812) }}>Puncture service provider</Text>
          <Image source={press2 == true ? image.check : image.null} style={{ height: 30, width: 30 }} resizeMode='contain' />
        </TouchableOpacity>

      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <TouchableOpacity style={{ height: 0, }} onPress={onNext}>
          <ImageBackground source={image.rectangle} style={styles.iconStyle} resizeMode={'contain'} >
            <Text style={styles.textStyle3}>Next</Text>
          </ImageBackground>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default ChooseScreen

const styles = StyleSheet.create({
  TextStyle: {
    flexDirection: 'row',
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: hp(4.12),
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    alignItems: 'center',
    height: hp(7.28),
    width: wp(80.66),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  iconStyle: {
    height: hp(14.77),
    width: wp(32),
    alignItems: 'center',
    marginTop: hp(2.46),
    justifyContent: 'flex-end',
    paddingVertical: 20,


  },
  textStyle3: {
    fontWeight: 'bold',
    fontSize: RFValue(26, 812),
    color: '#F4C50B',
    alignSelf: 'center',

  },

})