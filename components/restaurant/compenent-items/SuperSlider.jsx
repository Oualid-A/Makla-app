import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Slider from "./Slider";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "../../../environnement";
const BASE_URL = environment.url_api;

const SuperSlider = () => {
  const [platIds, setPlatIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlatIds = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const id = await AsyncStorage.getItem("idd");
        const response = await axios.get(`${BASE_URL}/image/findAllIds/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPlatIds(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching platIds:", error);
        setLoading(false);
      }
    };

    fetchPlatIds();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={{padding:10}} >
      <Text style={styles.title}>Mes Plats</Text>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
          platIds.map((platId) => <Slider key={platId} platId={platId} />)
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft: "2%",
    fontWeight: "700",
    marginTop: "6%",
    marginBottom: "5%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:.6,

  },
});

export default SuperSlider;
