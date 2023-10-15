import { StyleSheet, Text, ScrollView } from "react-native";
import * as React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, IconButton } from "react-native-paper";

export default function Snack() {
  const navigation = useNavigation();

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
      <ScrollView
      contentContainerStyle={{paddingBottom: 0,}}
    >
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
