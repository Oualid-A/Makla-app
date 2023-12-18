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
import background from "../../../assets/bg.jpg";
import logo from "../../../assets/logo.png";
import burger from "../../../assets/macdo.png";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Header } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import Popular from "../compenent-items/Popular";
import SuperSlider from "../compenent-items/SuperSlider";
import Footer from "../compenent-items/Footer";
import HeaderHome from "../compenent-items/HeaderHome";

export default function RestaurantPage() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <HeaderHome/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.welcome}>
          Espace{" "}
          <Text style={{ color: "rgba(250, 74, 12, 1)" }}>Restaurant</Text>
        </Text>
        
        <SuperSlider />
        
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"#f2f6fc"
  },
  searchInput: {
    borderWidth: 0,
    backgroundColor: "#fafafa",
    width: "90%",
    height: 50,
    borderRadius: 200,
    marginLeft: "5%",
    marginTop: "5%",
    padding: 10,
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