import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenStackHeaderLeftView} from 'react-native-screens';
import onboarding from '../components/screens/onboarding';
import header from '../components/screens/header';
import Home from '../components/screens/home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Onboarding" component={onboarding}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Header" component={header}></Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
