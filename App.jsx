import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Snack from './components/Snack';
import Snack_R from './components/restaurant/compenent-items/Snack_R';
import Menu from './components/Menu';
import PlatForm from './components/restaurant/compenent-items/PlatForm';
import Informations from './components/Informations';
import Map from './components/Map';
import Details from './components/Details';
import Cart from './components/Cart';
import Test from './components/Test';
import SuperSlider from './components/restaurant/compenent-items/SuperSlider';
import RestaurantPage from './components/restaurant/component/RestaurantPage';
import PhotoUploadForm from './components/restaurant/compenent-items/PhotoUploadForm';
import Photo from './components/restaurant/compenent-items/Photo';
import UpPhoto from './components/restaurant/compenent-items/UpPhoto';
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
        <Stack.Screen name="PlatForm" component={PlatForm} />
        <Stack.Screen name="Snack_R" component={Snack_R} />
        <Stack.Screen name="PhotoUploadForm" component={PhotoUploadForm} />
        <Stack.Screen name="Photo" component={Photo} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="SuperSlider" component={SuperSlider} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="UpPhoto" component={UpPhoto} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="RestaurantPage" component={RestaurantPage} />
        <Stack.Screen name="Cart">{() => <Cart cartItems={cart} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
