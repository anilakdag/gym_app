import { Text, View, StyleSheet, Pressable } from "react-native";

import { useContext } from "react";
import { FitnessItems } from "../store/fitness-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MyWorkoutsScreen = () => {
  const { calories, minutes, workout } = useContext(FitnessItems);
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Text style={[styles.cardText, { color: "white" }]}>MY WORKOUTS</Text>
        </View>
        <View style={styles.cardsContainer}>
          <View style={styles.shadowCards}>
            <Text style={styles.cardText}>{calories.toFixed(2)}</Text>
            <Text>KCAL</Text>
          </View>

          <View style={styles.shadowCards}>
            <Text style={styles.cardText}>{workout}</Text>
            <Text>WORKOUTS</Text>
          </View>

          <View style={styles.shadowCards}>
            <Text style={styles.cardText}>{minutes}</Text>
            <Text>MINUTES</Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>
          <MaterialCommunityIcons name="whistle" size={24} color="white" />{" "}
          START
        </Text>
      </Pressable>
    </>
  );
};

export default MyWorkoutsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#000000d7",
    paddingTop: 40,
    paddingHorizontal: 20,
    height: 250,
    width: "100%",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  shadowCards: {
    backgroundColor: "#ffffff",
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  startButton: {
    backgroundColor: "#000000d7",
    padding: 12,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 50,
  },
  startButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
