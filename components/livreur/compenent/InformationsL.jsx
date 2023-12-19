import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { useNavigation } from "@react-navigation/native";
import avatar from "../../../assets/avatar.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Dialog,
  Portal,
  PaperProvider,
  TextInput,
  Button,
} from "react-native-paper";

import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { environment } from "../../../environnement";

const BASE_URL = environment.url_api;
export default function InformationsL() {
  const [storedData, setStoredData] = useState({});
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    tel: "",
    cin: "",
    id: null,
  });
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [profileImage, setProfileImage] = useState("");
  const [lilli, setLilli] = useState("");

  useEffect(() => {
    // Fetch the profile image when the component mounts

    fetchProfileImage();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const fetchProfileImage = async () => {
    try {
      const id = await AsyncStorage.getItem("id");
      const token = await AsyncStorage.getItem("token");

      const responses2 = await axios.get(
        `${BASE_URL}/user/afficherPhotoProfile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (responses2.data !== "null") {
        setLilli(responses2.data);
      } else {
        setLilli(null);
      }
    } catch (error) {
      console.error("Error fetching profile image:", error);
    }
  };

  const openImageLibrary = async () => {
    try {
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

        console.log("ImagePicker response:", response.assets[0].uri);

        if (!response.cancelled && response.assets[0].uri) {
          setLilli(response.assets[0].uri); // Set the selected image to lilli state
          const token = await AsyncStorage.getItem("token");
          const id = await AsyncStorage.getItem("id");

          const formData = new FormData();
          formData.append("image", lilli);

          const responses = await axios.post(
            `${BASE_URL}/user/ajouterPhotoProfile/${id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("eeeeeeee", responses.data);
          console.log("Selected image:", response.uri);
        } else {
          console.log("Image selection cancelled or no URI provided.");
        }
      }
    } catch (error) {
      console.error("Error in Axios request:", error);
    }
  };

  const getStoredData = async () => {
    const storedData = await AsyncStorage.getItem("response");
    console.log("storedData", storedData);

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      console.log("parsedData", parsedData);
      setStoredData(parsedData);
    }
  };

  const UpdateUser = async () => {
    const token = await AsyncStorage.getItem("token");
    // const response = await updateInfos(userData, token);
    if (response !== null) {
      alert("Votre info modifié");
    }
  };

  const handleMap = async () => {
    navigation.navigate("Map");
  };

  const logOut = async () => {
    AsyncStorage.clear;
    await AsyncStorage.removeItem("response");
    navigation.replace("Login");
  };

  useEffect(() => {
    getStoredData();
  }, []);

  return (
    <>
      <PaperProvider>
        <View style={{ flex: 1 }}>
          <StatusBar />
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
              size={33}
              color="black"
              style={{ marginLeft: 10 }}
              onPress={() => {navigation.navigate("Demandes")}}
            />
            <Text style={styles.title2}>Profile</Text>
          </View>
          <ScrollView>
            <View style={styles.contenair}>
              <View style={styles.image}>
                <TouchableOpacity
                  onPress={openImageLibrary}
                  style={styles.avatar}
                >
                  {lilli ? (
                    <Image source={{ uri: lilli }} style={styles.avatar} />
                  ) : (
                    <Image source={avatar} style={styles.avatar} />
                  )}
                </TouchableOpacity>

                <View style={styles.info}>
                  <Text style={styles.name}>
                    {storedData.nom ? storedData.nom : "inconnu"}{" "}
                    {storedData.prenom ? storedData.prenom : ""}
                  </Text>
                  <Text style={styles.role}>
                    {storedData.role ? storedData.role : "Rôle inconnu"}
                  </Text>
                </View>
                <TouchableOpacity onPress={showDialog}>
                  <Ionicons
                    name="document-text-outline"
                    size={30}
                    color="rgba(250, 74, 12, 1)"
                    paddingHorizontal={10}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.card} onPress={handleMap}>
                <Ionicons
                  name="location-outline"
                  size={30}
                  color="rgba(250, 74, 12, 1)"
                />
                <View style={styles.links}>
                  <Text style={styles.linkName}>Localisation</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.card}>
                <Ionicons
                  name="notifications-outline"
                  size={30}
                  color="rgba(250, 74, 12, 1)"
                />
                <View style={styles.links}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.linkName}>Notifications</Text>
                  </TouchableOpacity>
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
              <TouchableOpacity style={styles.card} onPress={logOut}>
                <Ionicons
                  name="log-out-outline"
                  size={30}
                  color="rgba(250, 74, 12, 1)"
                />
                <View style={styles.links}>
                  <Text style={styles.linkName}>Déconnecter</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* <Footer /> */}
        </View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Modifier vos Informations</Dialog.Title>
            <Dialog.Content>
              <TextInput
                label="Nom"
                style={{ marginBottom: 10 }}
                value={storedData.nom ? storedData.nom : ""}
                onChangeText={(text) => setUserData({ ...userData, nom: text })}
              />
              <TextInput
                label="Prénom"
                style={{ marginBottom: 10 }}
                value={storedData.prenom ? storedData.prenom : ""}
                onChangeText={(text) =>
                  setUserData({ ...userData, prenom: text })
                }
              />
              <TextInput
                label="Email"
                style={{ marginBottom: 10 }}
                value={storedData.email ? storedData.email : ""}
                onChangeText={(text) =>
                  setUserData({ ...userData, email: text })
                }
              />
              <TextInput
                label="Numéro de Téléphone"
                style={{ marginBottom: 10 }}
                value={storedData.tel ? storedData.tel : ""}
                onChangeText={(text) => setUserData({ ...userData, tel: text })}
              />
              <TextInput
                label="CIN"
                style={{ marginBottom: 10 }}
                value={storedData.cin ? storedData.cin : ""}
                onChangeText={(text) => setUserData({ ...userData, cin: text })}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Annuler</Button>
              <Button onPress={UpdateUser}>Enregistrer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginLeft: "7%",
    marginBottom: "7%",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "700",
    marginTop: "6%",
  },
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
    alignSelf: "center",
    marginLeft: "-25%",
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
  title2: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    color: "#4a4a4a",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
