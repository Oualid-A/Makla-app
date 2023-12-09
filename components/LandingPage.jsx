import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Popular from "./compenent-items/Popular";
import Categories from "./compenent-items/Categories";
import ForYou from "./compenent-items/ForYou";
import Footer from "./compenent-items/Footer";
import avatar from "../assets/ilyass.png";
import logo from "../assets/Makla.png";
import Ionicons from "@expo/vector-icons/Feather";
import { Image } from "react-native-elements";
import { Badge } from "react-native-paper";
import Promotion from "./compenent-items/Promotion";

export default function LandingPage() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  const handleCart = () => {
    navigation.navigate("Cart");
  };
  const handleInfo = () => {
    navigation.navigate("Informations");
  };
  const handleMap = () => {
    navigation.navigate("Map");
  };
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={avatar}
          style={{ marginLeft: 10, width: 40, height: 40 }}
          onPress={handleInfo}
        />
        <Ionicons
          name="shopping-cart"
          size={30}
          color="black"
          style={{ marginRight: 10 }}
          onPress={handleCart}
        ></Ionicons>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.welcome}>
          BIENVENUE À{" "}
          <Text style={{ color: "rgba(250, 74, 12, 1)" }}>MAKLA</Text>
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder={` cherche pour un plat...`}
        ></TextInput>
        <Categories />
        <Promotion />
        <Popular />
        <ForYou />
      </ScrollView>
      <View style={styles.map}>
        <Ionicons name="map" size={30} onPress={handleMap}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    // backgroundColor:"#f2f6fc"
  },
  searchInput: {
    borderWidth: 0,
    backgroundColor: "#fafaff",
    width: "90%",
    height: "5%",
    borderRadius: 0,
    marginLeft: "5%",
    marginTop: "5%",
    padding: 5,
    elevation: 2,
    marginBottom: "5%",
  },
  welcome: {
    marginTop: "1%",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  map: {
    position: "absolute",
    width: "auto",
    backgroundColor: "white",
    borderRadius: 500,
    padding: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 4,
    shadowRadius: 4,
    bottom: 10,
    marginTop: 10,
    right:10,
    borderWidth:1,
  },
});
