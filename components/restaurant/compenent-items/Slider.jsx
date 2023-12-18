import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Text, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { environment } from '../../../environnement';

const BASE_URL = environment.url_api;

const Slider = ({ platId }) => {
  const [images, setImages] = useState([]);
  const [nom, setNom] = useState([]);
  const [prix, setPrix] = useState([]);

  useEffect(() => {
    // Fetch images based on platId
    const fetchImages = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        const response = await axios.get(`${BASE_URL}/image/getImage/${platId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
            });        console.log("rorororororor",response.data);
            const response2 = await axios.get(`${BASE_URL}/plat/${platId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
            });        console.log("rorororororor",response2.data);
        setImages(response.data); // Assuming the response is an array of image URLs
        setPrix(response2.data.prix); // Assuming the response is an array of image URLs
        setNom(response2.data.nomplat); // Assuming the response is an array of image URLs
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [platId]);

  return (
    <View style={[{ width: 380, height: 250 }, styles.container]}>
      {images.length > 0 ? (
     <Swiper style={ styles.wrapper} showsButtons loop={false}>

          {images.map((image, index) => (
            <View key={index} style={styles.popularItemsImage}>
              <Image source={{ uri: image }} style={styles.popularItemsImage} />
            </View>
          ))}
        </Swiper>
      ) : (
        <View>
          <Text>Hooooo</Text>
        </View>
      )}
    <View style={{ padding: 10 }}>
    <Text style={styles.popularItemsName}>{nom}</Text>
    <Text style={styles.price}>{prix} DH </Text>
    </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    popularItemsImage: {
        resizeMode: "contain",
        width: 380,
        height: 230,
        borderRadius: 10,
        marginBottom: 10,
      },
    popularItemsName: {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        marginBottom: 5,
      },
      price: {
        fontSize: 15,
        color: "rgba(250, 74, 12, 1)",
        marginBottom: 5,
      },
  container: {
    flex: 1,
  },
  wrapper: {
   
        
    
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Slider;
