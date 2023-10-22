import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tacos from "../../assets/plat_india.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Appbar, Avatar, Button, Card, IconButton } from "react-native-paper";
import logo from "../../assets/KFC_logo.svg.png";
import logo1 from "../../assets/pizzaHut.png";
import logo2 from "../../assets/macdo.png";

export default function ForYou() {
  return (
    <View>
      <View style={styles.vue}>
        <Text style={styles.title}>Pour Vous</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>Voir tout</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ marginTop: 5, marginBottom: 5 }}>
          <View style={styles.contenair}>
            <View style={styles.coverContainer}>
              <Image source={logo} style={styles.coverImage} />
            </View>
            <View style={styles.snack}>
              <Text style={styles.title2}>Kentucky Fried Chicken</Text>
            </View>
            <View>
              <Ionicons
                name="arrow-forward-circle-sharp"
                size={40}
                color={"rgba(250, 74, 12, 100)"}
              ></Ionicons>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 5 }}>
          <View style={styles.contenair}>
            <View style={styles.coverContainer}>
              <Image source={logo2} style={styles.coverImage} />
            </View>
            <View style={styles.snack}>
              <Text style={styles.title2}>McDonald's</Text>
            </View>
            <View>
              <Ionicons
                name="arrow-forward-circle-sharp"
                size={40}
                color={"rgba(250, 74, 12, 100)"}
              ></Ionicons>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 5 }}>
          <View style={styles.contenair}>
            <View style={styles.coverContainer}>
              <Image source={logo1} style={styles.coverImage} />
            </View>
            <View style={styles.snack}>
              <Text style={styles.title2}>Pizza Hut</Text>
            </View>
            <View>
              <Ionicons
                name="arrow-forward-circle-sharp"
                size={40}
                color={"rgba(250, 74, 12, 100)"}
              ></Ionicons>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  seeAllButton: {
    backgroundColor: "transparent",
  },
  seeAllText: {
    color: "rgba(250, 74, 12, 100)",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 10,
    marginTop: 10,
  },
  vue: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    marginLeft: "5%",
    fontWeight: "700",
    marginTop: "2%",
  },
  imageStyle: {
    resizeMode: "contain",
  },

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
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

  title2: {
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
});
