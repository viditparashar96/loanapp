import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderCard from "./HeaderCard";

const Header = () => {
  return (
    <View style={styles.upperContainer}>
      <View
        style={{
          width: 100,
          aspectRatio: 1,
          borderRadius: 50,
          backgroundColor: "#484FF6",
          position: "absolute",
          top: -40,
          right: "20%",
        }}
      ></View>
      <View
        style={{
          width: 100,
          aspectRatio: 1,
          borderRadius: 50,
          backgroundColor: "#484FF6",
          position: "absolute",
          bottom: "40%",
          left: "-10%",
          right: "auto",
        }}
      ></View>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.nameText}>John Doe</Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="notification" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <HeaderCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    overflow: "hidden",
    backgroundColor: "#575DFB",
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    paddingVertical: 20,
    height: 300,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeText: {
    color: "white",
    fontSize: 15,
  },
  nameText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Header;
