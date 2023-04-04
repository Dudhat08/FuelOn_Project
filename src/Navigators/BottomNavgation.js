import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../User/UserScreen';
import PunctureScreen from '../SubScreens/Pucture/PunctureScreen';
import MechanicScreen from '../SubScreens/Mechanic/MechanicScreen';
import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import TabBar from '../Components/TabBar';
import FuelScreen from '../SubScreens/Fuel/FuelScreen';

const Bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    // <NavigationContainer>
    
  <Bottom.Navigator initialRouteName='Home' screenOptions={()=>({headerShown:false})} tabBar={props=><TabBar {...props}/>}>
    <Bottom.Screen name='Home'
        component={HomeScreen}
    />
    <Bottom.Screen name='fuel'
        component={FuelScreen}
    />
    <Bottom.Screen name='mechanic'
        component={MechanicScreen}
    />
    <Bottom.Screen name='puncture'
        component={PunctureScreen}
    />
    <Bottom.Screen name='user'
        component={UserScreen}
    />
  </Bottom.Navigator>
  )
}

export default BottomNavigation;