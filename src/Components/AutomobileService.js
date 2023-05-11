import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import { image } from '../Helper/ImageHelper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const AutomobileService = () => {

    const [location, setLocation] = useState(null);
    const [current, setCurrent] = useState(null);
    console.log(location);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setCurrent(`${latitude}, ${longitude}`);
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, []);

    return (
        <View style={{ justifyContent: 'center',alignItems:'center' }}>
            <View style={{alignItems:'center'}}>
            <View style={styles.inputStyle}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    fontSize={RFValue(20, 812)}
                    flex={1}
                    marginLeft={7}
                    placeholder="Name"

                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    autoCapitalize='none'
                    keyboardType='numeric'
                    autoCorrect={false}
                    fontSize={RFValue(20, 812)}
                    flex={1}
                    marginLeft={7}
                    placeholder="Mobile no."

                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    fontSize={RFValue(20, 812)}
                    flex={1}
                    marginLeft={7}
                    placeholder="Vehical's company and model"

                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          fontSize={RFValue(20,812)}
          flex={1}
          marginLeft={7}
          placeholder="Enter your Address"
          value={location}

        />
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp(1.46), width: 235, height: hp(3.69), }} onPress={() => setLocation(current)} >
                <Image source={image.location} style={{ height: hp(4.69), width: 30, }} />
                <Text style={{
                     fontSize:RFValue(22, 812),
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 4,
                }}>
                    Use current Location
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.inputStyle1}>
                <TextInput
                    editable
                    multiline
                    autoCorrect={false}
                    fontSize={RFValue(20, 812)}
                    flex={1}
                    marginLeft={7}
                    placeholder="Explain your problem in few words"

                />
            </View>
            <View>
                <TouchableOpacity style={{ height: 0, }}>
                    <View
                        style={{
                            borderWidth: 2,
                            height: hp(7.38),
                            width: wp(32),
                            // marginLeft: 140,
                            marginTop: 20,
                            backgroundColor: '#000000',
                            borderRadius: 15,
                            justifyContent: "center",
                            shadowColor: '#171717',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,

                        }}
                    >
                        <Text style={styles.textStyle3}>Submit</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default AutomobileService

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: RFValue(20, 812),
        flexDirection: 'row',
        backgroundColor: '#cecece',
        borderRadius: 20,
        marginTop: 20,
        padding: hp(1.74),
        height: hp(6.15),
        width: wp(93.33),
        // marginLeft: 22,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    inputStyle1: {
        fontSize: RFValue(20, 812),
        backgroundColor: '#cecece',
        borderRadius: 20,
        marginTop: 20,
        height: hp(24.63),
        width: wp(93.33),
        // marginLeft: 22,
        padding: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    iconStyle: {
        height: hp(14.77),
        width: wp(32),
        // marginLeft: 136.5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    textStyle3: {
        fontWeight: 'bold',
        fontSize: RFValue(26, 812),
        color: '#F4C50B',
        alignSelf: 'center',

    },

})