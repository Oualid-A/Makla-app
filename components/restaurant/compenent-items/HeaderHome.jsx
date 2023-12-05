import {  View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";

import { useNavigation } from '@react-navigation/native';

export default function HeaderHome() {
    const navigation = useNavigation();
    const handleCart= () =>{
        navigation.navigate("Cart")
    }
  return (

    <View style={{
        // position:"absolute",
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
        flexDirection:"row",
        width: "100%",
        paddingHorizontal:20,
    }}>
        <TouchableOpacity ><Ionicons name="menu-sharp" size={30} color="black" /></TouchableOpacity>
       
        
    </View>
  )
}

