import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

const categoryData = [
  { name: "Burger", image: require("../../assets/burger.png") },
  { name: "Pizza", image: require("../../assets/pizza_log.png") },
  { name: "Salade", image: require("../../assets/salad.png") },
  { name: "Soda", image: require("../../assets/soda.png") },
]

export default function Categories() {
  return (
    <View>
      <Text style={{ fontSize: 17, marginLeft: "5%", fontWeight: "700" }}>
        Cuisine
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.cuisine}>
        {categoryData.map((category, index) => (
          <View style={styles.cuisineItems} key={index}>
            <Image source={category.image} style={styles.cuisineImage} />
            <Text style={{ fontSize: 15, marginHorizontal: 10, fontWeight: 400 }}>
              {category.name}
            </Text>
          </View>
        ))}
        </View>
      </ScrollView>
    </View>
  )
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
    marginTop: "0%",
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
})
