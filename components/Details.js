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

export default function Details() {
  const pictures = [burger, burger, burger];
  return (
    <><ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={table} style={styles.background}>
        <View style={styles.detail}>
          <Carousel
            data={pictures}
            renderItem={({ item }) => (
              <ImageBackground source={item} style={styles.pics} />
            )}
            sliderWidth={410}
            itemWidth={400} />
        </View>
        <View style={styles.cardbtn_div}>
          <IconButton
            style={styles.iconButton}
            icon="minus"
            iconColor="white" />
          <Text style={styles.quantity}>1</Text>
          <IconButton
            style={styles.iconButton}
            icon="plus"
            iconColor="white" />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 700, marginLeft: 15 }}>
          Description
        </Text>
        <Text style={styles.description}>Craquez pour le mythe ! Trois morceaux de viande de bœuf grillées en un seul burger. Relevez le défi et tripler votre dose de saveurs !</Text>
      </ImageBackground>
    </ScrollView><Footer /></>
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
    zIndex: 0,
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
    height: "100%",
    resizeMode: "cover",
  },
  description: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "left",
    color: "#000",
    opacity: 0.8,
    marginHorizontal: 10,
    marginTop:5,
    backgroundColor:"white",
    borderRadius:10,
    padding:10,
    fontWeight:700
  },
});
