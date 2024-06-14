import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      if (email === "" || password === "") {
        ToastAndroid.show("Please fill all fields", ToastAndroid.SHORT);
        return;
      }
      if (email !== "test@gamil.com" && password !== "123456") {
        ToastAndroid.show("Invalid email or password", ToastAndroid.SHORT);
        return;
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push("(tabs)");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#575DFB" />
        </View>
      )}
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
                <TextInput
                  style={styles.textInput}
                  placeholder="type test@gmail.com"
                  onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="type 123456"
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <View>
                  <Text style={{ color: "white" }}>Sign in</Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{ textAlign: "center", marginTop: 10, color: "#575DFB" }}
              >
                Forget your password?{" "}
              </Text>
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
                Don't have an account?{" "}
                <Link
                  href={"register"}
                  style={{ color: "#575DFB", fontWeight: "bold" }}
                >
                  Sign up
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
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 9999,
  },
});

export default login;
