import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Footer from "./Footer";

const PhotoUploadForm = ({ onSubmit }) => {
  const [photos, setPhotos] = useState([null, null, null]);

  const handleImagePick = async (index) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = result.uri;
      setPhotos(updatedPhotos);
    }
  };

  const handleSubmit = () => {
    // You can perform any additional validation or processing here before submitting
    onSubmit(photos);
  };

  return (
    <ImageBackground
      source={require("../../../assets/pizza.jpg")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <View style={styles.row}>
            {photos.map((photo, index) => (
              <TouchableOpacity
                key={index}
                style={styles.photoContainer}
                onPress={() => handleImagePick(index)}
              >
                {photo ? (
                  <Image source={{ uri: photo }} style={styles.photo} />
                ) : (
                  <Text style={styles.addPhotoText}>Add Photo</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    justifyContent: "center",
    padding: 16,
  },
  content: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  photoContainer: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  addPhotoText: {
    color: "#007BFF",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#28A745",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default PhotoUploadForm;
