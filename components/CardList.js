import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import fitness from "../data/fitness";
import CardItem from "./CardItem";

const deviceWidth = Dimensions.get("window").width;

const CardList = () => {
  const FitnessData = fitness;

  return (
    <View style={styles.mainContainer}>
      {
        <FlatList
          scrollEnabled={false}
          data={FitnessData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <CardItem item={item} />;
          }}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: deviceWidth < 390 ? 40 : 50,
    marginHorizontal: deviceWidth < 390 ? 20 : 30,
    marginBottom: deviceWidth < 390 ? 20 : 30,
  },
});

export default CardList;
