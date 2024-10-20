import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  Pressable,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const WorkoutScreen = ({ route }) => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.imageContainer} source={route.params?.image} />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="arrow-back-outline"
          size={24}
          color="black"
        />
        <View style={styles.durationAndLevel}>
          <View style={styles.timeCard}>
            <Text style={styles.timeCardText}>
              {route.params.duration} min.
            </Text>
          </View>
          <View style={styles.timeCard}>
            <Text style={styles.timeCardText}>
              {route.params.level.toUpperCase()}
            </Text>
          </View>
          {route.params.level === "beginner" && (
            <View style={[styles.timeCard, { flexDirection: "row" }]}>
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={30}
                color="red"
                style={styles.icon}
              />
            </View>
          )}
          {route.params.level === "intermediate" && (
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.timeCard, { flexDirection: "row" }]}>
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={30}
                  color="red"
                  style={styles.icon}
                />
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={30}
                  color="red"
                  style={styles.icon}
                />
              </View>
            </View>
          )}
          {route.params.level === "elite" && (
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.timeCard, { flexDirection: "row" }]}>
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={30}
                  color="red"
                  style={styles.icon}
                />
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={30}
                  color="red"
                  style={styles.icon}
                />
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={30}
                  color="red"
                  style={styles.icon}
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{ textAlign: "center", letterSpacing: 1.5 }}>
            {route.params.description}
          </Text>
        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          data={route.params.exercises}
          renderItem={({ item }) => {
            return (
              <View style={styles.exercisesContainer}>
                <View style={styles.exerciseContainer}>
                  <Image
                    style={{ width: 90, height: 90 }}
                    source={{ uri: item.image }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                    <Text style={{ marginTop: 4, fontSize: 16, color: "gray" }}>
                      {item.sets} Sets
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tips</Text>
        </View>
        <View style={[styles.descriptionContainer, { marginBottom: 20 }]}>
          <Text style={{ textAlign: "center", letterSpacing: 1.5 }}>
            {route.params.description2}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  backIcon: {
    position: "absolute",
    top: 30,
    left: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 3,
  },
  durationAndLevel: {
    flexDirection: "row",
    justifyContent: "center",
  },
  timeCard: {
    justifyContent: "center",
    height: 70,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#00000020",
  },
  timeCardText: {
    fontWeight: "bold",
  },
  icon: {
    top: 10,
  },
  descriptionContainer: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#00000020",
  },
  exercisesContainer: {
    marginVertical: 20,
    marginHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  exerciseContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default WorkoutScreen;
