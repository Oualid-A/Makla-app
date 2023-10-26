import React from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Footer from "./compenent-items/Footer";
import burger from "../assets/burger.png";
import table from "../assets/food_bg.jpg";
import { IconButton } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Details() {
  const pictures = [burger, burger, burger];
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.detail}>
          <ImageBackground source={table} style={styles.background}>
            <Carousel
              data={pictures}
              renderItem={({ item }) => (
                <ImageBackground source={item} style={styles.pics} />
              )}
              sliderWidth={410}
              itemWidth={400}
            />
          </ImageBackground>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.cardbtn_div}>
            <IconButton
              style={styles.iconButton}
              icon="minus"
              iconColor="white"
            />
            <Text style={styles.quantity}>1</Text>
            <IconButton
              style={styles.iconButton}
              icon="plus"
              iconColor="white"
            />
          </View>
          <View style={styles.about}>
            <Text style={{ fontSize: 25, fontWeight: 700, marginLeft: 15 }}>
              Burger
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 700,
                marginLeft: 15,
                color: "rgba(250, 100, 12, 1)",
              }}
            >
              Prix : 45 MAD
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <Ionicons name="location" size={25} color="#9d9d9d" />
              <Text style={styles.location}>Hey Al-Qods Oujda</Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginLeft: 15,
              marginTop: 10,
            }}
          >
            Description
          </Text>
          <Text style={styles.description}>
            Craquez pour le mythe ! Trois morceaux de viande de bœuf grillées en
            un seul burger. Relevez le défi et tripler votre dose de saveurs !
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detail: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 2,
  },
  pics: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    padding: 0,
    height: "auto",
    color: "white",
  },
  quantity: {
    color: "white",
  },
  cardbtn_div: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: 100,
    width: "30%",
    marginTop: "-5%",
  },
  background: {
    height: "auto",
    resizeMode: "cover",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden", // Add this property
  },
  description: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "left",
    color: "#000",
    opacity: 0.8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    // fontWeight:700
  },
  location: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: "#9d9d9d",
  },
});
