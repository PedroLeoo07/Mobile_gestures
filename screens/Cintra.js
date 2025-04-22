import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cintra() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Leonardo")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/736x/48/9c/46/489c462dea830250c2e6a27a29d3a8ac.jpg",
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
    backgroundColor: "lightblue",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});