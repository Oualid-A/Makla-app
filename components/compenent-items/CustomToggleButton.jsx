import React from "react"
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"

const CustomToggleButton = ({ label, status, onPress, image }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, status === "checked" && styles.checked]}>
        <Image source={image} style={styles.image} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginRight:7
  },
  checked: {
    backgroundColor: "rgba(250, 100, 12, 0.5)",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default CustomToggleButton
