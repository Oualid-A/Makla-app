import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,ImageBackground, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Footer from './Footer';
import { useNavigation } from "@react-navigation/native";
import { environment } from '../../../environnement';

const BASE_URL = environment.url_api;


const UpPhoto = props => {
    const navigation = useNavigation(); // Get navigation object

    const [profileImages, setProfileImages] = useState(['', '', '']);
  
    const openImageLibrary = async (index) => {
      try {
        // ... (unchanged code)
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
    
        if (status === 'granted') {
          const response = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
          });
        
    
          console.log(`ImagePicker response for image ${index + 1}:`, response.assets[0].uri);
        
        if (!response.cancelled && response.assets[0].uri) {
          const updatedImages = [...profileImages];
          updatedImages[index] = response.assets[0].uri;
          setProfileImages(updatedImages);
          console.log(`Selected image ${index + 1}:`, response.assets[0].uri);
        } else {
          console.log(`Image ${index + 1} selection cancelled or no URI provided.`);
        }
    }
      } catch (error) {
        console.error('Error while picking an image:', error);
      }
    };
  
    const uploadProfileImages = async () => {
        const token = await AsyncStorage.getItem('token');
        const id = await AsyncStorage.getItem('PlatId');
    
        try {
          const uploadPromises = profileImages.map(async (image, index) => {
            const formData = new FormData();
            const koko = image.toString();
            formData.append(`image`, koko);
    
            const response = await axios.post(
              `${BASE_URL}/image/enregistrer/${id}`,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: `Bearer ${token}`,
                },
              }
            );
    
            console.log(`Réponse du serveur pour image ${index + 1}:`, response.data);
            return response.data;
          });
    
          const allResponses = await Promise.all(uploadPromises);
    
          console.log('All responses:', allResponses);
    
          // Navigate to SuperSlider component after uploading images
          navigation.navigate('RestaurantPage'); // Make sure 'SuperSlider' is the correct screen name in your navigation stack
    
        } catch (error) {
          console.error('Erreur lors de l\'envoi des images:', error);
        }
      };
  
    return (
        <ImageBackground
        source={require("../../../assets/pizza.jpg")}
        style={styles.background}
      >
      
        <View style={styles.container}>
          <View style={styles.imagesContainer}>
            {profileImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openImageLibrary(index)}
                style={styles.uploadBtnContainer}
              >
                {image ? (
                  <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <Text style={styles.uploadBtn}>Ajouter Image</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
      
          {profileImages[0] ? (
            <Text
              onPress={uploadProfileImages}
              style={[
                styles.skip,
                { backgroundColor: 'green', color: 'black', borderRadius: 8 },
              ]}
            >
              Upload
            </Text>
          ) : null}
        </View>
        <Footer />
        </ImageBackground>
      );
      
  };

  const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover", // or "stretch"
        justifyContent: "center",
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagesContainer: {
      flexDirection: 'row', // Display images in a row
      justifyContent: 'space-around', // Adjust this based on your preference
      marginBottom: 20,
      
    },
    uploadBtnContainer: {
      height: 125,
      width: 125,
      borderRadius: 125 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'dashed',
      borderColor:'white',
      borderWidth: 1,
      overflow: 'hidden',
      opacity: 0.95,
    },
    uploadBtn: {
      textAlign: 'center',
      fontSize: 16,
      opacity: 0.9,
      color : 'white',
      fontWeight: 'bold',
      
    },
    skip: {
      textAlign: 'center',
      padding: 10,
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 2,
      opacity: 0.9,
    },
  });
  

export default UpPhoto;

