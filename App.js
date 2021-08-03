import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmailScreen from './screen/EmailScreen';
import HomeScreen from './screen/HomeScreen';
import VerifCode from './screen/VerifCode';
import RegData from './screen/RegData';
import Profile from './screen/Profile';
import ConfimPass from './screen/ConfimPass';
import TextEditor from './screen/TextEditor';
import * as Linking from 'expo-linking';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Email"
          options={{headerShown: false}}
          component={EmailScreen}
        />
        <Stack.Screen
          name="VerifCode"
          options={{headerShown: false}}
          component={VerifCode}
        />
        <Stack.Screen
          name="RegData"
          options={{headerShown: false}}
          component={RegData}
        />
        <Stack.Screen
          name="ConfimPass"
          options={{headerShown: false}}
          component={ConfimPass}
        /> 
        <Stack.Screen
          name="Profile"
          options={{headerShown: false}}
          component={Profile}
        /> 
        <Stack.Screen
          name="TextEditor"
          options={{headerShown: false}}
          component={TextEditor}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
