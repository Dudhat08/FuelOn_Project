import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { image } from '../Helper/ImageHelper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const Payment = ({navigation}) => {
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
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 73 }}>Payment</Text>
                <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 83, marginTop: 15 }} onPress={() => navigation.navigate('Notifications')}>
                    <Image source={image.notification} style={{ height: 25, width: 25, marginLeft: -7 }} resizeMode={'contain'} />
                </TouchableOpacity>

            </View>
            <View>
                <Text style={styles.testStyle}>UPI</Text>
                <View style={styles.viewStyle}>
                    <TouchableOpacity style={{ height: 50, width: 90, marginTop: 20 }}>
                        <Image source={image.gpay} resizeMode={'contain'} style={{ height: 90, width: 90, marginTop: -20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 70, width: 70, marginLeft: 20 }} >
                        <Image source={image.phonepe} resizeMode={'contain'} style={{ height: 70, width: 70, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 50, width: 90, marginLeft: 20, marginTop: 20 }} >
                        <Image source={image.paytm} resizeMode={'contain'} style={{ height: 90, width: 90, marginTop: -20 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.testStyle}>CARD</Text>
                <View style={styles.viewStyle}>
                    <TouchableOpacity style={{ height: 40, width: 100, marginTop: 30, marginLeft: -15 }}>
                        <Image source={image.visa} resizeMode={'contain'} style={{ height: 100, width: 100, marginTop: -30, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 70, width: 70, marginLeft: 20, marginTop: 5 }} >
                        <Image source={image.mastercard} resizeMode={'contain'} style={{ height: 80, width: 80, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 40, width: 100, marginLeft: 20, marginTop: 30 }} >
                        <Image source={image.rupay} resizeMode={'contain'} style={{ height: 110, width: 110, marginTop: -45 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
          <TouchableOpacity style={{ height: 0, }}>
            <ImageBackground source={image.rectangle} style={styles.iconStyle} resizeMode={'contain'} >
              <Text style={styles.textStyle3}>Pay</Text>
            </ImageBackground>
          </TouchableOpacity>

        </View>

        </SafeAreaView>
    )
}

export default Payment;

const styles = StyleSheet.create({
    testStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,

    },
    viewStyle: {
        borderRadius: 12,
        margin: 15,
        marginTop: 10,
        backgroundColor: '#cecece',
        flexDirection: 'row',
        height: 100,
        padding: 25,
        height: 145,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        justifyContent: 'space-around',
        alignContent: 'center'

    },
    textStyle3: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#F4C50B',
        alignSelf: 'center',
    
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

})