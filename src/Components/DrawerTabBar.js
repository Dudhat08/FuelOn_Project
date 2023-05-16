import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { image } from '../Helper/ImageHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';



const DrawerTabBar = ({ navigation }) => {
    const choosen = useSelector(state => state.choosedValue);
    const [Profile, setProfile] = useState('');
    const [data,setData] = useState([]);
    useEffect(() => {
         getName();
         console.log(data);
        //  console.log("################",DATA);
    }, [])
    const getName = async () => {
        let DATA = [];
        const Name = await AsyncStorage.getItem('NAME_DATA');
       const fuelData = await AsyncStorage.getItem('FUEL_DATA');
       console.log(fuelData);
       if(fuelData){
        DATA.push({ id: 'fuel', title: 'Fuel Request', nav: 'fuel_request' })
       }
        const mechanicData = await AsyncStorage.getItem('MECHANIC_DATA');
        if(mechanicData){
            DATA.push({ id: 'mechanic', title: 'mechanic Request', nav: 'mechanic_request' })
        }
        const punctureData= await AsyncStorage.getItem('PUNCTURE_DATA');
        if(punctureData){
            DATA.push({ id: 'puncture', title: 'puncture Request', nav: 'puncture_request' })
        }
        setProfile(Name);
        setData(DATA)
        
    }

    
    const Item = ({ title,nav }) => (
        <View style={styles.viewStyle}>
            <TouchableOpacity onPress={() => navigation.navigate(`${nav}`)} style={styles.buttonStyle}>
                <Text style={styles.fontStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
    return choosen == "option1" ? (
        <SafeAreaView style={styles.drawerStyle}>

            <View style={{ justifyContent: 'space-around', alignItems: 'center', marginTop: hp(4.92) }}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 3,
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                    }}>
                    <Image source={image.account} style={{ height: hp(12.31), width: wp(26.66) }} resizeMode={'contain'} />
                </View>
                <View style={{ alignItems: 'center', marginVertical: hp(2) }}>
                    <Text style={{ fontSize: RFValue(30, 812), fontWeight: 'bold', }}>{Profile}</Text>
                </View>
                <View style={{ width: wp(55.6), borderWidth: 2 }}></View>
            </View>
            <View style={styles.viewStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('SPH')} style={styles.buttonStyle}>
                    <Text style={styles.fontStyle}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewStyle} >
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.buttonStyle}>
                    <Text style={styles.fontStyle}>Notifications</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('SPuser')} style={styles.buttonStyle}>
                    <Text style={styles.fontStyle}>Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={{width:'100%'}}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item title={item.title} nav={item.nav} />}
                keyExtractor={item => item.id}
            />
            </View>
              
        </SafeAreaView>
    ) :
        (
            <SafeAreaView style={styles.drawerStyle}>

                <View style={{ justifyContent: 'space-around', alignItems: 'center', marginTop: hp(4.92) }}>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 3,
                            height: 140,
                            width: 140,
                            borderRadius: 100,
                        }}>
                        <Image source={image.account} style={{ height: hp(12.31), width: wp(26.66) }} resizeMode={'contain'} />
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: hp(2) }}>
                        <Text style={{ fontSize: RFValue(30, 812), fontWeight: 'bold', }}>John Doe</Text>
                    </View>
                    <View style={{ width: wp(55.6), borderWidth: 2 }}></View>
                </View>
                {/* <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('bottam')} style={styles.buttonStyle}>
                        <Text style={styles.fontStyle}>Home</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.viewStyle} >
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.buttonStyle}>
                        <Text style={styles.fontStyle}>Notifications</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('user')} style={styles.buttonStyle}>
                        <Text style={styles.fontStyle}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('feedback')} style={styles.buttonStyle}>
                        <Text style={styles.fontStyle}>My Order</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('feedback')} style={styles.buttonStyle}>
                        <Text style={styles.fontStyle}>Track my order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('feedback')} style={styles.buttonStyle}>
                        <Text style={styles.fontStyle}>Help</Text>
                    </TouchableOpacity>
                </View>
                


            </SafeAreaView>
        )
}

export default DrawerTabBar

const styles = StyleSheet.create({
    drawerStyle: {
        flex: 1,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonStyle: {
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: 16,

    },
    viewStyle: {
        height: 50,
        width: '100%',
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    fontStyle: {
        fontSize: 20,
        color: '#F4C50B',
        fontWeight: 'bold',
    }

})