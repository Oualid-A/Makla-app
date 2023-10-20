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
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "react-native-elements";

export default function LandingPage() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <Header
        backgroundColor="#f6f8fa"
        leftComponent={{ icon: "menu", color: "black" }}
        centerComponent={{ text: "MAKLA", style: { color: "black", fontWeight:"bold" } }}
        rightComponent={{ icon: "shopping-cart", color: "black" }}
      />
      
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
