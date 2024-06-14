import { Tabs, router } from "expo-router";
import React from "react";

import Header from "@/components/Home/Header";
import TabBar from "@/components/bottomTab/TabBar";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),

          header: () => <Header />,
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: "Loans",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "",
          headerLeft(props) {
            return (
              <Ionicons
                onPress={() => router.back()}
                name="arrow-back"
                size={28}
                color="black"
                style={{ marginLeft: 10 }}
                {...props}
              />
            );
          },
          headerRight(props) {
            return (
              <Ionicons
                name="notifications-outline"
                size={28}
                color="black"
                style={{ marginRight: 10 }}
                {...props}
              />
            );
          },
          headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
