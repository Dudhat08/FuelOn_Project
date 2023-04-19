import { StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { image } from '../Helper/ImageHelper'
import { useNavigation } from '@react-navigation/native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Header = ({navigation,Back,notifi,Name}) => {
  return (
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
        <TouchableOpacity style={{ height: hp(3.07),width: wp(6.66),}} onPress={ Back}>
          <Image source={image?.backicon} style={{ height: hp(3.07), width: wp(6.66), }} />
        </TouchableOpacity>
        </View>
        <View style={{alignSelf:'center',}}>
        <Text style={{ fontSize: RFValue(35,812), fontWeight: 'bold', }}>{Name}</Text>
        </View>
        <View style={{alignSelf:'center', marginRight:wp(5)}}>
        <TouchableOpacity style={{ height: hp(3.07), width: wp(6.66)}} onPress={ notifi}>
          <Image source={image.notification} style={{ height: hp(3.07), width: wp(6.66), }} resizeMode={'contain'} />
        </TouchableOpacity>
        </View>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({})