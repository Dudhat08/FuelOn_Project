import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {heightPercentageToDP as hp ,widthPercentageToDP as wp} from 'react-native-responsive-screen'

const FuelButton = ({ScreenNavigator,url,Name,navigation}) => {
    return(
        <View style={styles.imageStyle1}>
                <TouchableOpacity onPress={ScreenNavigator} style={{
                  shadowColor: '#171717',
                  shadowOffset: { width: -2, height: 4 },
                  shadowOpacity: 0.4,
                  shadowRadius: 4,
  
                }}>
                  <Image source={url} style={{ height: hp(8.62), width: wp(26.66), marginTop: 10, shadowColor: '#171717' }} resizeMode={'contain'} />
                  <View style={styles.petrolStyle}>
                    <Text style={{fontSize: 20,fontWeight: 'bold',color: '#F4C50B',}} >{Name}</Text>
                  </View>
                  
                </TouchableOpacity>
              </View>
      )
            }

export default FuelButton

const styles = StyleSheet.create({
    imageStyle1: {
        borderRadius: 12,
        backgroundColor: '#F4C50B',
        height:hp(14.77) ,
      },
      petrolStyle: {
        backgroundColor: 'black',
        marginTop: hp(1.4),
        height: 30,
        borderBottomEndRadius:12,
        borderBottomStartRadius:12,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
      },
})