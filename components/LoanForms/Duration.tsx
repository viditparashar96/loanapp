import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Duration = ({ handleNext }: any) => {
  const [yearTenure, setYearTenure] = useState<number>(1);
  const [interestRate, setInterestRate] = useState<number>(8);
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      <Text style={styles.containerHeadline}>Duration / Terms of the loan</Text>

      {/* Year Tenure */}
      <View>
        <Text style={{ fontSize: 20, fontWeight: "600", textAlign: "center" }}>
          {yearTenure} Years
        </Text>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#575DFB"
          maximumTrackTintColor="#000000"
          thumbTintColor="#575DFB"
          step={1}
          value={yearTenure}
          onValueChange={(value) => setYearTenure(value)}
        />
      </View>
      {/* Interest Rate */}

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: "600", textAlign: "center" }}>
          Interest Rate (% per annum){" "}
        </Text>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={20}
          minimumTrackTintColor="#575DFB"
          maximumTrackTintColor="#000000"
          thumbTintColor="#575DFB"
          step={1}
          value={interestRate}
          onValueChange={(value) => setInterestRate(value)}
        />
        <Text style={{ fontSize: 14, fontWeight: "600", textAlign: "center" }}>
          {interestRate} %
        </Text>
      </View>

      {/* Overview */}
      <View style={styles.overviewContainer}>
        {/* Monthly payment */}
        <View>
          <Text
            style={{ fontSize: 12, fontWeight: "400", textAlign: "center" }}
          >
            Monthly
          </Text>
          <Text
            style={{ fontSize: 12, fontWeight: "400", textAlign: "center" }}
          >
            Payment
          </Text>
          <Text style={{ fontSize: 16, textAlign: "center", color: "gray" }}>
            NIL
          </Text>
        </View>
        <View>
          <Text
            style={{ fontSize: 12, fontWeight: "400", textAlign: "center" }}
          >
            No of
          </Text>
          <Text
            style={{ fontSize: 12, fontWeight: "400", textAlign: "center" }}
          >
            Payments
          </Text>
          <Text style={{ fontSize: 16, textAlign: "center", color: "gray" }}>
            NIL
          </Text>
        </View>
        <View>
          <Text
            style={{ fontSize: 12, fontWeight: "400", textAlign: "center" }}
          >
            Total
          </Text>
          <Text
            style={{ fontSize: 12, fontWeight: "400", textAlign: "center" }}
          >
            Payback
          </Text>
          <Text style={{ fontSize: 16, textAlign: "center", color: "gray" }}>
            NIL
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#575DFB",
            padding: 15,
            borderRadius: 50,
            marginTop: 10,
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
        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 50,
            marginTop: 10,
            width: 300,
            borderWidth: 1,
            borderColor: "#575DFB",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Decline
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "yellow",
    paddingHorizontal: 20,
  },
  containerHeadline: {
    fontSize: 16,
    fontWeight: "600",
    padding: 20,
  },
  overviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 20,
    height: 100,
    // backgroundColor: "red",
    backgroundColor: "#fff",
    paddingHorizontal: 30,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Duration;
