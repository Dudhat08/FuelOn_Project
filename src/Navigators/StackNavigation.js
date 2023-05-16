import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from '../screens/SignupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BottomNavigation from './BottomNavgation';
import LoginScreen from '../screens/LoginScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { image } from '../Helper/ImageHelper';
import NotificationScreen from '../screens/NotificationScreen';
import PetrolScreen from '../SubScreens/Fuel/PetrolScreen';
import DieselScreen from '../SubScreens/Fuel/DieselScreen';
import GasScreen from '../SubScreens/Fuel/GasScreen';
import MechanicScreen from '../SubScreens/Mechanic/MechanicScreen';
import PunctureScreen from '../SubScreens/Pucture/PunctureScreen';
import Payment from '../Components/Payment';
import LpgScreen from '../SubScreens/Fuel/LpgScreen';
import CngScreen from '../SubScreens/Fuel/CngScreen';
import BiodieselScreen from '../SubScreens/Fuel/BiodieselScreen';
import EthanolScreen from '../SubScreens/Fuel/EthanolScreen';
import ChooseScreen from '../screens/ChooseScreen';
import VendorCustomerScreen from '../screens/VendorCustomerScreen';
import TrackerScreen from '../User/TrackerScreen';
import ServiceProviderHome from '../ServiceProvider/ServiceProviderHome';
import DrawerNavigation from './DrawerNavigation';
import ClientDrawer from './ClientDrawer';

const Stack = createNativeStackNavigator();
const StackNavigation = ({ navigation }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='splash'
          component={SplashScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='choose'
          component={ChooseScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="signUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='bottam'
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='clientDrawer'
          component={ClientDrawer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='vc'
          component={VendorCustomerScreen}
          options={{ headerShown: false }} />
        {/* <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false
            //title:'FuelOn',

            // headerRight: () => (
            //  <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            //   <Image source={image.notification} resizeMode={'contain'} style={{height:25,width:25}} />
            //  </TouchableOpacity>
            // ),
            //   headerStyle:{
            //     backgroundColor:'#F4C50B',
            //   },
            // headerTintColor:'#000000',
            // headerTitleStyle:{
            //   fontWeight:'bold',
            //   fontSize:30
            // }
          }}
        /> */}
        <Stack.Screen
          name='Notifications'
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='petrol'
          component={PetrolScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='diesel'
          component={DieselScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='gas'
          component={GasScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='mechanic'
          component={MechanicScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='puncture'
          component={PunctureScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='payment'
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='lpg'
          component={LpgScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='cng'
          component={CngScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='biodiesel'
          component={BiodieselScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ethanol'
          component={EthanolScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='tracker'
          
          component={TrackerScreen}
          options={{ headerShown: true,title:'Track my order'}}
        />
        <Stack.Screen
          name='SPH'
          component={ServiceProviderHome}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name='drawer'
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



const styles = StyleSheet.create({})
export default StackNavigation;