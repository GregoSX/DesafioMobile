import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from './src/views/Carousel/Carousel';
import TelaLogin from './src/views/TelaLogin/Login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen  
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name="Login" 
        component={TelaLogin} />
      <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name="Carrossel" 
        component={Carousel} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


