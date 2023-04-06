import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../Helper/ImageHelper'
import FuelButton from '../../Components/FuelButton'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Header from '../../Components/Header'



const FuelScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, /*justifyContent: 'center', alignItems: 'center',*/ backgroundColor: '#F4C50B', }}>
      <View>
       <Header
         Back={()=>navigation.goBack('')}
         notifi={()=> navigation.navigate('Notifications')}
         Name={'FuelOn'}
       />
        <View style={styles.viewStyle1}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 22, marginTop: 15 }}>Choose Your Fuel Type</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 17,justifyContent:'space-around' }}>
            <View style={{marginLeft:7}}>
              <FuelButton
                ScreenNavigator={()=>navigation.navigate('petrol')}
                Name={'Petrol'}
                url={image.fuel}
              />
            </View>
            <View style={{ marginLeft: 7 }}>
              <FuelButton
                ScreenNavigator={()=>navigation.navigate('diesel')}
                Name={'Diesel'}
                url={image.diesel}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding: 17,justifyContent:'space-around' }}>
            <View style={{ marginLeft: 7 }}>
              <FuelButton
                ScreenNavigator={()=>navigation.navigate('lpg')}
                Name={'LPG'}
                url={image.lpg}
              />
            </View>
            <View style={{ marginLeft: 7, }}>
              <FuelButton
                ScreenNavigator={()=>navigation.navigate('cng')}
                Name={'CNG'}
                url={image.cng}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding: 17,justifyContent:'space-around' }}>
            <View style={{ marginLeft: 7 }}>
              <FuelButton
                ScreenNavigator={()=>navigation.navigate('biodiesel')}
                Name={'Bio-diesel'}
                url={image.bio_diesel}
              />
            </View>
            <View style={{ marginLeft: 7 }}>
              <FuelButton
               ScreenNavigator={()=>navigation.navigate('ethanol')}
                Name={'Ethanol'}
                url={image.ethanol}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FuelScreen

const styles = StyleSheet.create({
  viewStyle1: {
    borderRadius: 12,
    margin: 15,
    marginTop: hp(4.07),
    backgroundColor: '#cecece',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    height:hp(70) ,
    // justifyContent:'space-around',
    // alignItems:'center'
  },
})