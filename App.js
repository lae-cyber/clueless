import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/(screens)/LoginScreen';
import HomeScreen from './app/(tabs)/index'; 

// Polyfill ReadableStream if not defined (important for Node 18+ issues)
if (typeof global.ReadableStream === 'undefined') {
  global.ReadableStream = require('stream/web').ReadableStream;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home"> {/* Home is the initial route */}
        <Stack.Screen name="Home" component={HomeScreen} /> {/* HomeScreen */}
        <Stack.Screen name="Login" component={LoginScreen} /> {/* LoginScreen */}
      </Stack.Navigator>
  </NavigationContainer>
  );
}



