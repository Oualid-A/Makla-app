import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

export default function Coco() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      // Get current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View>
      <Text>Latitude: {location ? location.coords.latitude : 'Loading...'}</Text>
      <Text>Longitude: {location ? location.coords.longitude : 'Loading...'}</Text>
    </View>
  );
}
