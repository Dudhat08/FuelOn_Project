import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from 'react-native'
import React, { useRef, useState } from 'react'
import { SearchBar } from '../Components/SearchBar.js';
import { image } from '../Helper/ImageHelper.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon.js';
import BottomNavigation from '../Navigators/BottomNavgation.js';

const HomeScreen = ({ navigation }) => {
  const animation = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B',justifyContent:'space-around',alignItems:'center' }}>
      <View style={{
        height: 50, flexDirection: 'row', borderBottomWidth: 1, borderRadius: 14, shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>

        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 130 }}>FuelOn</Text>
        <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 83, marginTop: 15 }} onPress={() => navigation.navigate('Notifications')}>
          <Image source={image.notification} style={{ height: 25, width: 25, }} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
       <View >
        {/* <View style={styles.container}>
          <Image source={image.search} style={{ height: 30, width: 30, margin: 10 }} />
          <TextInput
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='search'
          />
        </View>  */}
        <View style={styles.viewStyle1}>
          <View style={{ flexDirection: 'row',alignItems:'center' }}>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 22, marginTop: 15 }}>Choose Your Fuel Type</Text>
            <TouchableOpacity style={{ marginLeft: 60, marginTop: 12 }} onPress={() => navigation.navigate('fuel')}>
              <Image source={image.forward} style={{ height: 40, width: 40,paddingRight:'3%',marginRight:20 }} resizeMode='contain' />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', padding: 17 }}>
            <View style={styles.imageStyle1}>
              <TouchableOpacity onPress={() => navigation.navigate('petrol')} style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              }}>
                <Image source={image.fuel} style={{ height: 70, width: 100, marginTop: 10, shadowColor: '#171717' }} resizeMode={'contain'} />
                <Text style={styles.petrolStyle}>Petrol</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageStyle3}>
              <TouchableOpacity onPress={() => navigation.navigate('gas')} style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              }} >
                <Image source={image.gas} style={{ height: 70, width: 100, marginTop: 10 }} resizeMode={'contain'} />
                <Text style={styles.gasStyle} >Gas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageStyle2}>
              <TouchableOpacity onPress={() => navigation.navigate('diesel')} style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
                elevation: 30,
              }}>
                <Image source={image.diesel} style={{ height: 70, width: 100, marginTop: 10 }} resizeMode={'contain'} />
                <Text style={styles.dieselStyle} >Diesel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('mechanic')} >
          <View style={styles.viewStyle}>
            <Image source={image.mechanic} resizeMode={'contain'} style={{ height: 100, width: 100, marginLeft: 20 }} />
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 30, marginTop: 15, marginLeft: 20 }} >Mechanical {'\n'}Services</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('puncture')} >
          <View style={styles.viewStyle}>
            <Image source={image.puncture} resizeMode={'contain'} style={{ height: 100, width: 100, marginLeft: 20 }} />
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
    height: 120,
    padding: 20,
    height: 145,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,

  },
  viewStyle1: {
    borderRadius: 12,
    width:'50%',
    marginLeft:'3.5%',
    // margin: 15,
     marginTop: '4%',
    justifyContent:'center',
    backgroundColor: '#cecece',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
  imageStyle1: {
    borderRadius: 12,
    backgroundColor: '#F4C50B',
    height: 120,
    marginLeft: 3
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
  petrolStyle: {
    backgroundColor: '#000',
    color: '#F4C50B',
    marginTop: 9,
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 24,
    paddingTop: 2
  },
  dieselStyle: {
    backgroundColor: '#000',
    color: '#F4C50B',
    marginTop: 9,
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 24,
    paddingTop: 2
  },
  gasStyle: {
    backgroundColor: '#000',
    color: '#F4C50B',
    marginTop: 9,
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 33,
    paddingTop: 2

  },
  lottie: {
    width: 40,
    height: 40
  },

})
export default HomeScreen;