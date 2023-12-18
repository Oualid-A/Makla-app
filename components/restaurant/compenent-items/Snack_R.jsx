import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Alert,

} from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Appbar, Button, Card } from "react-native-paper";
import axios from "axios";
import { useState , useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from "./Footer";
import { environment } from "../../../environnement";
const BASE_URL = environment.url_api;

export default function Snack_R() {
  const navigation = useNavigation();
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const fetchCommands = async () => {
      try {
        const id = await AsyncStorage.getItem('id');
        // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6YWtpaWlAZ21haWwuY29tIiwiZXhwIjoxNzAxNzkyMzczfQ.aEyfx7ZV8dlGlLrAziI6DQoOKoq1Yf3TDMAsZ4cbrF_OUX1IfsUYs_OcP5FQjL0vHoFwABCjMLb1Ghy1SuhTVA'
        const token = await AsyncStorage.getItem('token');
        const response2 = await axios.get(`${BASE_URL}/admin/getIdRestaurant/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const id2 = response2.data;
        console.log("ddddidididi",id2);

        const response = await axios.get(`${BASE_URL}/commande/AllCommandeByRestaurantId/${id2}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Response:", response.data[0]);

        setCommands(response.data);
      } catch (error) {
        console.error('Error fetching commands:', error);
      }
    };

    fetchCommands();
  }, []);

  const handleDiffuser = async (id) => {
    Alert.alert(`Demmande de ${id}`, " est diffuser", [
      {
        text: "OK",
        onPress: async () => {
          try {
            const token = await AsyncStorage.getItem('token');
            // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6YWtpaWlAZ21haWwuY29tIiwiZXhwIjoxNzAxNzkyMzczfQ.aEyfx7ZV8dlGlLrAziI6DQoOKoq1Yf3TDMAsZ4cbrF_OUX1IfsUYs_OcP5FQjL0vHoFwABCjMLb1Ghy1SuhTVA';
            const response = await axios.put(`${BASE_URL}/commande/modifierCommande/${id}`, {}, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            console.log("Response dooooo:", response.data);
            
            // Handle the diffuser action here
            console.log(`Diffusing request: ${id}`);
          } catch (error) {
            console.error("Error updating command:", error);
          }
        },
      },
    ]);
  };
  

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 0, marginTop: 4 }}>
        <Text style={styles.title2}>Liste des Demandes</Text>
        {commands.map(command => renderRequest(command))}
      </ScrollView>
      <Footer />
    </>
  );

  function renderRequest(command) {
    const {id, numerocommande, user, prixTotal, restaurants, plats } = command;

    return (
      <View style={styles.contenair} key={numerocommande}>
        {/* ... your existing code */}
        <View style={styles.snack}>
          <Text style={styles.title}>{user.nom} {user.prenom}</Text>
          <Text style={styles.description}>{plats.length} Plats </Text>
<Text>{prixTotal} DH</Text>
        </View>
        <View>
          <Button
            mode="contained"
            onPress={() => handleDiffuser(id)}
            style={styles.addToCartButton}
            textColor="#fff"
          >
            Diffuser
          </Button>
        </View>
      </View>
    );
  }

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
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  coverContainer: {
    width: "20%",
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
    fontSize: 13,
    marginLeft: "7%",
    fontWeight: "700",
    marginTop: "2%",
  },

  title2: {
    fontSize: 30,
    marginLeft: "7%",
    marginBottom:"7%",
  
    fontWeight: "700",
    marginTop: "9%",
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
  description: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: "#9d9d9d",
  },
});