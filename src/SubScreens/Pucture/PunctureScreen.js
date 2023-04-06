import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image } from '../../Helper/ImageHelper';
import Header from '../../Components/Header';
import AutomobileService from '../../Components/AutomobileService';

const PunctureScreen= ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B', }}>
      <Header
         Back={()=>navigation.goBack('')}
         notifi={()=> navigation.navigate('Notifications')}
         Name={'Puncture'}
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

export default PunctureScreen;

