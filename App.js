import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, StyleSheet, Platform, View } from "react-native";
import FitnessContextProvider from "./store/fitness-context";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import { StatusBar } from "expo-status-bar";
import MyWorkoutsScreen from "./screens/MyWorkouts";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function WelcomeScreenNavigator() {
    return (
      <BottomTabs.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "#000000d7",
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#000000d7",
          tabBarItemStyle: { padding: 5 },
          tabBarIconStyle: { marginBottom: 5 },
          tabBarLabelStyle: { fontWeight: "bold" },
        }}
      >
        <BottomTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "HOME",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={Platform.OS === "android" ? 15 : size}></Ionicons>
            ),
          }}
        />
        <BottomTabs.Screen
          name="MyWorkouts"
          component={MyWorkoutsScreen}
          options={{
            headerShown: false,
            tabBarLabel: "MY WORKOUTS",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="sports-gymnastics" color={color} size={Platform.OS === "android" ? 15 : size}></MaterialIcons>
            ),
          }}
        />
      </BottomTabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreenNavigator} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FitnessContextProvider>
        <StatusBar style="light" />
        <StackNavigator />
      </FitnessContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000d7",
  },
});
