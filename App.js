import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SigninScreen from './source/screens/SigninScreen';
import SignupScreen from './source/screens/SignupScreen';
import TrackCreateScreen from './source/screens/TrackCreateScreen';
import TrackDetailScreen from './source/screens/TrackDetailScreen';
import TrackListScreen from './source/screens/TrackListScreen';
import AccountScreen from './source/screens/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TrackComponent = () => {
   return  <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='TrackList' component={TrackListScreen} />
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen}/>
    </Stack.Navigator>
}

//TODO:
const userToken = null;

export default function App() {
  return (
    <NavigationContainer>
      {
        userToken == null ? (
        <Stack.Navigator>
          <Stack.Screen name='SignIn' component={SigninScreen} /> 
          <Stack.Screen name='Singup' component={SignupScreen} /> 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
