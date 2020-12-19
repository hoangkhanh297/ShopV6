import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AsyncStorage} from 'react-native';
import Home from './src/pages/Home';
import History from './src/pages/History';
import UserProfile from './src/pages/UserProfile';
import Cart from './src/pages/Cart';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  // const [token, setToken] = useState("")
  // useEffect(async () => {
  //   async function _storeData() {
  //     try {
  //       const value = await AsyncStorage.getItem('TASKS');
  //       if (value !== null) {
  //         setToken(value);
  //       }
  //     } catch (error) {
  //       // Error saving data
  //     }
  //   }
  //   _storeData();
  // }, []);
  return (
    // <NavigationContainer>
    //   <Stack.Navigator headerMode="none" initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="History" component={History} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="UserProfile" component={UserProfile} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
