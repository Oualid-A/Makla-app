import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Footer from "./compenent-items/Footer";
import { Appbar, Avatar, Button, Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import avatar from "../assets/ilyass.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import Collapsible from "react-native-collapsible";

export default function Informations() {
  const navigation = useNavigation();
  const ShowMenu = () => {
    navigation.navigate("Menu");
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content
          title="Mon Profile"
          style={{ alignItems: "flex-start" }}
        />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.contenair}>
          <View style={styles.image}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>Ilyass MAHAMRAN</Text>
              <Text style={styles.role}>Client</Text>
            </View>
            <Ionicons
              name="settings-outline"
              size={30}
              color="rgba(250, 74, 12, 1)"
              paddingHorizontal={10}
            />
          </View>
          <View style={styles.card}>
            <Ionicons
              name="location-outline"
              size={30}
              color="rgba(250, 74, 12, 1)"
            />
            <View style={styles.links}>
              <Text style={styles.linkName}>Localisation</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Ionicons
              name="notifications-outline"
              size={30}
              color="rgba(250, 74, 12, 1)"
            />
            <View style={styles.links}>
              <Text style={styles.linkName}>Notifications</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Ionicons
              name="time-outline"
              size={30}
              color="rgba(250, 74, 12, 1)"
            />
            <View style={styles.links}>
              <Text style={styles.linkName}>Historique des ordres</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Ionicons
              name="log-out-outline"
              size={30}
              color="rgba(250, 74, 12, 1)"
            />
            <View style={styles.links}>
              <Text style={styles.linkName}>Déconnecter</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 99999,
  },
  image: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 99999,
    width: "94%",
    padding: 10,
    height: "auto",
  },
  card: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 99999,
    width: "94%",
    padding: 10,
    height: "auto",
    elevation: 2,
  },
  info: {
    flexDirection: "column",
    marginRight: 20,
  },
  role: {
    fontSize: 16,
    color: "#7C7B7A",
    lineHeight: 30,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  linkName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  links: {
    flexDirection: "column",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contenair: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
