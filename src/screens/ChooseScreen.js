import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const ChooseScreen = ({ navigation }) => {
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
        <TouchableOpacity style={{ height: hp(3.07), width: 25, marginLeft: 15, marginTop: 15 }} onPress={() => navigation.goBack('')}>
          <Image source={image?.backicon} style={{ height: hp(3.07), width: 25, }} />
        </TouchableOpacity>
        <Text style={{ fontSize: RFValue(40, 812), fontWeight: 'bold', marginLeft: 90 }}>FuelOn</Text>

      </View>
      <View style={{
        marginTop: hp(3.69) ,
        width: wp(80.66),
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginLeft:wp(10.66),
      }}>
        <Text style={{ fontSize: RFValue(40, 812), fontWeight: 'bold' }}>Choose which service you will provide</Text>
      </View>
      <View style={{ alignItems: 'center', }}>

        <TouchableOpacity style={styles.TextStyle}>
          <Text style={{ fontSize: RFValue(20, 812) }}>Fuel service provider</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TextStyle}>
          <Text style={{ fontSize: RFValue(20, 812) }}>Mechanic service provider</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TextStyle}>
          <Text style={{ fontSize: RFValue(20, 812) }}>Puncture service provider</Text>
        </TouchableOpacity>

      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <TouchableOpacity style={{ height: 0, }} onPress={() => navigation?.navigate('signUp')}>
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
    padding: 15,
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