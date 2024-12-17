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
import TrackCreateScreen from './source/screens/TrackCreateScreen';
import AccountScreen from './source/screens/AccountScreen';

import { Context as AuthContext, Provider as AuthProvider } from './source/context/authContext';
import ResolveAuth from './source/screens/ResolveAuth';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TrackComponent = () => {
  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='TrackList' component={TrackListScreen} />
    <Stack.Screen name='TrackDetail' component={TrackDetailScreen} />
  </Stack.Navigator>
}


const App = function App() {
  const { state } = useContext(AuthContext);
  const token = state.token;

  return (
    <NavigationContainer>
      {
       state.isLoading ? (
        <Stack.Navigator screenOptions={{headerShown:false}}>
           <Stack.Screen name="ResolveAuth" component={ResolveAuth} />
        </Stack.Navigator>
       ) :  token == null ? (
          <Stack.Navigator>
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='SignIn' component={SignInScreen} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='Tracks' component={TrackComponent} />
            <Tab.Screen name='Create Track' component={TrackCreateScreen} />
            <Tab.Screen name='Account' component={AccountScreen} />
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
