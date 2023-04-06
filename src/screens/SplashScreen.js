import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const SplashScreen = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=>{
            navigation.navigate('vc');
        },2000)
    },[])
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('vc')}>
    <View >
      <Image source={image.splash} style={{height:'100%',width:'100%' }} />
    </View>
      </TouchableOpacity>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})