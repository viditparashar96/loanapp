import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
const NextButton = ({ percentage, scrollTo }: any) => {
  const size = 80;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progessRef: any = useRef(null);
  const animation = (toValue: number) =>
    Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    animation(percentage);
  }, [percentage]);
  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;
      if (progessRef?.current) {
        console.log(progessRef.current);
        progessRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, [percentage]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <Svg width={size} height={size}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="white"
          stroke="#493d8a"
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="white"
          stroke="#493d8a"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        style={{
          position: "absolute",
          backgroundColor: "#f4338f",
          borderRadius: 100,
          padding: 10,
        }}
      >
        <AntDesign name="arrowright" size={22} color="#493d8a" />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
