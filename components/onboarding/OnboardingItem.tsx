import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const OnboardingItem = ({ item }: any) => {
  const { width }: any = useWindowDimensions();

  return (
    <View style={[styles.constainer, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    paddingVertical: 8,
    // marginTop: 10,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});

export default OnboardingItem;
