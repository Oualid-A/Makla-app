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

const forYouData = [
  { name: "Kentucky Fried Chicken", logo: require("../../assets/KFC_logo.svg.png") },
  { name: "McDonald's", logo: require("../../assets/pizzaHut.png") },
  { name: "Pizza Hut", logo: require("../../assets/macdo.png") },
]

export default function ForYou() {
  const navigation = useNavigation()
  const ShowMenu = () => {
    navigation.navigate("Menu")
  }
  const handleSnacks = () => {
    navigation.navigate("Snack")
  }
  return (
    <View>
      <View style={styles.vue}>
        <Text style={styles.title}>Pour Vous</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={handleSnacks}>
          <Text style={styles.seeAllText}>Voir tout</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {forYouData.map((item, index) => (
          <View style={{ marginTop: 2, marginBottom: 2 }} key={index}>
            <View style={styles.contenair} >
              <View style={styles.coverContainer}>
                <Image source={item.logo} style={styles.coverImage} />
              </View>
              <View style={styles.snack}>
                <Text style={styles.title2} onPress={ShowMenu}>{item.name}</Text>
              </View>
              <View>
                <Ionicons
                onPress={ShowMenu}
                  name="chevron-forward"
                  size={30}
                  color={"rgba(250, 74, 12, 100)"}
                ></Ionicons>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
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
    fontSize: 17,
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
    elevation: 5,
    marginBottom: 2,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  coverContainer: {
    width: "12%",
    aspectRatio: 1,
    borderRadius: 99999,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "gray",
  },
  coverImage: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },

  title2: {
    fontSize: 17,
    color: "#000",
    fontWeight: "500",
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
})
