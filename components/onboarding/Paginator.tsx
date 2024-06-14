import React from "react";
import { Animated, StyleSheet, View, useWindowDimensions } from "react-native";

const Paginator = ({ data, scrollx }: any) => {
  const { width }: any = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_: any, index: any) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollx.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={index ? index : 0}
            style={{
              height: 10,
              width: dotWidth,
              borderRadius: 5,
              backgroundColor: "#493d8a",
              marginHorizontal: 8,
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Paginator;
