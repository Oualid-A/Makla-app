import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { ScrollView } from "react-native-gesture-handler"
import table from "../assets/burger.png"
import {  Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

const cartItems = [
  {
    name: "Chicken Tikka Masala",
    price: "$12.95",
    restaurant: "Pizza Hut",
    quantity: 2,
    totalPrice: 12.95 * 2,
  },
  {
    name: "Margherita Pizza",
    price: "$9.99",
    restaurant: "Domino's",
    quantity: 1,
    totalPrice: 9.99,
  },
  {
    name: "Caesar Salad",
    price: "$8.50",
    restaurant: "Salad Express",
    quantity: 3,
    totalPrice: 8.5 * 3,
  },
]

export default function Cart() {
  const navigation = useNavigation()
  const handlePay = ()=>
  {
    navigation.navigate("Stripe")
  }
  
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View>
        <Text style={styles.title}>Your cart</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cart}>
          {cartItems.map((item, index) => (
            <View style={styles.cart_items} key={index}>
              <View style={styles.content}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{}}>
                    <Image
                      style={{ resizeMode: "contain", width: 60, height: 60 }}
                      source={table}
                    />
                  </View>
                  <View style={{ paddingHorizontal: 14 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.locate}>{item.restaurant}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.quantity}>{item.quantity} pièces</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 10,
                }}
              >
                <Text style={styles.totalPrice}>
                  Total Price ${item.totalPrice.toFixed(2)}
                </Text>
                <Text style={styles.delete_btn}>supprimer</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.total}>
              <Text style={styles.locate}>Résumé de paiement</Text>
              <View  style={styles.detail} >
                <Text style={styles.service}>Total de plats</Text>
                <Text style={styles.totalPrice}> 59.87 MAD</Text>
              </View>
              <View style={styles.detail} >
                <Text style={styles.service}>Prix de livraison</Text>
                <Text style={styles.totalPrice}> 59.87 MAD</Text>
              </View>
              <View style={styles.detail} >
                <Text style={styles.service}>Fraix de restaurant</Text>
                <Text style={styles.totalPrice}> 59.87 MAD</Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.detail} >
                <Text style={styles.service}>Total</Text>
                <Text style={styles.totalPrice}> 59.87 MAD</Text>
              </View>
        </View>
      </ScrollView>
      <View>
      <Button
          style={styles.orderNow}
          mode="text"
          textColor="white"
          onPress={handlePay}
        >
           Envoyer la commande
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6fc",
  },
  title: {
    fontSize: 20,
    marginTop: 25,
    textAlign: "center",
    color: "#4a4a4a",
    fontWeight: "bold",
    marginBottom: 10,
  },
  cart: {
    padding: 10,
  },
  cart_items: {
    // #f2f6fc
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
    marginTop: 10,
    padding: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  locate: {
    fontSize: 14,
    color: "#888",
  },
  quantity: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(250, 100, 12, 1)",
    color: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
  delete_btn: {
    fontSize: 14,
    color: "#f00",
  },
  orderNow:{
    backgroundColor:"black",
    padding:5,
    color:"#fff",
    marginBottom:10,
    marginTop:10,
    width:"50%",
    alignSelf:"center"
  },
  detail:{
    flex:1,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:15
  
  },
  total:{
    padding:10,
    backgroundColor:"#fff",
    marginTop:10,
    elevation:2
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 5,
    marginBottom:-5,
    marginTop:13,
  },
})
