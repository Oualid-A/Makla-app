import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { Appbar, Avatar, Button, Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/pizza1.jpg";
import plat_india from "../assets/plat_india.jpg";
import paila from "../assets/paila.jpg";
import { Icon } from "react-native-elements";

export default function Menu() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);

  const ShowMenu = () => {
    navigation.navigate("Menu");
  };

  const _goBack = () => navigation.navigate("Snack");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Menu" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{ paddingBottom: 0, marginTop: 4 }}>
        <Card style={styles.card}>
          <Card.Cover source={logo} />
          <Card.Content style={styles.cardContent}>
            <Text style={styles.title}>Pizza Fruit de mer</Text>
            <Text style={styles.price}>59 MAD</Text>
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <IconButton
              style={styles.iconButton}
              icon="minus"
              onPress={decrementQuantity}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <IconButton
              style={styles.iconButton}
              icon="plus"
              onPress={incrementQuantity}
            />
            <Button
              onPress={() => console.log("Add to Cart")}
              style={styles.addToCartButton}
            >
              Aouter au Panier
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={plat_india}/>
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge" style={styles.title}>
              Tacos India
            </Text>
            <Text variant="bodyMedium" style={styles.price}>
              36 MAD
            </Text>
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <IconButton
              style={styles.iconButton}
              icon="minus"
              onPress={decrementQuantity}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <IconButton
              style={styles.iconButton}
              icon="plus"
              onPress={incrementQuantity}
            />
            <Button
              onPress={() => console.log("Add to Cart")}
              style={styles.addToCartButton}
            >
              Aouter au Panier
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={paila} />
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge" style={styles.title}>
              Paila
            </Text>
            <Text variant="bodyMedium" style={styles.price}>
              40 MAD
            </Text>
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <IconButton
              style={styles.iconButton}
              icon="minus"
              onPress={decrementQuantity}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <IconButton
              style={styles.iconButton}
              icon="plus"
              onPress={incrementQuantity}
            />
            <Button
              onPress={() => console.log("Add to Cart")}
              style={styles.addToCartButton}
            >
              Aouter au Panier
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    marginTop: 4,
  },
  card: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
  },
  price: {
    fontSize: 18,
    marginTop: 6,
  },
  cardActions: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    borderColor: "rgba(235, 117, 117, 1)",
  },
  quantity: {
    borderWidth: 0.5,
    width: "20%",
    padding: 7,
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 10,
    color: "rgba(235, 117, 117, 1)",
    borderColor: "gray",
  },
  addToCartButton: {
    backgroundColor: "rgba(235, 117, 117, 1)",
  },
});
