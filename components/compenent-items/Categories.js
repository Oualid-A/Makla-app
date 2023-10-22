import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import burger from "../../assets/macdo.png";
import { ScrollView } from "react-native-gesture-handler";

export default function Categories() {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          marginLeft: "5%",
          fontWeight: "700",
        }}
      >
        Cuisine
      </Text>
      <ScrollView horizontal={true}>
        <View style={styles.cuisine}>
          <View style={styles.cuisineItems}>
            <Image source={burger} style={styles.cuisineImage} />
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 10,
                fontWeight: 400,
              }}
            >
              Burger
            </Text>
          </View>
          <View style={styles.cuisineItems}>
            <Image source={burger} style={styles.cuisineImage} />
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 10,
                fontWeight: 400,
              }}
            >
              Pizza
            </Text>
          </View>
          <View style={styles.cuisineItems}>
            <Image source={burger} style={styles.cuisineImage} />
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 10,
                fontWeight: 400,
              }}
            >
              Salade
            </Text>
          </View>
          <View style={styles.cuisineItems}>
            <Image source={burger} style={styles.cuisineImage} />
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 10,
                fontWeight: 400,
              }}
            >
              Soda
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cuisine: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    width: "auto",
    elevation: 2,
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 1.8,
    shadowRadius: 2,
    marginTop: 5,
  },
  cuisineItems: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    width: "auto",
    elevation: 2,
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 1.8,
    shadowRadius: 2,
    borderRadius: 30,
    marginRight: 10,
  },
  cuisineImage: {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
  cuisineName: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 400,
  },
});
