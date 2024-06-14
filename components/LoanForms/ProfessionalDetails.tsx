import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfessionalDetails = ({ handlePrev, handleNext }: any) => {
  const [employmentType, setEmploymentType] = useState<string>("");
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
          Professtional Details
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          Select Employment Type
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 14,
            flexBasis: "50%",
          }}
        >
          <TouchableOpacity
            onPress={() => setEmploymentType("Salaried")}
            style={{
              padding: 10,
              paddingHorizontal: 30,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#00B973",
              backgroundColor:
                employmentType === "Salaried" ? "#00B973" : "#fff",
            }}
          >
            <Text
              style={{ color: employmentType === "Salaried" ? "#fff" : "#000" }}
            >
              Salaried
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmploymentType("Self Employed")}
            style={{
              padding: 10,
              borderRadius: 20,
              paddingHorizontal: 30,
              borderWidth: 1,
              borderColor: "#00B973",
              backgroundColor:
                employmentType === "Self Employed" ? "#00B973" : "#fff",
            }}
          >
            <Text
              style={{
                color: employmentType === "Self Employed" ? "#fff" : "#000",
              }}
            >
              Self Employed
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.tag}>Monthly Salary</Text>
          <TextInput placeholder="First Name" style={{ padding: 10 }} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>Total Monthly EMI</Text>
          <TextInput
            placeholder="Last Name"
            style={{ padding: 10 }}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>Company Name</Text>
          <TextInput placeholder="First Name" style={{ padding: 10 }} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>Office Phone No.</Text>
          <TextInput
            placeholder="First Name"
            style={{ padding: 10 }}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tag}>Official Email ID</Text>
          <TextInput
            placeholder="First Name"
            style={{ padding: 10 }}
            keyboardType="numeric"
          />
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

export default ProfessionalDetails;
