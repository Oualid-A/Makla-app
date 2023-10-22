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

export default function Popular() {
  return (
    <View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <Text style={styles.title}>Populaire</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>Voir tout</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.popular}>
          <View style={styles.popularItems}>
            <Image source={tacos} style={styles.popularItemsImage} />
            <View style={{ padding: 10 }}>
              <Text style={styles.popularItemsName}>Plats populaires</Text>
              <Text style={styles.price}>50 MAD</Text>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Ionicons name="star" size={20} color="#d8ce0c" />
                <Text style={{ paddingHorizontal: 5, fontSize: 15 }}>4.8</Text>
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Ionicons name="locate" size={20} color="#9d9d9d" />
                  <Text style={styles.location}>Hey Al-Qods Oujda</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.popular}>
          <View style={styles.popularItems}>
            <Image source={tacos} style={styles.popularItemsImage} />
            <View style={{ padding: 10 }}>
              <Text style={styles.popularItemsName}>Plats populaires</Text>
              <Text style={styles.price}>50 MAD</Text>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Ionicons name="star" size={20} color="#d8ce0c" />
                <Text style={{ paddingHorizontal: 5, fontSize: 15 }}>4.8</Text>
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Ionicons name="locate" size={20} color="#9d9d9d" />
                  <Text style={styles.location}>Hey Al-Qods Oujda</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.popular}>
          <View style={styles.popularItems}>
            <Image source={tacos} style={styles.popularItemsImage} />
            <View style={{ padding: 10 }}>
              <Text style={styles.popularItemsName}>Plats populaires</Text>
              <Text style={styles.price}>50 MAD</Text>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Ionicons name="star" size={20} color="#d8ce0c" />
                <Text style={{ paddingHorizontal: 5, fontSize: 15 }}>4.8</Text>
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Ionicons name="locate" size={20} color="#9d9d9d" />
                  <Text style={styles.location}>Hey Al-Qods Oujda</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
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
});
