import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "./components/compenent-items/Footer";
import ViewPropTypes from "deprecated-react-native-prop-types";
import Stripe from "./components/Stripe";
import { StripeProvider } from "@stripe/stripe-react-native";
import { environment } from "./environnement";
import Promotion from "./components/compenent-items/Promotion";

const Stack = createStackNavigator();

export default function App() {
  const [cart, setCart] = React.useState([]);
  const keyP = environment.stripe_key;
  return (
    <StripeProvider publishableKey={keyP}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="LandingPage"
        >
          <Stack.Screen name="Informations" component={Informations} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Promotion" component={Promotion} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Snack" component={Snack} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Stripe" component={Stripe} />
          <Stack.Screen name="Cart">
            {() => <Cart cartItems={cart} />}
          </Stack.Screen>
        </Stack.Navigator>
        {/* <Footer /> */}
      </NavigationContainer>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({});
