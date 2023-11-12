import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Test() {
    const [storedData, setStoredData] = useState(null);
  const getStoredData = async () => {
    try {
      // Récupérer les données stockées à partir de la clé spécifique
      const storedData = await AsyncStorage.getItem('userData');

      if (storedData !== null) {
        // Les données existent dans le local storage, vous pouvez les utiliser
        console.log('Données stockées :', storedData);
        setStoredData(storedData);
      } else {
        // Aucune donnée trouvée dans le local storage
        console.log('Aucune donnée stockée');
      }
    } catch (error) {
      // Gérer les erreurs lors de la récupération des données
      console.log('Erreur lors de la récupération des données stockées :', error);
    }
  };

  // Appeler la fonction pour récupérer et afficher les données stockées
  useEffect(() => {
    getStoredData();
  }, []);

  return (
    <View>
      <Text> {storedData ? <Text>Données stockées : {storedData}</Text> : <Text>Aucune donnée stockée</Text>}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({});
