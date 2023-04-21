import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useDispatch } from 'react-redux';

const VendorCustomerScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    
    const onPressOption1 = () =>{
        navigation.navigate('choose')
        dispatch({ type: "SELECT_USER_TYPE", payload: "option1" })
    }
    const onPressOption2 = () =>{
        dispatch({ type: "SELECT_USER_TYPE", payload: "option2" })
        navigation.navigate('signUp')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B', justifyContent:'space-around'}}>
            <View style={{
                marginLeft:wp(11.46),
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}>
                <Text style={{ fontSize: RFValue(40,812),fontWeight: 'bold'}}>Welcome</Text>
                <Text style={{ fontSize: RFValue(40,812),fontWeight: 'bold',marginTop:hp(1.23)}}>FuelOn</Text>
            </View>
            <View style={{alignItems:'center',marginTop:hp(-15)}}>
            <TouchableOpacity style={styles.TextStyle} onPress={onPressOption1}>
                <Text style={{ fontSize:RFValue (24,812)}}>Service provider</Text>
            </TouchableOpacity>
            </View>

            <View  style={{alignItems:'center',marginTop:hp(-20)}}>
            <TouchableOpacity style={styles.TextStyle} onPress={onPressOption2}>
                <Text style={{ fontSize: RFValue(24,812) }}>Need a service</Text>
            </TouchableOpacity>
            </View>
           

            <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('login')} >
                <Text style={{
                    fontSize: RFValue(22,812),
                    fontWeight: 'bold',
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    alignItems:'center'
                }}>Already have an account?</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default VendorCustomerScreen

const styles = StyleSheet.create({
    TextStyle: {
        backgroundColor: '#cecece',
        borderRadius: 20,
        height: hp(7.28),
        width: wp(80.66),
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        justifyContent:'center',
        alignItems:'center'

    },
})