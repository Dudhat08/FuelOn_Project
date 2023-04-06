import { Button, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { image } from '../../Helper/ImageHelper'
import Header from '../../Components/Header'
import FuelType from '../../Components/FuelType'


const CngScreen = ({ navigation }) => {
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B', }}>
     <Header
         Back={()=>navigation.goBack('')}
         notifi={()=> navigation.navigate('Notifications')}
         Name={'CNG'}
       />
      <FuelType
       ScreenNavigator={()=>navigation.navigate('payment')}
      
      />
    </SafeAreaView>
  )
}

export default CngScreen;

