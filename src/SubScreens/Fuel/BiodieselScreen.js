import { Button, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, } from 'react-native'
import React, { useRef, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../Helper/ImageHelper'

const countries = ["Egypt", "Canada", "Australia", "Ireland"]
const BiodieselScreen = ({ navigation }) => {
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
  const price = 75
  let [result, setResult] = useState('');

  calculateInputs = () => {
    let output = parseFloat(input1) * parseFloat(price);
    output = output.toFixed(2);
    setResult(output)
    result = result.toString();
  }
  
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
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 65 }}>Bio-Diesel</Text>
        <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 53, marginTop: 15 }} onPress={() => navigation.navigate('Notifications')}>
          <Image source={image.notification} style={{ height: 25, width: 25 }} resizeMode={'contain'} />
        </TouchableOpacity>

      </View>
      <View style={styles.inputStyle}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          fontSize={20}
          flex={1}
          marginLeft={7}
          placeholder="Name"

        />
      </View>
      <View style={styles.inputStyle}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          fontSize={20}
          flex={1}
          marginLeft={7}
          placeholder="Mobile no."
          keyboardType='numeric'

        />
      </View>
      <View style={styles.inputStyle}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          fontSize={20}
          flex={1}
          marginLeft={7}
          placeholder="Enter your Address"

        />
      </View>

      <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, marginLeft: 90, width: 250, height: 30 }}>
        <Image source={image.location} style={{ height: 30, width: 30, }} />
        <Text style={{
          fontSize: 22,
          shadowColor: '#171717',
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
        }}>
          Use current Location
        </Text>
      </TouchableOpacity>
      <View style={styles.inputStyle1}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          fontSize={20}
          flex={1}
          marginLeft={7}
          placeholder="Quantity"
          keyboardType="numeric"
          onChangeText={(text) => setInput1(text)}
          value={input1}

        />
        <Text style={{ fontSize: 20, marginTop: 3.5 }}>Ltrs.</Text>
      </View>
      <Text style={{ fontSize: 30, marginLeft: 290, marginTop: -50, marginLeft: 230, fontWeight: 'bold' }} >{price} ₹/L.</Text>
      <View style={styles.inputStyle2}>
        <Text style={{ fontSize: 25 }}>{result}  ₹</Text>
      </View>
      <TouchableOpacity onPress={calculateInputs} style={{ height: 60, width: 140, marginTop: -59, marginLeft: 230 }} >
        <View style={styles.inputStyle3}>
          <Text style={{
            fontSize: 25,
            marginTop: -3,
            fontWeight: 'bold',
            color: '#F4C50B',
            marginLeft: 10,
            shadowColor: '#ffffff',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.8,
            shadowRadius: 8,
          }} >Amount</Text>
        </View>

      </TouchableOpacity>
     
       <View style={{flexDirection:'row'}}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => handleOptionPress(option.value)}
          style={{
            flexDirection: 'row',
            marginTop:40,
            marginLeft:40
          }}
        >
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor:  '#000000',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft:5
            }}
          >
            {selectedValue === option.value && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: 'black',
                }}
              />
            )}
          </View>
          <Text style={{ marginLeft: 10,fontSize:20 }}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View>
          <TouchableOpacity style={{ height: 0, }} onPress={() => navigation?.navigate('payment')}>
            <ImageBackground source={image.rectangle} style={styles.iconStyle} resizeMode={'contain'} >
              <Text style={styles.textStyle3}>Order</Text>
            </ImageBackground>
          </TouchableOpacity>

        </View>
    </SafeAreaView>
  )
}

export default  BiodieselScreen

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    flexDirection: 'row',
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: 25,
    padding: 15,
    height: 60,
    width: 325,
    marginLeft: 40,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  inputStyle1: {
    fontSize: 20,
    flexDirection: 'row',
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: 25,
    padding: 15,
    height: 60,
    width: 170,
    marginLeft: 40,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  inputStyle2: {
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: 40,
    padding: 15,
    height: 60,
    width: 170,
    marginLeft: 40,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  inputStyle3: {
    backgroundColor: '#000000',
    borderRadius: 20,
    marginTop: 0,
    padding: 15,
    height: 60,
    width: 140,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  iconStyle: {
    height: 120,
    width: 120,
    marginLeft: 136.5,
    marginTop: 20,
    justifyContent: 'flex-end',
    paddingVertical: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  textStyle3: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#F4C50B',
    alignSelf: 'center',

  },


})