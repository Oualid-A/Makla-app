import React, { useState , useEffect} from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from "react-native";
import { Appbar, Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/pizza1.jpg";
import plat_india from "../assets/plat_india.jpg";
import logo1 from "../assets/KFC_logo.svg.png";
import Footer from "./compenent-items/Footer";
import burger from "../assets/burger.png";
import HeaderHome from "./compenent-items/HeaderHome";
import SearchBar from "./compenent-items/SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { environment } from "../environnement";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = environment.url_api;
const Menu = ({ route }) => {
  const navigation = useNavigation();
  const [quantities, setQuantities] = useState([0, 0]);
  const [menuItems, setMenuItems] = useState([]);
  const [image, setImage] = useState([]);

  const { restaurantId } = route.params;
  console.log(restaurantId);
  const itemsMen =[...menuItems];
  console.log("id plat", itemsMen[0]?.id);
  // console.log(menuItems.nomplat);
  const handleDetails = (menuItem) => {
    navigation.navigate("Details", {
      product: {
        restaurantId: restaurantId,
        name: menuItem.nomplat,
        id_prod: menuItem.id,
        image: burger,
        price: menuItem.prix,
        description: menuItem.description,
        location: "Oujda, Hey Al-Qods", 
        rating: 4.8,
        quantity: 2,
        images: [menuItem.img_url],
      },
    });
  };

  useEffect(() => {
    // Fetch menu items for the selected restaurant
    const fetchMenuItems = async () => {
   
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(
          `${BASE_URL}/restaurant/platsByRestaurant/${restaurantId}`,  {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMenuItems(response.data);
        console.log("response.data = ", response);
        const imgPlat = await axios.get(
          `${BASE_URL}/image/getImage/${itemsMen[0]?.id}`,  {
            headers: { 
              Authorization: `Bearer ${token}`,
            },
          }
        )
        setImage(imgPlat.data[0])
        console.log(imgPlat.data[0]);
    };

    fetchMenuItems();
  }, [restaurantId]);

  const [searchPhrase, setSearchPhrase] = useState("");
  const filteredMenuItems = menuItems.filter((menuItem) =>
    menuItem.nomplat.toLowerCase().includes(searchPhrase.toLowerCase())
  );
  const handlRestaurant = () => {
    navigation.navigate("LandingPage");
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            name="chevron-back"
            size={40}
            color="black"
            style={{ marginLeft: 10 }}
            onPress={handlRestaurant}
          />
          <Text style={{ fontWeight: "600", fontSize: 17 }}>Votre Menu</Text>
        </View>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
        <ScrollView
          contentContainerStyle={{ marginBottom: 20, marginTop: 0 }}
          showsVerticalScrollIndicator={false}
        >
          {filteredMenuItems.map((menuItem, index) => (
            <View style={styles.container} key={index}>
              <TouchableOpacity style={styles.header} onPress={()=>handleDetails(menuItem) }>
                <View style={styles.header}>
                  <View style={styles.coverContainer}>
                  <Image source={{ uri: `https://firebasestorage.googleapis.com/v0/b/makla-delivery.appspot.com/o/${menuItem.img_url}?alt=media`  }} style={styles.coverImage} />
                  </View>
                  <View style={styles.snack}>
                    <Text style={styles.title}>{menuItem.nomplat}</Text>
                    <Text style={styles.price}>{menuItem.prix} MAD</Text>
                  </View>
                  <View style={styles.logoContainer}>
                    <Image source={{ uri: `https://firebasestorage.googleapis.com/v0/b/makla-delivery.appspot.com/o/${menuItem.restaurants.image}?alt=media` }} style={styles.logoImage} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};
export default Menu;

const styles = StyleSheet.create({
  container: {
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 7,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  coverContainer: {
    width: "17%",
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
  title: {
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
    width: "100%",
  },
  cardBtn: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  price: {
    fontSize: 17,
    color: "rgba(250, 74, 12, 1)",
    fontWeight: "500",
  },
  iconButton: {
    padding: 0,
    height: "auto",
    color: "white",
  },
  quantity: {
    color: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
  },
  logoContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardbtn_div: {
    backgroundColor: "rgba(250, 74, 12, 1)",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 100,
    width: "10%",
    height: "auto",
  },
});
