import React, { useState } from "react"
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native"
import { IconButton, Button } from "react-native-paper"
import Carousel, { Pagination } from "react-native-snap-carousel"
import Ionicons from "@expo/vector-icons/Ionicons"
import table from "../assets/food_bg.jpg"
import { Checkbox } from "react-native-paper"
import cheese from "../assets/cheese.png"
import tomatoesImage from "../assets/tomate.png"
import onion from "../assets/onion.png"
import laiture from "../assets/laiture.png"
import CustomToggleButton from "./compenent-items/CustomToggleButton"
import { useNavigation } from "@react-navigation/native"

export default function Details({ route }) {
  const [quantity, setQuantity] = React.useState(1)
  const [cart, setCart] = useState([])
  const navigation = useNavigation()

  const addToCart = () => {
    const itemToAdd = {
      id: product.id, // Use a unique identifier for the product
      name: product.name,
      price: product.price,
      quantity,
      // Add other product details if needed
    }
    setCart([...cart, itemToAdd])
    setQuantity(1)
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const { product } = route.params
  const [toppingCheese, setToppingCheese] = React.useState(false)
  const [toppingTomatoes, setToppingTomatoes] = React.useState(false)
  const [toppingOnion, setToppingOnion] = React.useState(false)
  const [toppingLaiture, setToppingLaiture] = React.useState(false)
  const [activeSlide, setActiveSlide] = React.useState(0) // Pour suivre l'index de l'image actuellement visible

  const onSnapToItem = (index) => {
    setActiveSlide(index)
  }  
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.detail}>
          <ImageBackground source={table} style={styles.background}>
          <Carousel
              data={product.images}
              renderItem={({ item }) => (
                <ImageBackground source={item} style={styles.pics} />
              )}
              sliderWidth={410}
              itemWidth={350}
              onSnapToItem={onSnapToItem} // Appel de la fonction onSnapToItem lorsqu'une image est visible
            />
            <Pagination
              dotsLength={product.images.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.paginationDot}
              inactiveDotStyle={styles.paginationDotInactive}
              inactiveDotOpacity={0.6}
              inactiveDotScale={1.6}
            />
          </ImageBackground>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.cardbtn_div}>
            <IconButton
              style={styles.iconButton}
              icon="minus"
              iconColor="white"
              onPress={decrementQuantity}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <IconButton
              style={styles.iconButton}
              icon="plus"
              iconColor="white"
              onPress={incrementQuantity}
            />
          </View>
          <View style={styles.about}>
            <View>
              <Text style={{ fontSize: 25, fontWeight: "700", marginLeft: 15 }}>
                {product.name}
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "700",
                  marginLeft: 15,
                  color: "rgba(250, 100, 12, 1)",
                }}
              >
                Prix : {product.price} MAD
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  marginTop: 5,
                  alignItems: "center",
                }}
              >
                <Ionicons name="location" size={25} color="#9d9d9d" />
                <Text style={styles.location}>{product.location}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Ionicons name="star" size={26} color="#fcbc0b" />
              <Text style={{ fontSize: 20, paddingHorizontal: 8 }}>
                {product.rating}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 15,
              marginTop: 10,
            }}
          >
            Description
          </Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 15,
              marginTop: 0,
              marginBottom: 10,
            }}
          >
            Personnalisé
          </Text>
        <View style={styles.choices}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CustomToggleButton
              label="Cheese"
              status={toppingCheese ? "checked" : "unchecked"}
              onPress={() => setToppingCheese(!toppingCheese)}
              image={cheese} // Provide the image for cheese
            />
            <CustomToggleButton
              label="Tomatoes"
              status={toppingTomatoes ? "checked" : "unchecked"}
              onPress={() => setToppingTomatoes(!toppingTomatoes)}
              image={tomatoesImage} // Provide the image for tomatoes
            />
            <CustomToggleButton
              label="Laiture"
              status={toppingLaiture ? "checked" : "unchecked"}
              onPress={() => setToppingLaiture(!toppingLaiture)}
              image={laiture} // Provide the image for tomatoes
            />
            <CustomToggleButton
              label="Onion"
              status={toppingOnion ? "checked" : "unchecked"}
              onPress={() => setToppingOnion(!toppingOnion)}
              image={onion} // Provide the image for tomatoes
            />
          </ScrollView>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          bottom: 0,
        }}
      >
        <Text style={styles.totalPrice}>{product.price * quantity} MAD</Text>
        <Button
          style={styles.add_cart}
          mode="text"
          textColor="white"
          onPress={addToCart}
        >
          <Ionicons name="cart" size={22} color="black" /> Ajouter au panier
        </Button>
      </View>
      {/* <Footer /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detail: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 2,
  },
  pics: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    padding: 0,
    height: "auto",
    color: "white",
  },
  quantity: {
    color: "white",
  },
  cardbtn_div: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: 100,
    width: "30%",
    marginTop: "-5%",
  },
  background: {
    height: "auto",
    resizeMode: "cover",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },
  description: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "left",
    color: "#000",
    opacity: 0.8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
  },
  location: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: "#9d9d9d",
  },
  about: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  totalPrice: {
    padding: 15,
    fontSize: 25,
    fontWeight: "700",
    width: "35%",
    textAlign: "center",
  },
  add_cart: {
    padding: 5,
    width: "55%",
    backgroundColor: "rgba(250, 100, 12, 0.5)",
    borderColor: "gray",
    borderRadius: 10,
  },
  choices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    marginTop: -10,
    marginBottom: -10,
  },
  paginationContainer: {
    paddingVertical: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'white', 
    bottom: 25,

  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
})
