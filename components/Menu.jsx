import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from "react-native";
import { Appbar, Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/pizza1.jpg";
import plat_india from "../assets/plat_india.jpg";
import logo1 from "../assets/KFC_logo.svg.png";
import Footer from "./compenent-items/Footer";
import burger from "../assets/burger.png";
import HeaderHome from "./compenent-items/HeaderHome";

export default function Menu() {
  const navigation = useNavigation();
  const [quantities, setQuantities] = useState([0, 0]);

  const handleDetails = () => {
    navigation.navigate("Details", {
      product: {
        name: "Burger",
        image: burger,
        price: 45,
        description: "Description of the burger burger burger burger Description of the burger burger burger burger",
        location: "Hey Al-Qods Oujda",
        rating: 4.8,
        quantity:2,
        images: [burger, burger, burger],
      },
    });
  };

  const _goBack = () => navigation.navigate("Snack");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const menuItems = [
    {
      title: "Pizza Fruit de mer",
      price: "59 MAD",
      image: logo,
      logo: logo1,
    },
    {
      title: "Tacos Indian",
      price: "39 MAD",
      image: plat_india,
      logo: logo1,
    },
  ];

  return (
    <>
    <StatusBar></StatusBar>
      <HeaderHome/>
      <ScrollView contentContainerStyle={{ paddingBottom: 0, marginTop: 4 }}>
        {menuItems.map((menuItem, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.header}>
              <View style={styles.coverContainer}>
                <Image source={menuItem.image} style={styles.coverImage} />
              </View>
              <View style={styles.snack}>
                <Text style={styles.title}>{menuItem.title}</Text>
                <Text style={styles.price}>{menuItem.price}</Text>
              </View>
              <TouchableOpacity onPress={handleDetails}>
                <View style={styles.logoContainer}>
                  <Image source={menuItem.logo} style={styles.logoImage} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.cardBtn}>
              <View style={styles.cardbtn_div}>
                <IconButton
                  style={styles.iconButton}
                  icon="minus"
                  onPress={() => decrementQuantity(index)}
                  iconColor="white"
                />
                <Text style={styles.quantity}>{quantities[index]}</Text>
                <IconButton
                  style={styles.iconButton}
                  icon="plus"
                  onPress={() => incrementQuantity(index)}
                  iconColor="white"
                />
              </View>
              <View width={"35%"}></View>
              <View>
                <Button
                  onPress={() => console.log("Add to Cart")}
                  style={styles.addToCartButton}
                  textColor="white"
                >
                  Ajouter au Panier
                </Button>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 2,
    borderRadius: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  coverContainer: {
    width: "20%",
    aspectRatio: 1,
    borderRadius: 99999,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "gray",
  },
  coverImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  snack: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "stretch",
    marginLeft: "3%",
  },
  addToCartButton: {
    backgroundColor: "rgba(250, 74, 12, 1)",
    borderWidth: 0,
    width: "100%",
  },
  cardBtn: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  price: {
    fontSize: 20,
    color: "rgba(250, 74, 12, 1)",
    fontWeight: "bold",
  },
  iconButton: {
    padding: 0,
    height: "auto",
    color: "white",
  },
  quantity: {
    color: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
  },
  logoContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardbtn_div: {
    backgroundColor: "rgba(250, 74, 12, 1)",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 100,
    width: "10%",
    height: "auto",
  },
});
