import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddCardShowcase = ({ handlePrev, handleNext }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrev} style={{ marginTop: 4 }}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 21,
          fontWeight: "800",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Let's Add Your Card
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "gray",
          marginBottom: 10,
        }}
      >
        Add your card details to proceed
      </Text>
      <View
        style={{
          flex: 1,
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/images/creditcards.png")} />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#575DFB",
          padding: 15,
          borderRadius: 50,
          marginTop: "auto",
          marginHorizontal: "auto",
          width: 300,
        }}
        onPress={handleNext}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default AddCardShowcase;
