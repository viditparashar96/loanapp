import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width, height } = Dimensions.get("window");
const data: any = [
  {
    id: 1,
    title: "Loan 1",
    amount: 1000,
    interestRate: 8,
    tenure: 1,
    duration: "1 year",
  },
  {
    id: 2,
    title: "Loan 2",
    amount: 2000,
    interestRate: 10,
    tenure: 2,
    duration: "2 year",
  },
  {
    id: 3,
    title: "Loan 3",
    amount: 3000,
    interestRate: 12,
    tenure: 3,
    duration: "3 year",
  },
];
const paymentSchedule = [
  {
    id: 1,
    amount: 100,
    date: "2021-01-01",
    status: "Paid",
  },
  {
    id: 2,
    amount: 200,
    date: "2021-02-01",
    status: "Pending",
  },
  {
    id: 3,
    amount: 300,
    status: "Pending",
    date: "2021-03-01",
  },
  {
    id: 4,
    amount: 400,
    status: "Pending",
    date: "2021-04-01",
  },
];
const Loans = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={[styles.card]}>
              <Text
                style={{
                  fontSize: 20,

                  color: "#fff",
                }}
              >
                Loan amount
              </Text>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: 10,
                }}
              >
                ${item.amount}
              </Text>
              <View
                style={{
                  height: 2,
                  width: "100%",
                  marginTop: 10,
                  backgroundColor: "#fff",
                }}
              />
              {/* Card Foter */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "auto",
                  marginBottom: 20,
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#fff",

                      textAlign: "center",
                    }}
                  >
                    Loan Duration
                  </Text>
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    {item.duration}
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Next Payment
                  </Text>
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    {item.duration}
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Interest Rate
                  </Text>
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    {item.interestRate}%
                  </Text>
                </View>
              </View>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={{ columnGap: 10 }}
          bounces={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      ></View>

      <View style={styles.paymentHistory}>
        <FlatList
          data={paymentSchedule}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.paymenyHistoryItem}>
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginBottom: 5,
                  }}
                >
                  ${item.amount}
                </Text>
                <Text>{item.date}</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#DDDDDD",
                  padding: 5,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>{item.status}</Text>
              </View>
            </View>
          )}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "auto",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 5,
            }}
          >
            Next Payment due on 2021-05-01
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#575DFB",
              padding: 17,
              borderRadius: 5,
              marginTop: 10,
              width: "100%",
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: "red",
  },
  card: {
    width: width,
    height: height / 4,
    backgroundColor: "#575DFB",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paymentHistory: {
    flex: 1,
    padding: 10,
  },
  paymenyHistoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Loans;
