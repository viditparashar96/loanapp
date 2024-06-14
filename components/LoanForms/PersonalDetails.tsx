import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PersonalDetails = ({ handlePrev, handleNext }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrev} style={{ marginTop: 4 }}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
      >
        <Text
          style={{
            fontSize: 21,
            fontWeight: "800",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Personal Details
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.tag}>First Name</Text>
          <TextInput placeholder="First Name" style={{ padding: 10 }} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>Last Name</Text>
          <TextInput placeholder="Last Name" style={{ padding: 10 }} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>PAN</Text>
          <TextInput placeholder="First Name" style={{ padding: 10 }} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>Phone Number</Text>
          <TextInput
            placeholder="First Name"
            style={{ padding: 10 }}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>Pin Code</Text>
          <TextInput
            placeholder="First Name"
            style={{ padding: 10 }}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>City</Text>
          <TextInput placeholder="First Name" style={{ padding: 10 }} />
        </View>
      </ScrollView>
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
  formContainer: {
    flex: 1,
    padding: 10,
    // gap: 20,
  },
  inputContainer: {
    backgroundColor: "#FAFCFF",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    position: "relative",
    borderWidth: 1,
    borderColor: "#F2F2FF",
  },
  tag: {
    backgroundColor: "#F2F2FF",
    padding: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 10,
    fontSize: 12,
    position: "absolute",
    top: "-40%",
    left: "10%",
  },
});

export default PersonalDetails;
