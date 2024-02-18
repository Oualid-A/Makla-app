import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/logo_makla.png";
import { TextInput, Text, Snackbar } from "react-native-paper";
import { Button } from "react-native-paper";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { login, registerUser, getUserByEmail } from "./services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import axios from "axios";
import { environment } from "../environnement";

const BASE_URL = environment.url_api;
const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState(null);

  const handleLoginPress = async () => {
    console.log("ghu ch ¡ ihajha ");
    // // Request location permissions
    // let { status } = await Location.requestForegroundPermissionsAsync();

    // Get current location
    // let location = await Location.getCurrentPositionAsync({});
    // setLocation(location);
    console.log(email);
    console.log(password);
    const isAuthenticated = await login(email, password);
    console.log("ghu ch ¡ ihajha hhhhhhhh ");

    console.log(email);
    console.log(isAuthenticated);

    if (isAuthenticated !== null) {
      const authHeader = isAuthenticated.headers.get("authorization");
      const token = authHeader.split(" ")[1];

      // Include parameters in the URL for a GET request
      const response = await getUserByEmail(email, token);
      console.log("response", response);

      // const userData = JSON.parse(response);
      console.log("userData  =  ",response);
      console.log("users", response);
      // const formDataObject = {
      //   id: userData.id,
      //   lat: location.coords.latitude.toString(),
      //   longi: location.coords.longitude.toString(),
      // };

      // const responsee = await axios.put(
      //   `${BASE_URL}/user/updatecordonner`,
      //   formDataObject,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      console.log("Response data:", response.id);

      // console.log("Token after login:", token);
      //  const getUser = await getUserByEmail(email, token);
      //  console.log("users", getUser);
      AsyncStorage.clear;
      await AsyncStorage.setItem("response", JSON.stringify(response));
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("id", JSON.stringify(response.id));
      console.log("response.role = ",response.role);
      if (response.role === "client") {
        navigation.navigate("LandingPage");
      } else if (response.role === "livreur") {
        navigation.navigate("Demandes");
      } else if (response.role === "restaurant") {
        const response2 = await axios.get(
          `${BASE_URL}/admin/getIdRestaurant/${response.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        await AsyncStorage.setItem("idd", JSON.stringify(response2.data));

        navigation.navigate("RestaurantPage");
      }
    }else{
      console.log("--------------------------------");
      alert('Votre email ou mot de passe est incorrect');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 0,
        flex: 1,
        flexDirection: "col",
        justifyContent: "space-between",
      }}
    >
      <TextInput
        label="Email"
        mode="outlined"
        type="email"
        outlineColor="gray"
        style={styles.default}
        activeOutlineColor="gray"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        outlineColor="gray"
        activeOutlineColor="gray"
        label="Mot de passe"
        mode="outlined"
        secureTextEntry={true}
        style={styles.default}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        style={styles.button}
        mode="elevated"
        textColor="white"
        onPress={handleLoginPress}
      >
        Se connecter
      </Button>
    </ScrollView>
  );
};

const SignupForm = () => {
  const [userData, setUserData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    tel: "",
    // ... other fields
  });
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSignUpPress = async () => {
    const response = await registerUser(userData);

    if (response.ok) {
      console.log("succes");
      setSnackbarVisible(true); // Display the snack bar
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 0,
        flex: 1,
        flexDirection: "col",
        justifyContent: "space-between",
      }}
    >
      <TextInput
        label="Nom"
        mode="outlined"
        outlineColor="gray"
        activeOutlineColor="gray"
        onChangeText={(text) => setUserData({ ...userData, nom: text })}
      />
      <TextInput
        label="Prénom"
        mode="outlined"
        outlineColor="gray"
        style={styles.default}
        activeOutlineColor="gray"
        onChangeText={(text) => setUserData({ ...userData, prenom: text })}
      />
      <TextInput
        label="Email"
        mode="outlined"
        type="email"
        outlineColor="gray"
        style={styles.default}
        activeOutlineColor="gray"
        onChangeText={(text) => setUserData({ ...userData, email: text })}
      />
      <PhoneInput
        style={styles.phone2}
        ref={(ref) => {
          this.phone = ref;
        }}
        initialCountry={"ma"}
        initialValue="13178675309"
        textProps={{
          placeholder: "Enter a phone number...",
        }}
        onChangeText={(text) => setUserData({ ...userData, tel: text })}
      />

      <TextInput
        outlineColor="gray"
        activeOutlineColor="gray"
        label="Mot de passe"
        mode="outlined"
        secureTextEntry={true}
        style={styles.default}
        onChangeText={(text) => setUserData({ ...userData, password: text })}
      />

      <Button
        style={styles.button}
        mode="elevated"
        textColor="white"
        onPress={handleSignUpPress}
      >
        S'inscrire
      </Button>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: "OK",
          onPress: () => {
            setUserData({
              nom: "",
              prenom: "",
              email: "",
              password: "",
              tel: "",
            });
          },
        }}
      >
        Inscription réussie !
      </Snackbar>
    </ScrollView>
  );
};

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const navigation = useNavigation();

  useEffect(() => {
    const checkAsyncStorage = async () => {
      const userDataString = await AsyncStorage.getItem("response");
      console.log(userDataString);
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData.role === "client") {
          navigation.navigate("LandingPage");
        } else if (userData.role === "restaurant") {
          navigation.navigate("RestaurantPage");
        } else if (userData.role === "livreur") {
          navigation.navigate("Demandes");
        }
      }
    };
    checkAsyncStorage();
  }, [navigation]);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <View style={styles.half}></View>
      <View style={styles.form}>
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => setActiveTab("login")}
            style={styles.clicked}
          >
            <Text>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("signup")}
            style={styles.clicked}
          >
            <Text>S'inscrire</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.login}>
            <Text style={styles.nb}>
              Se connecter avec votre numéro de téléphone et mot de passe
            </Text>
            {activeTab === "login" ? <LoginForm /> : <SignupForm />}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  icon: {
    marginLeft: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    // backgroundColor: "rgba(20, 117, 117, 1)",
    backgroundColor: "#a7c957",
  },
  logo: {
    marginTop: "10%",
    marginBottom: "10%",
    width: "100%",
    height: "50%",
    marginLeft: 15,
  },
  half: {
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(248, 248, 248, 1)",
  },
  form: {
    width: "90%",
    height: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    position: "absolute",
    bottom: "20%",
    zIndex: 1,
    marginLeft: "5%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: "scroll",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabs: {
    flex: 1,
    flexDirection: "row",
    marginTop: "0%",
    padding: 10,
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(239, 239, 244, 1)",
    width: "100%",
    overflow: "scroll",
  },
  login: {
    marginTop: 5,
    overflow: "scroll",
    zIndex: 2,
  },
  nb: {
    fontSize: 11,
    textAlign: "right",
    fontWeight: "100",
    color: "gray",
    padding: 6,
  },
  phone: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e7e7e7",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
  },
  phone2: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e7e7e7",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    marginTop: 8,
  },
  button: {
    width: "50%",
    marginTop: 10,
    marginLeft: "25%",
    marginBottom: 10,
    backgroundColor: "#a7c957",
    borderWidth: 1,
    borderRadius: 3,
  },
  default: {
    marginTop: 8,
  },
  clicked: {
    padding: 7,
  },
});
