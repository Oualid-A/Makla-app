import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,ImageBackground, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Photo = props => {
  const [profileImage, setProfileImage] = useState('');
  const [lilli, setLilli] = useState(null);


  const openImageLibrary = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
  
      if (status === 'granted') {
        const response = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
        });
       
        console.log('ImagePicker response:', response.assets[0].uri);
  
        if (!response.cancelled && response.assets[0].uri) {
          setProfileImage(response.assets[0].uri);
          setLilli(response.assets[0].uri); // Set the selected image to lilli state

          console.log('Selected image:', response.uri);
        } else {
          console.log('Image selection cancelled or no URI provided.');
        }
      }
    } catch (error) {
      console.error('Error while picking an image:', error);
    }
  };
  

  const uploadProfileImage = async () => {

    const token = await AsyncStorage.getItem('token');
    const id = await AsyncStorage.getItem('PlatId');
    console.log("id est ,",id);
    console.log("token est : ,",token);
    try {
        const respons = await fetch(profileImage);
        console.log("respo",respons);
        const imageBlob = await respons.blob();
        console.log("blob",imageBlob);

    // const blob = profileImage.blob();
    const koko = profileImage.toString();
    const formData = new FormData();
    formData.append('image', koko);
    console.log('Uploading profile image...', profileImage);
        const response = await axios.post(`http://192.168.1.11:8081/image/enregistrer/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });
    
        console.log('Réponse du serveur:', response.data);
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'image:', error);
      }
  };
  

  return (
    <ImageBackground
    source={lilli ? { uri: lilli } : require("../../../assets/pizza.jpg")}
    style={styles.background}
  >
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={openImageLibrary}
          style={styles.uploadBtnContainer}
        >
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Text style={styles.uploadBtn}>Upload Profile Image</Text>
          )}
        </TouchableOpacity>
        
        {profileImage ? (
          <Text
            onPress={uploadProfileImage}
            style={[
              styles.skip,
              { backgroundColor: 'green', color: 'white', borderRadius: 8 },
            ]}
          >
            Upload
          </Text>
        ) : null}
      </View>
    </View>
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
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  skip: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
});

export default Photo;