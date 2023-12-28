import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import table from "../assets/burger.png";
import pay_back from "../assets/back_image/pay_back.png";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Stripe from "./Stripe";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "../environnement";
import * as Location from 'expo-location';

const BASE_URL = environment.url_api;

const screenHeight = Dimensions.get("window").height;

export default function Cart() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [prixPlat, setPrixPlat] = useState(0);
  const [restaurant_id, setRest_id] = useState(0);
  const [location, setLocation] = useState(null);

  const prixDilevery = 13;
  const fraisMakla = 2;
  const prixTotal = (prixPlat + prixDilevery + fraisMakla).toFixed(2);
  console.log("prixTotal sss", parseFloat(prixTotal));

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
  };
  
  const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const user = await AsyncStorage.getItem("response");
        const token = await AsyncStorage.getItem("token");
        const user_id = JSON.parse(user);

        const response = await fetch(
          `${BASE_URL}/panier/getByUserId/${user_id.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des données du panier"
          );
        }

        const data = await response.json();
        let totalPlats = data.reduce((acc, item) => {
          setRest_id(item.restaurants.id);
          return acc + item.platss.prix * item.nombre;
        }, 0);
        setCartData(data);
        setPrixPlat(totalPlats);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };
    fetchCartData();
    requestLocationPermission();
      getLocation();
    console.log("restaurants id : ", restaurant_id);
  }, []);

  const deleteItemCart = async (panierId) => {
    const token = await AsyncStorage.getItem("token");

    const response = await fetch(`${BASE_URL}/panier/remove/${panierId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la supprission des données du panier");
    } else {
      alert("suppression succes");
      setCartData(cartData.filter((item) => item.id !== panierId));
      
      // setCartData(cartData.filter(item => item.id !== panierId));
    }
  };
  const handlePay = () => {
    setModalVisible(true); // Show the modal
  };

  const handleHome = () => {
    navigation.navigate("LandingPage");
  };
  const handlePaymentSuccess = async (stripeToken) => {
    // Logique d'envoi de commande
    // Utilisez stripeToken pour la partie paiement
    // Envoyez les détails du panier à votre API backend

    alert("Payment passé avec succés");
    const user = await AsyncStorage.getItem("response");
    const token = await AsyncStorage.getItem("token");
    const user_id = JSON.parse(user);
    const generateOrderNumber = () => {
      return (
        "CMD" +
        Math.random()
          .toString(36)
          .substr(2, 9)
          .toUpperCase()
      );
    };

    console.log("prixTota kssocsocnl", prixTotal);
   console.log("longitude", String(location.coords.longitude));
   console.log("lantitude", String(location.coords.longitude));
    const commande = {
      numerocommande: generateOrderNumber(),
      plat: "",
      nombreplat: cartData.length,
      prixtotal: prixTotal,
      user: {
        id: user_id.id,
      },
      restaurants: {
        id: restaurant_id,
      },
      plats: cartData.map((item) => ({ id: item.platss.id })),
      lontitudeclient: String(location.coords.longitude),
      latitudeclient : String(location.coords.latitude)
    };
    console.log("ids = ", commande.plats);
    try {
      const response1 = await fetch(`${BASE_URL}/commande/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(commande), 
      });
      if (response1.ok) {
        // Convertir la réponse en JSON
        const jsonResponse = await response1.json();
        await AsyncStorage.setItem('commandeId', String(jsonResponse.id));
        console.log("Response JSON ====", jsonResponse);
      } 
      if (!response1.ok) {
        throw new Error("Erreur lors de l'envoi de la commande");
      } else {
        alert("added");
        
        const response = await fetch(`${BASE_URL}/panier/clear/${user_id.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la supprission des données du panier"
          );
        } else {
          setCartData(cartData.filter((item) => item.userss.id !== user_id.id));
          setPrixPlat(0)
          
          alert("Navigation vers la carte dans 5 secondes");

          // Utiliser setTimeout pour retarder la navigation
          setTimeout(() => {
            navigation.navigate("Map");
          }, 5000); 
        }
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la commande:", error);
    }

    //navigation.navigate("Map")

    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar hidden />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            width: "57%",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            name="chevron-back"
            size={40}
            color="black"
            style={{ marginLeft: 10 }}
            onPress={handleHome}
          />
          <Text style={styles.title}>Panier</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cart}>
            {cartData.map((item, index) => (
              <View style={styles.cart_items} key={index}>
                <View style={styles.content}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{}}>
                      <Image
                        style={{ resizeMode: "contain", width: 60, height: 60 }}
                        source={{
                          uri: `https://firebasestorage.googleapis.com/v0/b/makla-delivery.appspot.com/o/${item.platss.img_url}?alt=media`,
                        }}
                      />
                    </View>
                    <View style={{ paddingHorizontal: 14 }}>
                      <Text style={styles.name}>{item.platss.nomplat}</Text>
                      <Text style={styles.price}>{item.platss.prix} MAD</Text>
                      <Text style={styles.locate}>
                        {item.restaurants.restaurantt}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.quantity}>{item.nombre} pièces</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 10,
                  }}
                >
                  <Text style={styles.totalPrice}>
                    Prix Total {item.platss.prix * item.nombre} DH
                  </Text>
                  <Text
                    style={styles.delete_btn}
                    onPress={() => deleteItemCart(item.id)}
                  >
                    supprimer
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.total}>
            <Text style={styles.locate}>Résumé de paiement</Text>
            <View style={styles.detail}>
              <Text style={styles.service}>Total de plats</Text>
              <Text style={styles.totalPrice}> {prixPlat.toFixed(2)} MAD</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.service}>Prix de livraison</Text>
              <Text style={styles.totalPrice}> {prixDilevery} MAD</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.service}>Frais de Makla-delivery</Text>
              <Text style={styles.totalPrice}> {fraisMakla} MAD</Text>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.detail}>
              <Text style={styles.service}>Total</Text>
              <Text style={styles.totalPrice}>
                {" "}
                {(prixPlat + prixDilevery + fraisMakla).toFixed(2)} MAD
              </Text>
            </View>
          </View>
        </ScrollView>
        <View>
          <Button
            style={styles.orderNow}
            mode="text"
            textColor="white"
            onPress={handlePay}
          >
            Envoyer la commande
          </Button>
        </View>
      </View>
      <Modal
        animationType="slide"
        style={styles.modalView}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalView}>
          <ImageBackground
            source={pay_back}
            style={{ flex: 1, resizeMode: "contain" }}
          >
            <Ionicons
              name="close"
              size={33}
              color="black"
              onPress={() => setModalVisible(false)}
              style={{ marginLeft: 10, fontWeight: "700", marginTop: 10 }}
            />
            <Stripe onPaymentSuccess={handlePaymentSuccess} />
          </ImageBackground>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6fc",
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    color: "#4a4a4a",
    fontWeight: "bold",
    marginBottom: 10,
  },
  cart: {
    padding: 10,
  },
  cart_items: {
    // #f2f6fc
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
    marginTop: 10,
    padding: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  locate: {
    fontSize: 14,
    color: "#888",
  },
  quantity: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(250, 100, 12, 1)",
    color: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
  delete_btn: {
    fontSize: 14,
    color: "#f00",
  },
  orderNow: {
    backgroundColor: "black",
    padding: 5,
    color: "#fff",
    marginBottom: 10,
    marginTop: 10,
    width: "50%",
    alignSelf: "center",
  },
  detail: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  total: {
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 10,
    elevation: 2,
  },
  separator: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 5,
    marginBottom: -5,
    marginTop: 13,
  },
  modalView: {
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 0,
    height: screenHeight * 0.5,
    width: "98%",
    // marginTop: "70%",
    borderWidth: 1,
    borderColor: "#ddd",
    marginLeft: "1%",
    position: "absolute",
    bottom: 0,
  },
});
