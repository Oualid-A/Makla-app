import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Snack from './components/Snack';
import Menu from './components/Menu';
import Informations from './components/Informations';
import Map from './components/Map';
import Details from './components/Details';
import Cart from './components/Cart';
import Test from './components/Test';
import Footer from './components/compenent-items/Footer';


const Stack = createStackNavigator();

export default function App() {
  const [cart, setCart] = React.useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName="Login">
        <Stack.Screen name="Informations" component={Informations} /> 
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Snack" component={Snack} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart">{() => <Cart cartItems={cart} />}</Stack.Screen>
      </Stack.Navigator>
      {/* <Footer/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
