import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

import { useAuth } from "@clerk/clerk-expo";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
const Profile = () => {
  const [image, setImage] = useState<any>(null);
  const { signOut } = useAuth();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,

      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleLogout = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        console.log("Token:::", token);
        await SecureStore.deleteItemAsync("token");
        router.push("login");
        ToastAndroid.show("Logged out successfully", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      {/* Image Contaioner */}
      <View style={styles.imageContainer}>
        <View style={styles.imageholder}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            <Image
              source={require("../../assets/images/demmyimage.png")}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          )}

          <TouchableOpacity onPress={pickImage}>
            <Ionicons
              name="camera"
              size={26}
              color="black"
              style={{
                position: "absolute",
                bottom: 5,
                right: 5,
                zIndex: 1,
                color: "white",
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Vidit Parashar
        </Text>
      </View>
      {/* Profile Container */}
      <ScrollView style={styles.profileContainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "black",
          }}
        >
          Profile
        </Text>

        <TouchableOpacity style={styles.profileItem}>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
            }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="person" size={24} color="white" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                User Profile
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 2,
                  color: "gray",
                }}
              >
                Name, Location, Photo
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.profileItem}>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
            }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="at" size={24} color="white" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Connected Accounts
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 2,
                  color: "gray",
                }}
              >
                Financial & social accounts
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.profileItem}>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
            }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="settings" size={24} color="white" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                App Preferences
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 2,
                  color: "gray",
                }}
              >
                Dark mode, Password, Accessibility
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.profileItem}>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
            }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="mail" size={24} color="white" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Socials
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 2,
                  color: "gray",
                }}
              >
                Email & marketing
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          flex: 0.3,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#575DFB",
            padding: 15,
            // borderRadius: 10,
            width: 300,
            alignSelf: "center",
          }}
          onPress={() => signOut()}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  imageholder: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "yellow",
  },
  profileContainer: {
    flex: 0.6,
    // backgroundColor: "green",
    padding: 20,
  },
  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,

    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  iconContainer: {
    flexDirection: "row",
    backgroundColor: "#575DFB",
    padding: 12,
    borderRadius: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "#F5F5F5",
  },
});

export default Profile;
