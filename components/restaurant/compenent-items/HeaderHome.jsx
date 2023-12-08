import {  View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from '@react-navigation/native';

export default function HeaderHome() {
    const navigation = useNavigation();
    const handleCart= () =>{
        navigation.navigate("Cart")
    }
    const logOut = async () => {
      await AsyncStorage.removeItem("userData");
      navigation.replace("Login");
    };
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
        <TouchableOpacity onPress={logOut} ><Ionicons
                  name="log-out-outline"
                  size={30}
                  color="black"
                /></TouchableOpacity>
       
        
    </View>
  )
}

