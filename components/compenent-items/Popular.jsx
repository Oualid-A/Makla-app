import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"

const popularData = [
  {
    name: "Cheese Burger",
    image: require("../../assets/burger3.jpg"),
    price: "40 MAD",
    rating: 4.8,
    location: "Hey Al-Qods Oujda",
  },
  {
    name: "Pizza Dinde",
    image: require("../../assets/pizzaL.jpg"),
    price: "55 MAD",
    rating: 4.8,
    location: "Hey Al-Qods Oujda",
  },
]
export default function Popular() {
  const navigation = useNavigation()
  const ShowSnack = () => {
    navigation.navigate("Snack")
  }
  return (
    <View>
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <Text style={styles.title}>Populaire</Text>
      <TouchableOpacity style={styles.seeAllButton} onPress={ShowSnack}>
        <Text style={styles.seeAllText}>Voir tout</Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {popularData.map((item, index) => (
        <View style={styles.popular} key={index}>
          <View style={styles.popularItems}>
            <Image source={item.image} style={styles.popularItemsImage} />
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
  </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    marginLeft: "5%",
    fontWeight: "700",
    marginTop: "2%",
  },
  popular: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  popularItems: {
    marginTop: "3%",
    flex: 1,
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
    width: 250,
    height: 200,
    borderRadius: 10,
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
  seeAllButton: {
    backgroundColor: "transparent", // Arrière-plan transparent
  },
  seeAllText: {
    color: "rgba(250, 74, 12, 100)",
    fontSize: 16,
    fontWeight: "700",
    marginRight:10,
    marginTop:10
  },
})
