import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width, height } = Dimensions.get("window");
const Completed = ({ handleDismiss }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Success.png")} />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "800",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Congratulations!
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Kindly allow 5-10 mins to reflect in
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
          }}
        >
          your bank account
        </Text>
      </View>

      <View style={styles.detailsBox}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "gray",
            }}
          >
            Next Repayment Date
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            08/08/2024
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "gray",
            }}
          >
            Interest Rate:
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            8%
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "gray",
            }}
          >
            Monthly Repayment:
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            $833.00
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "gray",
            }}
          >
            No of Payments:
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            12
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "gray",
            }}
          >
            Reason:
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Travel
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "gray",
            }}
          >
            Total Payback Amount
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            $10,000.00
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#575DFB",
          padding: 15,
          borderRadius: 50,
          marginTop: "auto",
          width: 300,
        }}
        onPress={handleDismiss}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Go Back to Dashboard
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  detailsBox: {
    backgroundColor: "#F5F5FF",
    padding: 20,
    borderRadius: 5,
    width: width / 1.3,
    height: height / 4,
    marginTop: 10,
    gap: 10,
  },
});

export default Completed;
