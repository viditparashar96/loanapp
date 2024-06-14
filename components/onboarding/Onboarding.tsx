import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import slides from "../../slides";
import NextButton from "./NextButton";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef: any = useRef(null);
  const scrollx = useRef(new Animated.Value(0)).current;
  const viewbleItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push("otp");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewbleItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollx={scrollx} />
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <NextButton
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / slides.length)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Onboarding;
