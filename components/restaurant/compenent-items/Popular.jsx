import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const popularData = [
  {
    name: "Plats populaires",
    images: [
      require("../../../assets/plat_india.jpg"),
      require("../../../assets/plat_india.jpg"),
      require("../../../assets/plat_india.jpg"),
    ],
    price: "50 MAD",
    rating: 4.8,
    location: "Hey Al-Qods Oujda",
  },
  {
    name: "Plats populaires",
    images: [
      require("../../../assets/plat_india.jpg"),
      require("../../../assets/plat_india.jpg"),
      require("../../../assets/plat_india.jpg"),
    ],
    price: "50 MAD",
    rating: 4.8,
    location: "Hey Al-Qods Oujda",
  },
];

export default function Popular() {
  const navigation = useNavigation();
  const ShowSnack = () => {
    navigation.navigate("Snack");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Mes Plats</Text>
      {popularData.map((item, index) => (
        <View key={index} style={styles.popular}>
          <View style={styles.popularItems}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {item.images.map((image, imageIndex) => (
                <Image key={imageIndex} source={image} style={styles.popularItemsImage} />
              ))}
            </ScrollView>
            <View style={{ padding: 10 }}>
              <Text style={styles.popularItemsName}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Ionicons name="star" size={20} color="#d8ce0c" />
                <Text style={{ paddingHorizontal: 5, fontSize: 15 }}>{item.rating}</Text>
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Ionicons name="locate" size={20} color="#9d9d9d" />
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    marginLeft: "7%",
    fontWeight: "700",
    marginTop: "2%",
  },
  popular: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  popularItems: {
    marginTop: "3%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    width: "auto",
    height: "auto",
    borderRadius: 10,
    elevation: 3,
    padding: 3,
  },
  popularItemsImage: {
    resizeMode: "contain",
    width: 380,
    height: 230,
    borderRadius: 10,
    marginBottom: 10,
  },
  popularItemsName: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    color: "rgba(250, 74, 12, 1)",
    marginBottom: 5,
  },
  location: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: "#9d9d9d",
  },
});
