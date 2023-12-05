import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate("RestaurantPage");
  };
  
  const handleInfoPress = () => {
    navigation.navigate("PlatForm");
  };
  const handleMapPress = () => {
    navigation.navigate("Snack_R");
  };
  
  return (
    <View style={styles.footer}>
        <TouchableOpacity onPress={handleMapPress}  ><Ionicons name="list" size={30} color="black" /></TouchableOpacity>
        <TouchableOpacity  onPress={handleHomePress} ><Ionicons name="fast-food-outline" size={30} color="black" /></TouchableOpacity>
        <TouchableOpacity  onPress={handleInfoPress}><Ionicons name="add" size={30} color="black" /></TouchableOpacity>
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
        borderWidth:.6, 
        bottom:0,  
        right:0,
        left:0,
        // borderTopEndRadius:30,
        // borderTopStartRadius:30,
        width:"100%",
        alignSelf:"center",
        borderColor:"#ccc"
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