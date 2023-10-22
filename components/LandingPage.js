import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import background from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import burger from "../assets/macdo.png";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Header } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import Popular from "./compenent-items/Popular";
import Categories from "./compenent-items/Categories";
import ForYou from "./compenent-items/ForYou";
import Footer from "./compenent-items/Footer";

export default function LandingPage() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.root}>
      <StatusBar hidden/>
      <ScrollView>
        <Text style={styles.welcome}>
          BIENVENUE À{" "}
          <Text style={{ color: "rgba(250, 74, 12, 1)" }}>MAKLA</Text>
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="cherche pour un plat..."
        >
          {" "}
          <Ionicons name="search" size={30} color="gray" />{" "}
        </TextInput>
        <Categories />
        <Popular />
        <ForYou />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchInput: {
    borderWidth: 0,
    backgroundColor: "#fafafa",
    width: "90%",
    borderColor: "gray",
    height: 60,
    borderRadius: 20,
    marginLeft: "5%",
    marginTop: "5%",
    padding: 10,
    elevation: 2,
    marginBottom: "5%",
  },
  welcome: {
    marginTop: "5%",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});
