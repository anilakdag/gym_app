import { Text, View, StyleSheet, ScrollView } from "react-native";
import CardList from "../components/CardList";
import Slider from "../components/Slider";
import { ImageSlider } from "../data/sliderData";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Text style={[styles.cardText, { color: "white" }]}>
            GYM PROGRAMS
          </Text>
        </View>
        <View style={styles.cardsContainer}></View>
      </View>
      <Slider itemList={ImageSlider} />
      <CardList />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#000000d7",
    paddingTop: 40,
    paddingHorizontal: 20,
    height: 100,
    width: "100%",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
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
});
