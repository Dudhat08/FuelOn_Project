import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { image } from '../Helper/ImageHelper'

const ChooseScreen = ({ navigation }) => {
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
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 90 }}>FuelOn</Text>
        
      </View>
            <View style={{ alignItems: 'center', marginTop: 30,shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,}}>
                <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Choose which service you will provide</Text>
            </View>

            <TouchableOpacity style={styles.TextStyle}>
                <Text style={{fontSize:20}}>Fuel service provider</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TextStyle}>
                <Text style={{fontSize:20}}>Mechanic service provider</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TextStyle}>
                <Text style={{fontSize:20}}>Puncture service provider</Text>
            </TouchableOpacity>

            <View>
          <TouchableOpacity style={{ height: 0, }} onPress={() => navigation?.navigate('signUp')}>
            <ImageBackground source={image.rectangle} style={styles.iconStyle} resizeMode={'contain'} >
              <Text style={styles.textStyle3}>Next</Text>
            </ImageBackground>
          </TouchableOpacity>

        </View>
        </SafeAreaView>
    )
}

export default ChooseScreen

const styles = StyleSheet.create({
    TextStyle: {
        flexDirection: 'row',
        backgroundColor: '#cecece',
        borderRadius: 20,
        marginTop: 40,
        padding: 15,
        height: 60,
        width: 325,
        marginLeft: 40,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    iconStyle: {
        height: 120,
        width: 120,
        marginLeft: 136.5,
        marginTop: 50,
        justifyContent: 'flex-end',
        paddingVertical: 20,
        
    
      },
      textStyle3: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#F4C50B',
        alignSelf: 'center',
    
      },

})