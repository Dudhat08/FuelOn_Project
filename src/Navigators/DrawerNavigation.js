import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ServiceProviderHome from '../ServiceProvider/ServiceProviderHome';
import NotificationScreen from '../screens/NotificationScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="SPH">
    <Drawer.Screen 
    name="SPH" 
    component={ServiceProviderHome} 
    options={{headerShown:false}}/>
    <Drawer.Screen 
    name='Notifications'
    component={NotificationScreen}
    options={{headerShown:false}} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})