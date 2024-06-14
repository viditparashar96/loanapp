import Colors from "@/constants/Colors";
import {
  isClerkAPIResponseError,
  useSignIn,
  useSignUp,
} from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaskInput from "react-native-mask-input";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IND_PHONE = [
  `+`,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;
  const { bottom } = useSafeAreaInsets();
  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const openLink = () => {
    Linking.openURL("https://www.youtube.com/watch?v=VUhaDTKYBJU&t=13631s");
  };

  const sendOtp = async () => {
    try {
      setLoading(true);
      await signUp!.create({
        phoneNumber,
      });
      signUp!.preparePhoneNumberVerification();
      setLoading(false);
      router.push(`/verify/${phoneNumber}`);
    } catch (error) {
      console.log("error==", error);
      if (isClerkAPIResponseError(error)) {
        if (error.errors[0].code === "form_identifier_exists") {
          console.log("already_exists");
          await trySignIn();
        } else {
          setLoading(false);
          alert(error.errors[0].message);
        }
      }
    }
  };
  const trySignIn = async () => {
    console.log("trySignIn", phoneNumber);

    const { supportedFirstFactors } = await signIn!.create({
      identifier: phoneNumber,
    });

    const firstPhoneFactor: any = supportedFirstFactors.find((factor: any) => {
      return factor.strategy === "phone_code";
    });

    const { phoneNumberId } = firstPhoneFactor;

    await signIn!.prepareFirstFactor({
      strategy: "phone_code",
      phoneNumberId,
    });

    router.push(`/verify/${phoneNumber}?signin=true`);
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={{ marginTop: 10, fontSize: 18 }}>Sending code...</Text>
          </View>
        )}
        <Text style={styles.description}>
          This App will need to verify your account.
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>India</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
          </View>
          <View style={styles.separator} />
          <MaskInput
            value={phoneNumber}
            keyboardType="numeric"
            placeholder="+91 Your Phone Number"
            style={styles.input}
            onChangeText={(masked, unmasked) => {
              setPhoneNumber(masked); // you can use the unmasked value as well

              // assuming you typed "9" all the way:
              console.log(masked); // (99) 99999-9999
              console.log(unmasked); // 99999999999
            }}
            mask={IND_PHONE}
          />
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          onPress={sendOtp}
          style={[
            styles.button,
            phoneNumber !== "" ? styles.enabled : null,
            { marginBottom: 20 },
          ]}
          disabled={phoneNumber === ""}
        >
          <Text
            style={[
              styles.buttonText,
              phoneNumber !== "" ? styles.enabled : null,
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
    marginTop: 20,
  },
  list: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginBottom: 10,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.lightGray,
  },
  legal: {
    fontSize: 12,
    textAlign: "center",
    color: "#000",
  },
  link: {
    color: Colors.primary,
  },
  listItemText: {
    fontSize: 18,
    color: Colors.primary,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
    color: "#fff",
  },
  buttonText: {
    color: Colors.gray,
    fontSize: 22,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 16,
    padding: 6,
    marginTop: 10,
  },

  loading: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Page;
