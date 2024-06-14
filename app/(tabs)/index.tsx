import BottomsheetForm from "@/components/Home/BottomsheetForm";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import * as Contacts from "expo-contacts";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const reasons = [
  "Business Expansion",
  "Working Capital",
  "Asset Financing",
  "Invoice Financing",
  "Other",
];

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState<string | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = () => bottomSheetModalRef.current?.present();

  const [selectedReason, setSelectedReason] = useState<string>("");
  const handleReasonSelection = (reason: string) => {
    if (selectedReason === reason) {
      setSelectedReason("");
      return;
    }
    setSelectedReason(reason);
  };
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          The Reason for Getting Financed
        </Text>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          {reasons.map((reason, index) => (
            <TouchableOpacity
              key={index}
              style={{
                ...styles.reasonCard,
                backgroundColor: selectedReason === reason ? "#00B973" : "#fff",
              }}
              onPress={() => handleReasonSelection(reason)}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="file-download"
                  size={24}
                  color={selectedReason === reason ? "#fff" : "#000"}
                />
                <Text
                  style={{
                    color: selectedReason === reason ? "#fff" : "#000",
                    fontSize: 15,
                  }}
                >
                  {reason}
                </Text>
              </View>

              {selectedReason === reason && (
                <AntDesign name="check" size={20} color="#fff" />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={handlePresentModalPress}
          disabled={!selectedReason}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: selectedReason ? "#575DFB" : "#BCBEFD",

            padding: 15,
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Apply for a loan
          </Text>
        </TouchableOpacity>
        <BottomsheetForm ref={bottomSheetModalRef} />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  upperContainer: {
    overflow: "hidden",
    flex: 0.4,
    backgroundColor: "#575DFB",
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    paddingVertical: 20,
  },
  header: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  homeContainer: {
    flex: 1,
    padding: 20,
  },
  reasonCard: {
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "#fff",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginVertical: 10,
    width: "100%",
    height: 70,
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: "red",
    padding: 16,
    position: "absolute",
  },
});
