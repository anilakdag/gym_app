import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const deviceWidth = Dimensions.get("window").width;

export default function SliderItem({ item, index }) {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={item.image}
        style={{ width: deviceWidth < 390 ? 300 : 350, height: deviceWidth < 390 ? 400 : 450, borderRadius: 20 }}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      >
        <View style={{ gap: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: deviceWidth,
    marginVertical: 10,
  },
  background: {
    position: "absolute",
    height: deviceWidth < 390 ? 400 : 450,
    width: deviceWidth < 390 ? 300 : 350,
    padding: 20,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1.5,
  },
  description: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1.2,
  },
});
