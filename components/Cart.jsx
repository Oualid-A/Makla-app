import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Cart = ({ cartItems }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Panier d'achat</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>Prix : {item.price} MAD</Text>
            {/* Ajoutez ici des informations supplémentaires sur l'article */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItem: {
    backgroundColor: "lightgray",
    padding: 10,
    margin: 5,
  },
});

export default Cart;