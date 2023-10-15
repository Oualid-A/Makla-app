import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import logo from "../assets/logo.png";
import { TextInput, Text } from "react-native-paper";
import { Button } from "react-native-paper";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginForm = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("Snack"); 
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
      <PhoneInput
        style={styles.phone}
        ref={(ref) => {
          this.phone = ref;
        }}
        initialCountry={"ma"}
        initialValue="13178675309"
        textProps={{
          placeholder: "Enter a phone number...",
        }}
      />

      <TextInput
        outlineColor="gray"
        activeOutlineColor="gray"
        label="Mot de passe"
        mode="outlined"
        secureTextEntry={true}
        style={styles.default}
      />

      <Button
        style={styles.button}
        mode="elevated"
        textColor="white"
        onPress={handleLoginPress}
      >
        Se connecter
      </Button>
      <View style={styles.icons}>
        <Icon.Button
          name="facebook"
          backgroundColor="rgba(235, 117, 117, 1)"
          borderRadius={100}
          style={styles.icon}
        />
        <Text>{"\t"}</Text>
        <Icon.Button
          name="google"
          backgroundColor="rgba(235, 117, 117, 1)"
          borderRadius={100}
          style={styles.icon}
        />
        <Text>{"\t"}</Text>
        <Icon.Button
          name="apple"
          backgroundColor="rgba(235, 117, 117, 1)"
          borderRadius={100}
          style={styles.icon}
        />
      </View>
    </ScrollView>
  );
};

const SignupForm = () => {
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
      />
      <TextInput
        label="Prénom"
        mode="outlined"
        outlineColor="gray"
        style={styles.default}
        activeOutlineColor="gray"
      />
      <TextInput
        label="Email"
        mode="outlined"
        type="email"
        outlineColor="gray"
        style={styles.default}
        activeOutlineColor="gray"
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
      />

      <TextInput
        outlineColor="gray"
        activeOutlineColor="gray"
        label="Mot de passe"
        mode="outlined"
        secureTextEntry={true}
        style={styles.default}
      />

      <Button
        style={styles.button}
        mode="elevated"
        textColor="white"
        onPress={() => console.log("Connexion")}
      >
        S'inscrire
      </Button>
      <View style={styles.icons}>
        <Icon.Button
          name="facebook"
          backgroundColor="rgba(235, 117, 117, 1)"
          borderRadius={100}
          style={styles.icon}
        />
        <Text>{"\t"}</Text>
        <Icon.Button
          name="google"
          backgroundColor="rgba(235, 117, 117, 1)"
          borderRadius={100}
          style={styles.icon}
        />
        <Text>{"\t"}</Text>
        <Icon.Button
          name="apple"
          backgroundColor="rgba(235, 117, 117, 1)"
          borderRadius={100}
          style={styles.icon}
        />
      </View>
    </ScrollView>
  );
};

export default function Login() {
  
  const [activeTab, setActiveTab] = useState("login");

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <View style={styles.half}></View>
      <View style={styles.form}>
        <View style={styles.tabs}>
          <Button
            mode="text"
            textColor="black"
            onPress={() => setActiveTab("login")}
            color={activeTab === "login" ? "black" : "gray"}
          >
            Se connecter
          </Button>
          <Button
            mode="text"
            textColor="black"
            onPress={() => setActiveTab("signup")}
            color={activeTab === "signup" ? "black" : "gray"}
          >
            S'inscrire
          </Button>
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
    backgroundColor: "rgba(235, 117, 117, 1)",
  },
  logo: {
    marginTop: "10%",
    marginBottom: "10%",
    width: "40%",
    height: "50%",
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
    bottom: "14%",
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
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(239, 239, 244, 1)",
    width: "100%",
    overflow: "scroll",
  },
  login: {
    marginTop: 5,
    overflow: "scroll",
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
    backgroundColor: "rgba(235, 117, 117, 1)",
    borderWidth: 1,
    borderRadius: 3,
  },
  default: {
    marginTop: 8,
  },
});
