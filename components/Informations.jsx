import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native"
import React, { useState, useEffect } from "react"
import Footer from "./compenent-items/Footer"
import { useNavigation } from "@react-navigation/native"
import avatar from "../assets/ilyass.png"
import Ionicons from "@expo/vector-icons/Ionicons"
import { ScrollView } from "react-native-gesture-handler"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Dialog, Portal, PaperProvider, TextInput, Button } from "react-native-paper"
import { updateInfos } from "./services/AuthService"

export default function Informations() {
  const [storedData, setStoredData] = useState({})
  const navigation = useNavigation()
  const [userData, setUserData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    tel: "",
    cin: "",
    id: null,
  })
  const [visible, setVisible] = React.useState(false)
  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  const getStoredData = async () => {
      const storedData = await AsyncStorage.getItem("userData")
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData)
        setStoredData(parsedData)
      } 
  }

  const UpdateUser = async () => {
    const token = await AsyncStorage.getItem("token")
    const response = await updateInfos(userData, token)
    if (response !== null) {
      alert("Votre info modifié")
    }
  }

  const handleMap = async () => {
    navigation.navigate("Map")
  }

  const logOut = async () => {
    await AsyncStorage.removeItem("userData")
    navigation.replace("Login")
  }

  useEffect(() => {
    getStoredData()
  }, [])


  return (
    <>
      <PaperProvider>
        <View style={{ flex: 1 }}>
          <StatusBar />
          <ScrollView>
            <View style={styles.contenair}>
              <View style={styles.image}>
                <Image source={avatar} style={styles.avatar} />
                <View style={styles.info}>
                  <Text style={styles.name}>
                    {storedData.nom ? storedData.nom : "inconnu"}{" "}
                    {storedData.prenom ? storedData.prenom : "inconnu"}
                  </Text>
                  <Text style={styles.role}>
                    {storedData.role ? storedData.role : "Rôle inconnu"}
                  </Text>
                </View>
                <TouchableOpacity onPress={showDialog}>
                  <Ionicons
                    name="create-outline"
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
          <Footer />
        </View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} >
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
  )
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
})
