import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate("LandingPage");
  };
  const handleSnackPress = () => {
    navigation.navigate("Snack");
  };
  const handleInfoPress = () => {
    navigation.navigate("Informations");
  };
  const handleMapPress = () => {
    navigation.navigate("Map");
  };
  const handleCartPress = () => {
    navigation.navigate("Cart");
  }
  return (
    <View style={styles.footer}>
        <TouchableOpacity onPress={handleCartPress} ><Ionicons name="cart-outline" size={30} color="black" /></TouchableOpacity>
        <TouchableOpacity onPress={handleMapPress}  ><Ionicons name="map-outline" size={30} color="black" /></TouchableOpacity>
        <TouchableOpacity  onPress={handleHomePress} ><Ionicons name="home-outline" size={30} color="black" /></TouchableOpacity>
        <TouchableOpacity  onPress={handleSnackPress}><Ionicons name="fast-food-outline" size={30} color="black" /></TouchableOpacity>
        <TouchableOpacity  onPress={handleInfoPress}><Ionicons name="person-outline" size={30} color="black" /></TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    footer:{
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 50,
        backgroundColor:"white",
        shadowOffset:{width:1,height:2},
        elevation:2,     
        borderTopWidth:.2, 
        bottom:0,  
        right:0,
        left:0,
    },
    map:{
        borderTopWidth:.2,
        borderLeftWidth:.2,
        padding:5,
        borderRadius:999999999,
        alignItems:"center",
        width:60,
        height:60,
        backgroundColor:"white",
        marginBottom:45,
    }
})