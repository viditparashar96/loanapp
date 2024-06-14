import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const icons = {
    index: (props: any) => (
      <FontAwesome name="home" size={24} color="black" {...props} />
    ),
    loans: (props: any) => (
      <FontAwesome name="bank" size={24} color="black" {...props} />
    ),
    profile: (props: any) => (
      <FontAwesome name="user" size={24} color="black" {...props} />
    ),
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {icons[route.name as keyof typeof icons]({
              color: isFocused ? "white" : "#888CFC",
            })}
            <Text
              style={{ color: isFocused ? "white" : "#888CFC", fontSize: 11 }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  tabbar: {
    // position: "absolute",
    bottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#575DFB",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 40,
    borderCurve: "continuous",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});

export default TabBar;
