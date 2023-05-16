import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { RFValue } from 'react-native-responsive-fontsize'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { StackActions } from '@react-navigation/native'

const MechanicRequest = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B' }}>

      <Header
        Back={() => navigation.goBack('')}
        notifi={() => navigation.navigate('Notifications')}
        Name={'FuelOn'}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>You are in Mechanic Request screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default MechanicRequest;

const styles = StyleSheet.create({})