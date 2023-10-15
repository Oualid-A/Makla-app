import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Snack from './components/Snack';
import Menu from './components/Menu';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Snack" component={Snack} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
