import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Appbar, Avatar, Button, Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/pizza1.jpg";
import plat_india from "../assets/plat_india.jpg";
import paila from "../assets/paila.jpg";
import { Icon } from "react-native-elements";
import logo1 from "../assets/KFC_logo.svg.png";
import logo2 from "../assets/macdo.png";


export default function Menu() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);

  const ShowMenu = () => {
    navigation.navigate("Menu");
  };

  const _goBack = () => navigation.navigate("Snack");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Menu" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{ paddingBottom: 0, marginTop: 4 }}>
        <View style={styles.contenair}>
          <View style={styles.header}>
            <View style={styles.coverContainer}>
              <Image source={logo} style={styles.coverImage} />
            </View>
            <View style={styles.snack}>
              <Text style={styles.title}>Pizza Fruit de mer</Text>
              <Text style={styles.price}>59 MAD</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image source={logo1} style={styles.logoImage} />
            </View>
          </View>

          <View style={styles.cardBtn}>
            <View style={styles.cardbtn_div}>
              <IconButton
                style={styles.iconButton}
                icon="minus"
                onPress={decrementQuantity}
                iconColor="white"
              />
              <Text style={styles.quantity}>{quantity}</Text>
              <IconButton
                style={styles.iconButton}
                icon="plus"
                onPress={incrementQuantity}
                iconColor="white"
              />
            </View>
            <View width={150}></View>
            <View>
              <Button
                onPress={() => console.log("Add to Cart")}
                style={styles.addToCartButton}
                textColor="white"
              >
                Aouter au Panier
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.contenair}>
          <View style={styles.header}>
            <View style={styles.coverContainer}>
              <Image source={plat_india} style={styles.coverImage} />
            </View>
            <View style={styles.snack}>
              <Text style={styles.title}>Tacos Indian</Text>
              <Text style={styles.price}>39 MAD</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image source={logo1} style={styles.logoImage} />
            </View>
          </View>

          <View style={styles.cardBtn}>
            <View style={styles.cardbtn_div}>
              <IconButton
                style={styles.iconButton}
                icon="minus"
                onPress={decrementQuantity}
                iconColor="white"
              />
              <Text style={styles.quantity}>{quantity}</Text>
              <IconButton
                style={styles.iconButton}
                icon="plus"
                onPress={incrementQuantity}
                iconColor="white"
              />
            </View>
            <View width={150}></View>
            <View>
              <Button
                onPress={() => console.log("Add to Cart")}
                style={styles.addToCartButton}
                textColor="white"
              >
                Aouter au Panier
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  contenair: {
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
  cardbtn_div:{
    backgroundColor: "rgba(250, 74, 12, 1)",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 100,
    width: "10%",
    height: "auto",
  }
});
