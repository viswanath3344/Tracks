import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SignInScreen from './source/screens/SignInScreen';
import SignUpScreen from './source/screens/SignUpScreen';

import TrackDetailScreen from './source/screens/TrackDetailScreen';
import TrackListScreen from './source/screens/TrackListScreen';
import AccountScreen from './source/screens/AccountScreen';

import {Context as AuthContext, Provider as AuthProvider} from './source/context/authContext';
//import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TrackComponent = () => {
   return  <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='TrackList' component={TrackListScreen} />
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen}/>
    </Stack.Navigator>
}


const App = function App() {
  const {state} =  useContext(AuthContext);
  const token = state.token;

  // useEffect(() => {
  //   const getDefaults = async () => {
  //     token = await AsyncStorage.getItem("token");
  //     console.log("token", token);
  //   }

  //   getDefaults();

  // }, [])
 
  return (
    <NavigationContainer>
      {
        token == null ? (
        <Stack.Navigator>
          <Stack.Screen name='SignUp' component={SignUpScreen} /> 
          <Stack.Screen name='SignIn' component={SignInScreen} /> 
         </Stack.Navigator>
         ) : (
          <Tab.Navigator screen>
          <Tab.Screen name='Tracks' component={TrackComponent}/>
          <Tab.Screen name='Account' component={AccountScreen}/>
         </Tab.Navigator>
         )
      }
    </NavigationContainer>
  )
}

export default () => {
  return <AuthProvider>
    <App />
   </AuthProvider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
