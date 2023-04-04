import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image } from '../../Helper/ImageHelper';

const PunctureScreen= ({ navigation }) => {

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
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 73 }}>Puncture</Text>
        <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 65, marginTop: 15 }} onPress={() => navigation.navigate('Notifications')}>
          <Image source={image.notification} style={{ height: 25, width: 25, }} resizeMode={'contain'} />
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
          placeholder="Vehical's company and model"

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
          editable
          multiline
          autoCorrect={false}
          fontSize={20}
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
              height: 60,
              width: 120,
              marginLeft: 140,
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

    </SafeAreaView>

  )
}

export default PunctureScreen

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    flexDirection: 'row',
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: 20,
    padding: 15,
    height: 50,
    width: 350,
    marginLeft: 22,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  inputStyle1: {
    fontSize: 20,
    backgroundColor: '#cecece',
    borderRadius: 20,
    marginTop: 20,
    height: 200,
    width: 350,
    marginLeft: 22,
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  iconStyle: {
    height: 120,
    width: 120,
    marginLeft: 136.5,

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