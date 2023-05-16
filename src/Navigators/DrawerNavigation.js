import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ServiceProviderHome from '../ServiceProvider/ServiceProviderHome';
import NotificationScreen from '../screens/NotificationScreen';
import SPUser from '../ServiceProvider/SPUser';
import DrawerTabBar from '../Components/DrawerTabBar';
import FuelRequest from '../ServiceProvider/FuelRequest';
import MechanicRequest from '../ServiceProvider/MechanicRequest';
import PunctureRequest from '../ServiceProvider/PunctureRequest';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="SPH"
     drawerContent={props=><DrawerTabBar {...props}/>}
     screenOptions={{
      
      headerShown:false,
      drawerStyle:{
         width:'70%',
         backgroundColor:'#cecece'
      }
     }}
     >
    <Drawer.Screen 
    name="SPH" 
    component={ServiceProviderHome} 
/>
    <Drawer.Screen 
    name='Notifications'
    component={NotificationScreen}
     />
    <Drawer.Screen 
    name='SPuser'
    component={SPUser}
     />
    <Drawer.Screen 
    name='fuel_request'
    component={FuelRequest}
     />
    <Drawer.Screen 
    name='mechanic_request'
    component={MechanicRequest}
     />
    <Drawer.Screen 
    name='puncture_request'
    component={PunctureRequest}
     />

  </Drawer.Navigator>
  
  
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})