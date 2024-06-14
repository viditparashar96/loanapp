import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HeaderCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View
          style={{
            width: 100,
            aspectRatio: 1,
            borderRadius: 50,
            backgroundColor: "#484FF6",
            position: "absolute",
            bottom: -60,
            left: "-10%",
          }}
        ></View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#000",
            marginBottom: 10,
          }}
        >
          Loan Amount Limit
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 14 }}>$ 10,000.00</Text>
          <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>
            $50,0000.00
          </Text>
        </View>

        <View style={styles.footer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={{ color: "#000", fontSize: 14 }}>Quick Add:</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#F5F5F5",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#00B973", fontSize: 12 }}>+ $1000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F5F5F5",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#00B973", fontSize: 12 }}>+ $1000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    overflow: "hidden",
    width: "100%",
    height: "95%",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: "auto",
  },
});

export default HeaderCard;
