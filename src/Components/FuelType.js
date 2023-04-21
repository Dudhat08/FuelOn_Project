import { Button, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { image } from '../Helper/ImageHelper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import { RadioButton } from 'react-native-paper';
// import RadioGroup from 'react-native-radio-buttons-group';
import RadioButton from './RadioButton';
import { selectRadioButton } from '../Redux/action';
import { connect, useDispatch } from 'react-redux';

const FuelType = () => {

    const [cod, setCOD] = useState(false);
    const [upi, setUPI] = useState(false);
    const [card, setCARD] = useState(false);

    const dispatch = useDispatch();

    const onCodPress = (value) => {
        setCOD(true)
        setCARD(false)
        setUPI(false)

    };
    const onUPIPress = (value) => {
        setUPI(true)
        setCARD(false)
        setCOD(false)
        dispatch({ type: "SELECT_RADIO_BUTTON", payload: "upi" })

    };
    const onCardPress = (value) => {
        setCARD(true)
        setUPI(false)
        setCOD(false)
        dispatch({ type: "SELECT_RADIO_BUTTON", payload: "card" })


    };
    const ScreenNavigator = () => {
        if (cod == true) {
            null
        }
        else {
            navigate('payment')

        }
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

            <View style={{ marginTop: hp(3.69), alignItems: 'center', flexDirection: 'row' }}>

                {/* #################################### this is second way to use radio bbutton ##########################*/}


                {/* {radioOptions.map((option) => (
                    <View key={option.value}>
                    <RadioButton
                    value={option.value}
                    status={selectedOption === option.value ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedOption(option.value)}
                    />
                    <Text>{option.label}</Text>
                    </View>
                ))} */}

                {/* <RadioGroup
                    color='#000000'
                    layout='row'
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                    
                /> */}
                <RadioButton
                    lable={'COD'}
                    onpress={onCodPress}
                    selectedValue={cod}

                />
                <RadioButton
                    lable={'UPI'}
                    onpress={onUPIPress}
                    selectedValue={upi}
                />
                <RadioButton
                    lable={'CARD'}
                    onpress={onCardPress}
                    selectedValue={card}
                />
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
// const mapStateToProps = state => ({
//     selectedOption: state.selectedOption,
//   });

//   const mapDispatchToProps = dispatch => ({
//     setSelectedOption: option => dispatch({ type: 'SET_SELECTED_OPTION', payload: option }),
//   });


export default (FuelType);

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
        padding: hp(1.3),
        paddingLeft: wp(4),
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
// 