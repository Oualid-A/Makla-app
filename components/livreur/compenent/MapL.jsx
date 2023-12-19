import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import Footer from "./Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { environment } from "../../../environnement";
import Ionicons from "@expo/vector-icons/Feather";


  const BASE_URL = environment.url_api;
const MapL = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [commands, setCommands] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const getLocation = async () => {
      try {
        const iddemmande = await AsyncStorage.getItem("demandeId");
        const token = await AsyncStorage.getItem("token");

        const response = await axios.get(
          `${BASE_URL}/commande/${iddemmande}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Reee:", response.data.lontitudelivreur);
        setCommands(response.data);

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);

        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      } catch (error) {
        console.error("Error fetching commands:", error);
      }
    };

    getLocation();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {initialRegion && (
          <MapView style={styles.map} initialRegion={initialRegion}>
            {currentLocation && (
              <Marker
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                }}
                title="Votre Loca"
              />
            )}
            {commands && commands.latitudeclient && commands.longitudeclient && (
              <Marker
                coordinate={{
                 // latitude: parseFloat(commands.latitudeclient),
                 // longitude: parseFloat(commands.longitudeclient),
                 latitude: parseFloat(37.4220938),
                 longitude: parseFloat(-122.083926),
                }}
                title="Emplacement du client"
              />
            )}
            {commands && commands.latitudelivreur && commands.lontitudelivreur && (
              <Marker
                coordinate={{
                  latitude: parseFloat(commands.latitudelivreur),
                  longitude: parseFloat(commands.lontitudelivreur),
                }}
                title="Emplacement du livreur"
              />
            )}
            {commands &&
              commands.latitudelivreur &&
              commands.lontitudelivreur &&
              commands.latitudeclient &&
              commands.longitudeclient && (
                <Polyline
                  coordinates={[
                    {
                      latitude: parseFloat(commands.latitudelivreur),
                      longitude: parseFloat(commands.lontitudelivreur),
                    },
                    {
                     // latitude: parseFloat(commands.latitudeclient),
                     // longitude: parseFloat(commands.longitudeclient),
                      latitude: parseFloat(37.4220938),
                      longitude: parseFloat(-122.083926),
                    },
                  ]}
                  strokeColor="#000" // Couleur de la ligne
                  strokeWidth={2} // Largeur de la ligne
                />
              )}
          </MapView>
        )}
        {/* Rest of your code */}
      </View>
      {/* <Footer /> */}
      <View style={styles.map}>
        <Ionicons name="home" size={30} onPress={()=>{navigation.navigate("Demandes")}}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  map: {
    position: "absolute",
    width: "auto",
    backgroundColor: "rgba(250,0, 0, 0)",
    borderRadius: 500,
    padding: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 4,
    shadowRadius: 4,
    bottom: 10,
    marginTop: 10,
    right:10,
    borderWidth:0.2,
  },
});

export default MapL;