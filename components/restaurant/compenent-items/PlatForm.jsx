import React, {useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "./Footer";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlatForm = () => {
  const navigation = useNavigation();

  const [platData, setPlatData] = useState({
    nomplat: '',
    prix: '',
    restaurants: {
      id: null,
    },
  });

  useEffect(() => {
    // Assuming you're setting 'id' in AsyncStorage when the component mounts
    const fetchId = async () => {
      const ido = await AsyncStorage.getItem('idd');
      setPlatData((prevData) => ({
        ...prevData,
        restaurants: {
          id: ido,
        },
      }));
    };

    fetchId();
  }, []);

  const handleChange = (name, value) => {
    setPlatData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      // Validate token existence or use your preferred authentication approach

      const response = await axios.post(
        'http://192.168.1.109:8081/plat/add',
        platData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const platIdString = response.data.toString();
      await AsyncStorage.setItem('PlatId', platIdString);

      console.log('API Response:', response.data);
      navigation.navigate('UpPhoto');

      setPlatData({
        nomplat: '',
        prix: '',
        restaurants: {
          id: null,
        },
      });
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/burger.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>AJOUTER UN PLAT</Text>
        <Text style={styles.label}>Nom du plat:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange("nomplat", value)}
          value={platData.nomplat}
        />

        <Text style={styles.label}>Prix:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange("prix", value)}
          value={platData.prix}
        />

        <Button onPress={handleSubmit} title="Ajouter" />
      </View>
      <Footer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontFamily: "serif",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  label: {
    color: "#fff",
    marginBottom: 5,
  },
});

export default PlatForm;
