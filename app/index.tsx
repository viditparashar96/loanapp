import Onboarding from "@/components/onboarding/Onboarding";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default index;
