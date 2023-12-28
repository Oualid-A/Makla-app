import React, { useState, useEffect } from "react";
import { StyleSheet, View,LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Snack from "./components/Snack";
import Menu from "./components/Menu";
import Informations from "./components/Informations";
import Map from "./components/Map";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Test from "./components/Test";
import Stripe from "./components/Stripe";
import { StripeProvider } from "@stripe/stripe-react-native";
import { environment } from "./environnement";
import Promotion from "./components/compenent-items/Promotion";
import InformationsL from "./components/livreur/compenent/InformationsL";
import PlatForm from "./components/restaurant/compenent-items/PlatForm";
import Snack_R from "./components/restaurant/compenent-items/Snack_R";
import PhotoUploadForm from "./components/restaurant/compenent-items/PhotoUploadForm";
import Photo from "./components/restaurant/compenent-items/Photo";
import SuperSlider from "./components/restaurant/compenent-items/SuperSlider";
import MapL from "./components/livreur/compenent/MapL";
import UpPhoto from "./components/restaurant/compenent-items/UpPhoto";
import Demandes from "./components/livreur/compenent/Demandes";
import RestaurantPage from "./components/restaurant/component/RestaurantPage";


const Stack = createStackNavigator();

export default function App() {
  const [cart, setCart] = React.useState([]);
  const keyP = environment.stripe_key;
  if (__DEV__) {
    // Suppress only specific warnings
    LogBox.ignoreLogs(['Warning: ...']);
  
    // Suppress all log warnings in the app
    console.warn = () => {};
  
    // Disable yellow box warnings on the device
    console.disableYellowBox = true; // Deprecated in favor of LogBox.ignoreAllLogs()
    LogBox.ignoreAllLogs();
  }
  
  return (
    <StripeProvider publishableKey={keyP}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Promotion" component={Promotion} />
          <Stack.Screen name="Informations" component={Informations} /> 
        <Stack.Screen name="InformationsL" component={InformationsL} /> 
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Stripe" component={Stripe} />
        <Stack.Screen name="Snack" component={Snack} />
        <Stack.Screen name="PlatForm" component={PlatForm} />
        <Stack.Screen name="Snack_R" component={Snack_R} />
        <Stack.Screen name="PhotoUploadForm" component={PhotoUploadForm} />
        <Stack.Screen name="Photo" component={Photo} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="SuperSlider" component={SuperSlider} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="MapL" component={MapL} />
        <Stack.Screen name="UpPhoto" component={UpPhoto} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Demandes" component={Demandes} />
        <Stack.Screen name="RestaurantPage" component={RestaurantPage} />
        <Stack.Screen name="Cart">{() => <Cart cartItems={cart} />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({});
