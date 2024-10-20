import { View, FlatList, Animated, StyleSheet } from "react-native";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import SliderItem from "./SliderItem";
import { useRef } from "react";

export default function Slider({ itemList }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <FlatList
        decelerationRate={"normal"}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.title}
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
      />
      <View style={styles.dotContainer}>
        <ExpandingDot
          data={itemList}
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          inActiveDotColor="#000000d7"
          activeDotColor="#000000d7"
          expandingDotWidth={30}
          dotStyle={{
            width: 10,
            height: 10,
            backgroundColor: "#000000d7",
            borderRadius: 5,
            marginHorizontal: 5,
          }}
          containerStyle={{
            top: 10,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
