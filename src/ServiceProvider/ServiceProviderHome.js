import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { RFValue } from 'react-native-responsive-fontsize'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { StackActions } from '@react-navigation/native'

const ServiceProviderHome = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B' }}>
     <View style={{
        height: hp(6.15), 
        width:wp(95),
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderRadius: 14, 
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginLeft:wp(4),
        justifyContent:'space-between',
      }}>
         <View style={{alignSelf:'center', marginLeft:wp(2),}}>
        <TouchableOpacity style={{ height: hp(3.07),width: wp(6.66),}} onPress={()=>navigation.goBack('')}>
          <Image source={image?.backicon} style={{ height: hp(3.07), width: wp(6.66), }} />
        </TouchableOpacity>
        </View>
        <View style={{alignSelf:'center'}}>
        <Text style={{ fontSize: RFValue(40, 812), fontWeight: 'bold',  }}>FuelOn</Text>
        </View>
        <View style={{alignSelf:'center', marginRight:wp(5)}}>
        <TouchableOpacity style={{ height: hp(3.07), width: wp(6.66), }} onPress={() => navigation.navigate('Notifications')}>
          <Image source={image.notification} style={{ height: hp(3.07), width: wp(6.66), }} resizeMode={'contain'} />
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>Home</Text>
      </View>
      </SafeAreaView>
  )
}

export default ServiceProviderHome

const styles = StyleSheet.create({})