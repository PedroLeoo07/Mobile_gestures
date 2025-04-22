import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Oliveira() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Sofia")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2Fmessi-careca--691865561521418523%2F&psig=AOvVaw3lFY5SN9RK-h7RRF1F4DQ0&ust=1745433968003000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjCw9mm7IwDFQAAAAAdAAAAABAE",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});