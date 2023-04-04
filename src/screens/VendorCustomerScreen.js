import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { image } from '../Helper/ImageHelper'

const VendorCustomerScreen = ({ navigation }) => {
    const [press1, setPress1] = useState('');
    const [press2, setPress2] = useState('');
    const [press3, setPress3] = useState('');
    const [press4, setPress4] = useState('');
    const [press5, setPress5] = useState('');
    const [press6, setPress6] = useState('');
    const [press7, setPress7] = useState('');
    let flag;
    if (press1 == true && press2 == false) {
        flag = 1;
    }
    else if (press1 == false && press2 == true) {
        flag = 0;
    }
    else {
        let alert = "choose any one"
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B', justifyContent:'space-around'}}>
            <View style={{
                alignItems: 'center',
                marginTop: 30,
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Welcome to FuelOn</Text>
            </View>

            <TouchableOpacity style={styles.TextStyle} onPress={() => navigation.navigate('choose')}>
                <Text style={{ fontSize: 25,}}>Service provider</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TextStyle} onPress={() => navigation.navigate('signUp')}>
                <Text style={{ fontSize: 25 }}>Need a service</Text>
            </TouchableOpacity>

           

            <TouchableOpacity style={{ marginTop: 200, alignSelf: 'center', marginTop: 300 }} onPress={() => navigation.navigate('login')} >
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginLeft: 15,
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                }}>Already have an account?</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default VendorCustomerScreen

const styles = StyleSheet.create({
    TextStyle: {
        flexDirection: 'row',
        backgroundColor: '#cecece',
        borderRadius: 20,
        marginTop: 50,
        padding: 15,
        height: 60,
        width: 325,
        marginLeft: 40,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        justifyContent:'center',
        alignItems:'center'

    },
    iconStyle: {
        height: 120,
        width: 120,
        marginLeft: 136.5,
        marginTop: 100,
        justifyContent: 'flex-end',
        paddingVertical: 20,


    },
    textStyle3: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#F4C50B',
        alignSelf: 'center',

    },

})