import { Button, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { image } from '../Helper/ImageHelper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const FuelType = ({ navigation, ScreenNavigator, }) => {

    const [selectedValue, setSelectedValue] = useState(null);
    const options = [
        { label: 'COD', value: 'option1' },
        { label: 'UPI', value: 'option2' },
        { label: 'CARD', value: 'option3' },
    ];
    const handleOptionPress = (value) => {
        setSelectedValue(value);
    };
    const { navigate } = useNavigation();
    const [input1, setInput1] = useState('');
    const price = 92.06
    let [result, setResult] = useState('');

    calculateInputs = () => {
        let output = parseFloat(input1) * parseFloat(price);
        output = output.toFixed(2);
        setResult(output)
        result = result.toString();

    }
    return (
        <View>
            <View style={styles.inputStyle}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    fontSize={RFValue(20, 812)}
                    flex={1}
                    marginLeft={wp(1.86)}
                    placeholder="Name"

                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    fontSize={RFValue(20, 812)}
                    flex={1}
                    marginLeft={wp(1.86)}
                    placeholder="Mobile no."
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    fontSize={RFValue(20, 812)}
                    flex={1}
                    marginLeft={wp(1.86)}
                    placeholder="Enter your Address"

                />
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp(1.75), width: 235, height: hp(3.69), alignItems: 'center', alignSelf: 'center' }}>
                <Image source={image.location} style={{ height: hp(4.69), width: wp(8) }} />
                <Text style={{
                    fontSize: RFValue(22, 812),
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 4,
                }}>
                    Use current Location
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: hp(2.46), marginLeft: wp(4), }}>
                <View style={styles.inputStyle1}>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        fontSize={RFValue(20, 812)}
                        flex={1}
                        marginLeft={wp(1.86)}
                        placeholder="Quantity"
                        keyboardType="numeric"
                        onChangeText={(text) => setInput1(text)}
                        value={input1}

                    />
                    <Text style={{ fontSize: RFValue(20, 812), }}>Ltrs.</Text>
                </View>
                <Text style={{ fontSize: RFValue(30, 812), fontWeight: 'bold', marginLeft: wp(5), marginTop: hp(0.49) }} >{price} ₹/L.</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.inputStyle2}>
                    <Text style={{ fontSize: RFValue(25, 812) }}>{result}  ₹</Text>
                </View>
                <TouchableOpacity onPress={calculateInputs} style={{
                    marginTop: hp(5),
                    height: hp(7.30),
                    width: wp(43),
                    marginLeft: wp(4),
                }} >
                    <View style={styles.inputStyle3}>
                        <Text style={{
                            fontSize: RFValue(25, 812),
                            fontWeight: 'bold',
                            color: '#F4C50B',
                            shadowColor: '#ffffff',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 0.8,
                            shadowRadius: 8,
                        }} >Amount</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        onPress={() => handleOptionPress(option.value)}
                        style={{
                            flexDirection: 'row',
                            marginTop: hp(4.92),
                            marginLeft: wp(10.66),
                        }}
                    >
                        <View
                            style={{
                                height: hp(2.95),
                                width: wp(6.4),
                                borderRadius: 12,
                                borderWidth: 2,
                                borderColor: '#000000',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: wp(1.33)
                            }}
                        >
                            {selectedValue === option.value && (
                                <View
                                    style={{
                                        height: hp(1.47),
                                        width: wp(3.2),
                                        borderRadius: 6,
                                        backgroundColor: 'black',
                                    }}
                                />
                            )}
                        </View>
                        <Text style={{ marginLeft: wp(2.66), fontSize: RFValue(20, 812) }}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                <TouchableOpacity style={{ height: 0, }} onPress={ScreenNavigator}>
                    <ImageBackground source={image.rectangle} style={styles.iconStyle} resizeMode={'contain'} >
                        <Text style={styles.textStyle3}>Order</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default FuelType

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
        marginLeft: wp(4),
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    inputStyle1: {
        fontSize: RFValue(20, 812),
        flexDirection: 'row',
        backgroundColor: '#cecece',
        borderRadius: 20,
        padding: hp(1.74),
        height: hp(6.15),
        width: wp(45.33),
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    inputStyle2: {
        backgroundColor: '#cecece',
        borderRadius: 20,
        marginTop: hp(5),
        padding: hp(1.74),
        height: hp(6.15),
        width: wp(45.33),
        marginLeft: wp(4),
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    inputStyle3: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: hp(1.74),
        height: hp(7.30),
        width: wp(43),
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: "center",
        justifyContent: 'center'

    },
    iconStyle: {
        height: hp(14.77),
        width: wp(32),
        marginLeft: 136.5,
        marginTop: hp(2.46),
        justifyContent: 'flex-end',
        paddingVertical: hp(2.46),
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