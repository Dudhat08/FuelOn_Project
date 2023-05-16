import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ServiceProviderHome from '../ServiceProvider/ServiceProviderHome';
import NotificationScreen from '../screens/NotificationScreen';
import SPUser from '../ServiceProvider/SPUser';
import DrawerTabBar from '../Components/DrawerTabBar';
import BottomNavigation from './BottomNavgation';
import FeedBack from '../User/FeedBack';

const Drawer = createDrawerNavigator();

const ClientDrawer = () => {
  return (
    <Drawer.Navigator 
    initialRouteName='bottam'
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
    name="bottam" 
    component={BottomNavigation} 
    />
    <Drawer.Screen
    name='feedback'
    component={FeedBack}
    />
  </Drawer.Navigator>
  
  
  )
}

export default ClientDrawer;

const styles = StyleSheet.create({})