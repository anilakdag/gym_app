import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

export default function CardItem({ item }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Workout", {
          image: item.image,
          exercises: item.exercises,
          description: item.description,
          description2: item.description2,
          level: item.level,
          duration: item.duration,
          id: item.id,
        })
      }
      style={styles.pressableCard}
    >
      <View style={styles.topOfCard}>
        <Text style={styles.topOfCardText}>
          <Ionicons name="time" size={15}></Ionicons>
          {item.duration} min
        </Text>
        <View style={styles.starIcons}>
          <StarRatingDisplay
            rating={
              item.level === "beginner"
                ? 1
                : item.level === "intermediate"
                ? 2
                : 3
            }
            starSize={15}
            maxStars={3}
            color="red"
          />
        </View>
      </View>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableCard: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  topOfCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 5,
  },
  topOfCardText: {
    fontWeight: "bold",
  },
  starIcons: {
    marginHorizontal: 3,
    marginTop: 3,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 12,
  },
  text: {
    position: "absolute",
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    top: 40,
  },
});
