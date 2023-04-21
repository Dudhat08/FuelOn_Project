import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'

const RadioButton = ({ onpress, selectedValue, lable }) => {
    return (
        <View>

            <TouchableOpacity
                onPress={onpress}
                style={{
                    flexDirection: 'row',
                    marginTop: hp(4.92),
                    marginLeft: wp(10.66),
                }}
            >
                <View
                    style={{
                        height: hp(2.95),
                        width: hp(2.95),
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: '#000000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: wp(1.33)
                    }}
                >
                    {selectedValue == true ? (
                        <View
                            style={{
                                height: hp(1.47),
                                width: hp(1.47),
                                borderRadius: 100,
                                backgroundColor: 'black',
                            }}
                        />
                    ) : null}
                </View>
                <Text style={{ marginLeft: wp(2.66), fontSize: RFValue(20, 812) }}>{lable}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({})