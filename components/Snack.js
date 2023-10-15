import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import * as React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, IconButton } from "react-native-paper";

export default function Snack() {
  const navigation = useNavigation();
  const ShowMenu = () => {
    navigation.navigate("Menu");
  };

  const _goBack = () => navigation.navigate("Login");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Resturants" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{ paddingBottom: 0, marginTop: 4 }}>
        <TouchableOpacity onPress={ShowMenu}>
          <Card style={styles.card}>
            <Card.Title
              title="KFC"
              subtitle="Kintaki Checken"
              left={(props) => <Avatar.Icon {...props} icon="food" />}
              right={(props) => <IconButton {...props} icon="dots-vertical" />}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowMenu}>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 2,
    borderRadius: 20,
  },
});
