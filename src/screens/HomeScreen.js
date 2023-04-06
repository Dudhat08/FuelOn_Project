import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Platform, } from 'react-native'
import React, { useRef, useState } from 'react'
import { SearchBar } from '../Components/SearchBar.js';
import { image } from '../Helper/ImageHelper.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon.js';
import BottomNavigation from '../Navigators/BottomNavgation.js';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FuelButton from '../Components/FuelButton.js';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const HomeScreen = ({ navigation }) => {
  const animation = useRef(null);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B' }}>
      <View style={{
        height: hp(6.15),
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderRadius: 14,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: hp(0.49) },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>

        <Text style={{ fontSize: RFValue(40, 812), fontWeight: 'bold', marginLeft: wp(34.66) }}>FuelOn</Text>
        <TouchableOpacity style={{ height: hp(3.07), width: wp(6.66), marginLeft: wp(22.13), marginTop: hp(1.82) }} onPress={() => navigation.navigate('Notifications')}>
          <Image source={image.notification} style={{ height: hp(3.07), width: wp(6.66), }} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
      <View >
        <View style={styles.viewStyle1}>
          <View style={{ flexDirection: 'row', }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 15, marginRight: wp(10.66) }}>Choose Your Fuel Type</Text>
            </View>
            <View style={{ justifyContent: 'space-around' }}>
              <TouchableOpacity style={{ marginTop: 12, height: hp(3), width: wp(10), justifyContent: 'center', }} onPress={() => navigation.navigate('fuel')}>
                <Image source={image.forward} style={{ height: hp(4.92), width: wp(10.66), }} resizeMode='contain' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 15, }}>
            <View>
              <FuelButton
                ScreenNavigator={() => navigation.navigate('petrol')}
                Name={'Petrol'}
                url={image.fuel}
              />
            </View>
            <View style={{ marginLeft: 7 }}>
              <FuelButton
                ScreenNavigator={() => navigation.navigate('gas')}
                Name={'Gas'}
                url={image.gas}
              />
            </View>
            <View style={{ marginLeft: 7 }}>
              <FuelButton
                ScreenNavigator={() => navigation.navigate('diesel')}
                Name={'Diesel'}
                url={image.diesel}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('mechanic')} >
          <View style={styles.viewStyle}>
            <Image source={image.mechanic} resizeMode={'contain'} style={{ height: hp(12.31), width: wp(26.66), marginLeft: 20 }} />
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 30, marginTop: 15, marginLeft: 20 }} >Mechanical {'\n'}Services</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('puncture')} >
          <View style={styles.viewStyle}>
            <Image source={image.puncture} resizeMode={'contain'} style={{ height: hp(12.31), width: wp(26.66), marginLeft: 20 }} />
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 30, marginTop: 15, marginLeft: 20 }} >Puncture {'\n'}Services</Text>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cecece',
    height: 50,
    borderRadius: 15,
    margin: 15,
    flexDirection: 'row',
    marginTop: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  viewStyle: {
    borderRadius: 12,
    margin: 15,
    marginTop: 10,
    backgroundColor: '#cecece',
    flexDirection: 'row',
    width: wp(90),
    padding: 20,
    height: hp(17.75),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    alignSelf: 'center',
  },
  viewStyle1: {
    borderRadius: 12,
    width: wp(90),
    height: 200,
    alignSelf: 'center',
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cecece',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    marginBottom: hp(1.84),
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
  imageStyle2: {
    borderRadius: 12,
    backgroundColor: '#F4C50B',
    marginLeft: 10
  },
  imageStyle3: {
    borderRadius: 12,
    backgroundColor: '#F4C50B',
    marginLeft: 10
  },

})
export default HomeScreen;