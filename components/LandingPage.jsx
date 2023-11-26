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
        >
        </Ionicons>
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
        {/* <ScrollView > */}

        <Promotion />
        {/* </ScrollView> */}
        <Popular />
        <ForYou />
      </ScrollView>
      {/* <Footer /> */}
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
});
