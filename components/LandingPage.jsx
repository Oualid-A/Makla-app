import React from "react"
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import Popular from "./compenent-items/Popular"
import Categories from "./compenent-items/Categories"
import ForYou from "./compenent-items/ForYou"
import Footer from "./compenent-items/Footer"
import HeaderHome from "./compenent-items/HeaderHome"

export default function LandingPage() {
  const navigation = useNavigation()

  const handleLoginPress = () => {
    navigation.navigate("Login")
  }
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <HeaderHome/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.welcome}>
          BIENVENUE À{" "}
          <Text style={{ color: "rgba(250, 74, 12, 1)" }}>MAKLA</Text>
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder={` cherche pour un plat...`}
        >
          {/* ${<Ionicons name="search" size={30} color="gray" />} */}
        </TextInput>
        <Categories />
        <Popular />
        <ForYou />
      </ScrollView>
      {/* <Footer /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"#fff"
    // backgroundColor:"#f2f6fc"
  },
  searchInput: {
    borderWidth: 0,
    backgroundColor: "#fafafa",
    width: "90%",
    height: 50,
    borderRadius: 200,
    marginLeft: "5%",
    marginTop: "5%",
    padding: 10,
    elevation: 2,
    marginBottom: "5%",
  },
  welcome: {
    marginTop: "1%",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
})
