import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React from 'react';
import { image } from '../Helper/ImageHelper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import Header from './Header';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';




const Payment = ({ navigation }) => {

  const temp = useSelector(state => state.radioButtonValue);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B' }}>
      <Header
        Back={() => navigation.goBack('')}
        notifi={() => navigation.navigate('Notifications')}
        Name={'Payment'}
      />
      <View>
        <Text style={temp == 'upi' ? styles.testStyle : styles.testStyle1}>UPI</Text>
        <View style={styles.viewStyle}>
          <TouchableOpacity
            disabled={temp == 'upi' ? false : true}
            style={{ height: hp(6.15), width: wp(24), justifyContent: 'center' }}>
            <Image
              source={image.gpay}
              resizeMode={'contain'}
              style={temp == 'upi' ? { height: hp(11.08), width: wp(24) } : { height: hp(11.08), width: wp(24), tintColor: 'grey' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={temp == 'upi' ? false : true}
            style={{
              height: hp(8.62),
              width: wp(18.66),
              justifyContent: 'center',
            }}>
            <Image
              source={image.phonepe}
              resizeMode={'contain'}
              style={temp == 'upi' ? { height: hp(8.62), width: 70 } : { height: hp(8.62), width: 70, tintColor: 'grey' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={temp == 'upi' ? false : true}
            style={{ height: hp(6.15), width: wp(24), justifyContent: 'center' }}>
            <Image
              source={image.paytm}
              resizeMode={'contain'}
              style={temp == 'upi' ? { height: hp(11.08), width: wp(24) } : { height: hp(11.08), width: wp(24), tintColor: 'grey' }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={temp == 'card' ? styles.testStyle : styles.testStyle1}>CARD</Text>
        <View style={styles.viewStyle1}>
          <TouchableOpacity
            disabled={temp == 'card' ? false : true}
            style={{ height: hp(4.92), width: 100, justifyContent: 'center' }}>
            <Image
              source={image.visa}
              resizeMode={'contain'}
              style={[
                temp == 'card' ? styles?.main : { height: 100, width: 100, tintColor: 'grey' },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={temp == 'card' ? false : true}
            style={{
              height: hp(8.62),
              width: wp(21.33),
              justifyContent: 'center',
            }}>
            <Image
              source={image.mastercard}
              resizeMode={'contain'}
              style={
                temp == 'card' ? { height: hp(9.85), width: wp(21.33) } : { height: hp(9.85), width: wp(21.33), tintColor: 'grey' }
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={temp == 'card' ? false : true}
            style={{ height: hp(4.92), width: wp(26.66) }}>
            <Image
              source={image.rupay}
              resizeMode={'contain'}
              style={temp == 'card' ? { height: hp(13.54), width: wp(29.33), marginTop: hp(-5.67), marginLeft: wp(-1.33), } : { height: hp(13.54), width: wp(29.33), marginTop: hp(-5.67), marginLeft: wp(-1.33), tintColor: 'grey' }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{ alignSelf: 'center', height: hp(14.77), marginTop: hp(2.46) }}>
          <ImageBackground
            source={image.rectangle}
            style={styles.iconStyle}
            resizeMode={'contain'}>
            <Text style={styles.textStyle3}>Pay</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  testStyle: {
    fontSize: RFValue(40, 812),
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: hp(1.23),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  testStyle1: {
    fontSize: RFValue(40, 812),
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: hp(1.23),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    color: 'grey'
  },
  viewStyle: {
    borderRadius: 12,
    margin: 15,
    backgroundColor: '#cecece',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 25,
    height: hp(17.85),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  viewStyle1: {
    borderRadius: 12,
    margin: 15,
    backgroundColor: '#cecece',
    alignItems: 'center',
    flexDirection: 'row',
    height: hp(17.85),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    justifyContent: 'space-around',
  },
  textStyle3: {
    fontWeight: 'bold',
    fontSize: RFValue(26, 812),
    color: '#F4C50B',
    alignSelf: 'center',
  },
  main: { height: 100, width: 100 },
  iconStyle: {
    height: hp(14.77),
    width: hp(14.77),
    justifyContent: 'flex-end',
    paddingVertical: hp(2.46),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
