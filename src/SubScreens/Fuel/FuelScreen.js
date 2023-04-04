import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../Helper/ImageHelper'



const FuelScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, /*justifyContent: 'center', alignItems: 'center',*/ backgroundColor: '#F4C50B', }}>
      <View>
      <View style={{
        height: 50, flexDirection: 'row', borderBottomWidth: 1, borderRadius: 14, shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
        <TouchableOpacity style={{height:25,width:25,marginLeft:15,marginTop:15}} onPress={()=>navigation.navigate('Home')}>
        <Image source={image?.backicon} style={{ height: 25, width: 25,}} />
        </TouchableOpacity> 
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 90 }}>FuelOn</Text>
        <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 83, marginTop: 15 }} onPress={() => navigation.navigate('Notifications')}>
          <Image source={image.notification} style={{ height: 25, width: 25, }} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
        
        <View style={styles.viewStyle1}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 22, marginTop: 15 }}>Choose Your Fuel Type</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 17, }}>
            <View style={styles.imageStyle1}>
              <TouchableOpacity onPress={() => navigation.navigate('petrol')} style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              }}>
                <Image source={image.fuel} style={{ height: 100, width: 150, marginTop: 10, shadowColor: '#171717' }} resizeMode={'contain'} />
                <Text style={styles.petrolStyle}>Petrol</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.imageStyle2}>
              <TouchableOpacity onPress={() => navigation.navigate('diesel')} style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              }}>
                <Image source={image.diesel} style={{ height: 100, width: 150, marginTop: 10 }} resizeMode={'contain'} />
                <Text style={styles.dieselStyle} >Diesel</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.imageStyle3}>
              <TouchableOpacity style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              }} onPress={()=>navigation.navigate('lpg')}>
                <Image source={image.lpg} style={{ height: 100, width: 150, marginTop: 10 }} resizeMode={'contain'} />
                <Text style={styles.gasStyle} >LPG</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageStyle4}>
              <TouchableOpacity style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              }} onPress={()=>navigation.navigate('cng')}>
                <Image source={image.cng} style={{ height: 100, width: 150, marginTop: 10 }} resizeMode={'contain'} />
                <Text style={styles.gasStyle} >CNG</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.imageStyle5}>
              <TouchableOpacity style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              }} onPress={()=>navigation.navigate('biodiesel')} >
                <Image source={image.bio_diesel} style={{ height: 100, width: 150, marginTop: 10 }} resizeMode={'contain'} />
                <Text style={styles.bioDieselStyle} >Bio-Diesel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageStyle6}>
              <TouchableOpacity style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              }} onPress={()=>navigation.navigate('ethanol')}>
                <Image source={image.ethanol} style={{ height: 100, width: 150, marginTop: 10 }} resizeMode={'contain'} />
                <Text style={styles.EthanolStyle} >Ethanol</Text>
              </TouchableOpacity>
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
    marginTop: 25,
    backgroundColor: '#cecece',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    height: 600,
    marginLeft:15,
  },
  imageStyle1: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#F4C50B',
    height: 120,
    marginLeft: 6
  },
  imageStyle2: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#F4C50B',
    marginLeft: 15
  },
  imageStyle3: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#F4C50B',
    marginLeft: 23,
    marginTop: 15
  },
  imageStyle4: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#F4C50B',
    height: 120,
    marginLeft: 15,
    marginTop: 15
  },
  imageStyle5: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#F4C50B',
    height: 120,
    marginLeft: 23,
    marginTop: 30,
  },
  imageStyle6: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#F4C50B',
    height: 120,
    marginLeft: 15,
    marginTop: 30,
  },
  petrolStyle: {
    backgroundColor: '#000',
    color: '#F4C50B',
    marginTop: 9,
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 42,
    paddingTop: 2,
  },
  dieselStyle: {
    backgroundColor: '#000',
    color: '#F4C50B',
    marginTop: 9,
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 47,
    paddingTop: 2,
    borderRadius: 12,
  },
  gasStyle: {

    backgroundColor: '#000',
    color: '#F4C50B',
    marginTop: 9,
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    paddingTop: 2,
    textAlignVertical:'center',
borderRadius:12


  },
  bioDieselStyle: {
    backgroundColor: '#000',
    color: '#F4C50B',
    marginTop: 9,
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 28,
    paddingTop: 2

  },
  EthanolStyle: {
    backgroundColor: '#000',
    color: '#F4C50B',
    marginTop: 9,
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingTop: 2

  },

})