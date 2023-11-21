import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as Location from "expo-location"
import MapView, { Marker } from "react-native-maps"
import Footer from "./compenent-items/Footer"
import HeaderHome from "./compenent-items/HeaderHome"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [initialRegion, setInitialRegion] = useState(null)

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        console.log("Permission to access location was denied")
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setCurrentLocation(location.coords)

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      })
    }

    getLocation()
  }, [])

  return (
    <>
        <HeaderHome/>
      <View style={styles.container}>
        {initialRegion && (
          <MapView style={styles.map} initialRegion={initialRegion}>
            {currentLocation && (
              <Marker
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                }}
                title="Votre Localisation"
              />
            )}
          </MapView>
        )}
        {/* Rest of your code */}
      </View>
      <Footer />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
})

export default Map
