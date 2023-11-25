import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Image } from 'react-native-elements'
import avatar from "../assets/ilyass.png"
import logo from "../assets/M.png"
import { StatusBar } from 'expo-status-bar'


export default function Test() {
    const [storedData, setStoredData] = useState(null)
  const getStoredData = async () => {
    try {
      // Récupérer les données stockées à partir de la clé spécifique
      const storedData = await AsyncStorage.getItem('userData')

      if (storedData !== null) {
        // Les données existent dans le local storage, vous pouvez les utiliser
        console.log('Données stockées :', storedData)
        setStoredData(storedData)
      } else {
        // Aucune donnée trouvée dans le local storage
        console.log('Aucune donnée stockée')
      }
    } catch (error) {
      // Gérer les erreurs lors de la récupération des données
      console.log('Erreur lors de la récupération des données stockées :', error)
    }
  }

  // Appeler la fonction pour récupérer et afficher les données stockées
  useEffect(() => {
    getStoredData()
  }, [])

  return (
    <View style={{flex:1}}>
      <StatusBar hidden/>
      <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"flex-start",
        
      }}>
        <Image source={avatar}  style={{resizeMode:"contain", width:50, height:50, marginLeft:15, marginTop:10}}/>
        <Text style={{ marginTop:10}}>Hello</Text>
        <Image source={logo} style={{resizeMode:"contain", width:50, height:50,  marginRight:15, marginTop:10}} />
        
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({})
