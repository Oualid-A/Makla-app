import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "./Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "../../../environnement";
import pay_back from "../../../assets/back_image/pay_back.png";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

const BASE_URL = environment.url_api;

const PlatForm = () => {
  const navigation = useNavigation();

  const [profileImages, setProfileImages] = useState([""]);

  const [platData, setPlatData] = useState({
    nomplat: "",
    prix: "",
    description: "",
    img_url: "",
    restaurants: {
      id: null,
    },
  });

  useEffect(() => {
    // Assuming you're setting 'id' in AsyncStorage when the component mounts
    const fetchId = async () => {
      const ido = await AsyncStorage.getItem("idd");
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
      const token = await AsyncStorage.getItem("token");
      // Validate token existence or use your preferred authentication approach

      const response = await axios.post(`${BASE_URL}/plat/add`, platData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const platIdString = response.data.toString();
      await AsyncStorage.setItem("PlatId", platIdString);

      console.log("API Response:", response.data);
      navigation.navigate("UpPhoto");

      setPlatData({
        nomplat: "",
        prix: "",
        restaurants: {
          id: null,
        },
      });
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };
  const openImageLibrary = async (index) => {
    try {
      // ... (unchanged code)
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }

      if (status === "granted") {
        const response = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
        });

        console.log(
          `ImagePicker response for image ${index + 1}:`,
          response.assets[0].uri
        );

        if (!response.cancelled && response.assets[0].uri) {
          const updatedImages = [...profileImages];
          updatedImages[index] = response.assets[0].uri;
          setProfileImages(updatedImages);
          console.log(`Selected image ${index + 1}:`, response.assets[0].uri);
          const parts = response.assets[0].uri.split("/");
          const imageName = parts[parts.length - 1];
          setProfileImages([imageName]); // Store only the filename
          console.log(parts[parts.length - 1]);
          setPlatData((prevData) => ({ ...prevData, img_url: imageName }));
        } else {
          console.log(
            `Image ${index + 1} selection cancelled or no URI provided.`
          );
        }
      }
    } catch (error) {
      console.error("Error while picking an image:", error);
    }
  };
  return (
    <ImageBackground source={pay_back} style={styles.background}>
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
            onPress={()=>{navigation.navigate("RestaurantPage")}}
          />
          <Text style={{ fontWeight: "700", fontSize: 17, color:"#2b2d42" }}>Ajouter Plat</Text>
        </View>
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

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange("description", value)}
          value={platData.description}
        />
        <Text style={styles.label}>Image :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange("img_url", value)}
          value={platData.img_url}
          // keyboardType="file"
          editable={false}
        ></TextInput>

        {profileImages.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => openImageLibrary(index)}
            style={styles.uploadBtnContainer}
          >
            {image ? (
              <Text
                // source={{ uri: image }}
                style={styles.uploadBtn}
                // style={{ width: "100%", height: "100%", textAlign:"center" }}
              >
                L'image est bien ajouter
              </Text>
            ) : (
              <Text style={styles.uploadBtn}>Ajouter Image</Text>
            )}
          </TouchableOpacity>
        ))}

        <Button onPress={handleSubmit} title="Ajouter" />
      </View>
      {/* <Footer /> */}
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
    // backgroundColor: "green",
  },
  title: {
    fontFamily: "serif",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
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
    color: "#000",
    marginBottom: 5,
  },
  uploadBtnContainer: {
    height: 45,
    width: 125,
    backgroundColor: "red",
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderColor: "white",
    borderWidth: 1,
    overflow: "hidden",
    opacity: 0.95,
    marginBottom: 10,
    padding: 2,
  },
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.9,
    color: "white",
    fontWeight: "bold",
  },
});

export default PlatForm;
