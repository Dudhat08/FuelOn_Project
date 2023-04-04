import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { image } from '../Helper/ImageHelper'

const SplashScreen = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=>{
            navigation.navigate('vc');
        },2000)
    },[])
  return (
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate('vc')}>
      <Image source={image.splash} resizeMode={'cover'} style={{height:900,width:403,}}  />
      </TouchableOpacity>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})