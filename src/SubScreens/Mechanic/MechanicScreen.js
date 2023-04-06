import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput,  KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { image } from '../../Helper/ImageHelper';
import Geolocation from '@react-native-community/geolocation';
import AutomobileService from '../../Components/AutomobileService';
import Header from '../../Components/Header';

const MechanicScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B', }}>
      <Header
         Back={()=>navigation.goBack('')}
         notifi={()=> navigation.navigate('Notifications')}
         Name={'Mechanic'}
       />
       <KeyboardAvoidingView
          behavior={'position'}
          enabled={false}
          >
            <AutomobileService/>
      </KeyboardAvoidingView>

    </SafeAreaView>

  )
}

export default MechanicScreen;

