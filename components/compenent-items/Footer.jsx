import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const handleHomePress = () => {
    navigation.navigate("LandingPage");
    setActiveButton("home");
  };

  const handleSnackPress = () => {
    navigation.navigate("Snack");
    setActiveButton("snack");
  };

  const handleInfoPress = () => {
    navigation.navigate("Informations");
    setActiveButton("person");
  };

  const handleMapPress = () => {
    navigation.navigate("Map");
    setActiveButton("map");
  };

  const handleCartPress = () => {
    navigation.navigate("Cart");
    setActiveButton("cart");
  };

  const getIconName = (buttonName) => {
    return activeButton === buttonName ? `${buttonName}-sharp` : `${buttonName}-outline`;
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleCartPress} style={styles.footerButton}>
        <Ionicons name={getIconName("cart")} size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMapPress} style={styles.footerButton}>
        <Ionicons name={getIconName("map")} size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHomePress} style={styles.footerButton}>
        <Ionicons name={getIconName("home")} size={30} color="black" />
      </TouchableOpacity>
      {/* Uncomment the following block if you have the "Snack" navigation route */}
      {/* <TouchableOpacity onPress={handleSnackPress} style={styles.footerButton}>
        <Ionicons name={getIconName("fast-food")} size={30} color="black" />
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handleInfoPress} style={styles.footerButton}>
        <Ionicons name={getIconName("person")} size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 2 },
    borderWidth: 0.6,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    alignSelf: "center",
    borderColor: "#ccc",
  },
  footerButton: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});
