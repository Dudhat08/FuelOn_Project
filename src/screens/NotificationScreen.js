import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { image } from '../Helper/ImageHelper';

const NotificationScreen = ({navigation}) => {
  const {navigate}= useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B', }}>

<View style={{
        height: 50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderRadius: 14,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
        <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 15, marginTop: 15 }} onPress={() => navigation.goBack('')}>
          <Image source={image?.backicon} style={{ height: 25, width: 25, }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 45 }}>Notifications</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:23,fontWeight:'bold'}}>
          There are no Notifications for you
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})