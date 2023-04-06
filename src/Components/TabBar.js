import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { image } from '../Helper/ImageHelper'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const TabBar = ({ navigation }) => {
    const handl1 = () => {
        navigation?.navigate('Home')
    };
    return (

        <View style={{
            height: '8%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#cecece',
            alignItems: 'center',
            // shadowColor: '#171717',
            // shadowOffset: { width: -2, height: 4 },
            // shadowOpacity: 0.5,
            // shadowRadius: 6,

        }}>
            <TouchableOpacity onPress={handl1}>
                <Image source={image?.home} style={{ height: 35, width: 35, justifyContent:'center' }} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('fuel')}>
                <Image source={image?.diesel} style={{ height: 35, width: 35, justifyContent:'center' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('mechanic')}>
                <Image source={image?.mechanic} style={{ height: 35, width: 35, justifyContent:'center' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('puncture')}>
                <Image source={image?.puncture} style={{ height: 35, width: 35,justifyContent:'center' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('user')}>
                <Image source={image?.account} style={{ height: 35, width: 35, justifyContent:'center' }} />
            </TouchableOpacity>
        </View>
    )
}

export default TabBar;

const styles = StyleSheet.create({})