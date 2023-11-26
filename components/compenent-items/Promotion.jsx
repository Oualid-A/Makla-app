import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
const renderCard = ({ item }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        
        <ImageBackground
          source={item.image}
          style={{ height: 150, width: "100%", resizeMode: "contain" }}
        >
          <Text style={styles.promotionText}>{item.title}</Text>
          <Text style={styles.promotionText}>{item.promotion}</Text>
        </ImageBackground>
      </View>
    );
  };
  

const Promotion = () => {
    const cards = [
        { id: 1, title: "Card 1", image: require("../../assets/pizzaL.jpg"), promotion: "20% off" },
        { id: 2, title: "Card 2", image: require("../../assets/pizzaL.jpg"), promotion: "Buy 1 get 1 free" },
        { id: 3, title: "Card 3", image: require("../../assets/pizzaL.jpg"), promotion: "Special offer" },
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
      <View style={{width:"90%"}}>
      <Carousel
        data={cards}
        renderItem={renderCard}
        sliderWidth={600}
        itemWidth={250}
        autoplay
        autoplayInterval={4000}
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
    textAlign: "center",
    marginBottom: 10,
  },
});
