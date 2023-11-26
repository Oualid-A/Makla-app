import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
} from "react-native"
import * as React from "react"
import { useNavigation } from "@react-navigation/native"
import { Appbar, Avatar, Button, Card, IconButton } from "react-native-paper"
import logo from "../assets/KFC_logo.svg.png"
import logo2 from "../assets/macdo.png"
import logo3 from "../assets/brimo.jpg"
import logo4 from "../assets/pizzaHut.png"
import Footer from "./compenent-items/Footer"

export default function Snack() {
  const navigation = useNavigation()
  const ShowMenu = () => {
    navigation.navigate("Menu")
  }

  const _goBack = () => navigation.navigate("LandingPage")

  const _handleSearch = () => console.log("Searching")

  const _handleMore = () => console.log("Shown more")
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Resturants" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{ paddingBottom: 0, marginTop: 4 }}>
        <View style={styles.contenair}>
          <View style={styles.coverContainer}>
            <Image source={logo} style={styles.coverImage} />
          </View>
          <View style={styles.snack}>
            <Text style={styles.title}>Kentucky Fried Chicken</Text>
          </View>
          <View>
            <Button
              mode="contained"
              onPress={ShowMenu}
              style={styles.addToCartButton}
              textColor="#fff"
            >
              Voir le Menu
            </Button>
          </View>
        </View>
        <View style={styles.contenair}>
          <View style={styles.coverContainer}>
            <Image source={logo2} style={styles.coverImage} />
          </View>
          <View style={styles.snack}>
            <Text style={styles.title}>Macdonald's</Text>
          </View>
          <View>
            <Button
              mode="contained"
              onPress={ShowMenu}
              style={styles.addToCartButton}
              textColor="#fff"
            >
              Voir le Menu
            </Button>
          </View>
        </View>
        <View style={styles.contenair}>
          <View style={styles.coverContainer}>
            <Image source={logo3} style={styles.coverImage} />
          </View>
          <View style={styles.snack}>
            <Text style={styles.title}>Brimo Chicken</Text>
          </View>
          <View>
            <Button
              mode="contained"
              onPress={ShowMenu}
              style={styles.addToCartButton}
              textColor="#fff"
            >
              Voir le Menu
            </Button>
          </View>
        </View>
        <View style={styles.contenair}>
          <View style={styles.coverContainer}>
            <Image source={logo4} style={styles.coverImage} />
          </View>
          <View style={styles.snack}>
            <Text style={styles.title}>Pizza Hut</Text>
          </View>
          <View>
            <Button
              mode="contained"
              onPress={ShowMenu}
              style={styles.addToCartButton}
              textColor="#fff"
            >
              Voir le Menu
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  )
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
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  coverContainer: {
    width: "15%",
    aspectRatio: 1,
    borderRadius: 0,
    overflow: "hidden",
    // borderWidth: 0.5,
  },
  coverImage: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 17,
    color: "#000",
    fontWeight: "600",
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
    borderRadius:0,
  },
})
