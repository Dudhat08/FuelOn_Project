import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { image } from '../../Helper/ImageHelper';

const GasScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: '#F4C50B', }}>
      <View>
      <View style={{
        height: 50, flexDirection: 'row', borderBottomWidth: 1, borderRadius: 14, shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
        <TouchableOpacity style={{height:25,width:25,marginLeft:15,marginTop:15}} onPress={()=>navigation.goBack('')}>
        <Image source={image?.backicon} style={{ height: 25, width: 25,}} />
        </TouchableOpacity> 
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 90 }}>FuelOn</Text>
        <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 83, marginTop: 15 }} onPress={() => navigation.navigate('Notifications')}>
          <Image source={image.notification} style={{ height: 25, width: 25, }} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('lpg')} >
          <View style={styles.viewStyle}>
            <Image source={image.lpg} resizeMode={'contain'} style={{ height: 100, width: 100, marginLeft: 20 }} />
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 30, marginTop: 35, marginLeft: 30 }} >LPG Gas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('cng')} >
          <View style={styles.viewStyle}>
            <Image source={image.cng} resizeMode={'contain'} style={{ height: 100, width: 100, marginLeft: 20 }} />
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 30, marginTop: 30, marginLeft: 30 }} >CNG Gas</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default GasScreen

const styles = StyleSheet.create({
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

})