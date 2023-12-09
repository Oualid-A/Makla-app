import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import pizza from "../../assets/salad.png";
import { Image } from "react-native-elements";
const renderCard = ({ item }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ImageBackground
        source={item.image}
        style={{ height: 150, width: "100%" }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#11182789",
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 20,
              // backgroundColor: "#a9bde8cc",
              borderRadius: 10,
              padding:5
            }}
          >
            <Text style={styles.promotionText}>{item.title}</Text>
            <Text style={styles.promotionPrice}>{item.promotion}</Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <Image
              source={item.plat}
              style={{
                width: 150,
                height: 150,
                resizeMode: "contain",
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Promotion = () => {
  const cards = [
    {
      id: 1,
      title: "Pizza Grand Taille",
      image: require("../../assets/pizzaL.jpg"),
      plat: require("../../assets/salad.png"),
      promotion: "20% off",
    },
    {
      id: 2,
      title: "Tacos Poulet",
      image: require("../../assets/pizzaL.jpg"),
      plat: require("../../assets/salad.png"),
      promotion: "Acheter 1 get 1 free",
    },
    {
      id: 3,
      title: "HumBurger",
      image: require("../../assets/pizzaL.jpg"),
      plat: require("../../assets/salad.png"),
      promotion: "Special offer",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Promotions</Text>
      </View>
      <View style={{ width: "90%" }}>
        <Carousel
          data={cards}
          renderItem={renderCard}
          sliderWidth={600}
          itemWidth={380}
          autoplay
          autoplayInterval={8000}
          onSnapToItem={(index) => setActiveIndex(index)}
          loop
          marginLeft={-110}
          removeClippedSubviews={false}
          padding={15}
        />
      </View>
    </View>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 0,
    height: "auto",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  seeAllButton: {
    backgroundColor: "transparent",
  },
  seeAllText: {
    color: "rgba(250, 74, 12, 100)",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 17,
    marginLeft: "5%",
    fontWeight: "700",
    marginTop: "2%",
  },
  promotionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  promotionPrice:{
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(250, 74, 12, 80)",
    marginBottom: 10,
  }
});
