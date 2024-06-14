import { Link } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Image
            source={require("../assets/images/TopC.png")}
            style={styles.image}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View style={styles.formContainer}>
              <View style={{ gap: 10 }}>
                <TextInput style={styles.textInput} placeholder="Name" />

                <TextInput style={styles.textInput} placeholder="Email" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry
                />
              </View>
              <TouchableOpacity style={styles.button}>
                <View>
                  <Text style={{ color: "white" }}>Sign up</Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    width: "45%",
                    height: 1,
                    backgroundColor: "#575DFB",
                  }}
                />
                <Text>or</Text>
                <View
                  style={{
                    width: "45%",
                    height: 1,
                    backgroundColor: "#575DFB",
                  }}
                />
              </View>
              {/* Google and apple Login */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderColor: "black",
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 20,
                    width: "48%",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/google.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: "black",
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 20,
                    width: "48%",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/apple.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  color: "#575DFB",
                  fontSize: 16,
                }}
              >
                Already have an account?{" "}
                <Link
                  href={"/login"}
                  style={{ color: "#575DFB", fontWeight: "bold" }}
                >
                  Sign in
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginHorizontal: "auto",
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    height: 40,
    borderColor: "#EFEFE2",
    borderWidth: 1,
    backgroundColor: "#EFEFEF",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#575DFB",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default register;
