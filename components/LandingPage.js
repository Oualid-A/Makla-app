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

export default function LandingPage() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login"); 
  };
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <ImageBackground style={styles.container} source={background}>
        <BlurView style={StyleSheet.absoluteFill} intensity={10} tint="dark" />
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.text}>Bienvenue chez{"\n"} Makla sarr farr</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleLoginPress}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Inscription</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 200,
  },
  text: {
    fontSize: 30,
    marginBottom: 80,
    color: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
