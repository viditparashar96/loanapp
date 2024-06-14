import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();
const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
const InitialLayout = () => {
  const router = useRouter();
  const segments = useSegments();
  const { isLoaded, isSignedIn } = useAuth();
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded) return;
    const inTabsGroup = segments[0] === "(tabs)";
    if (isSignedIn && !inTabsGroup) {
      router.replace("/(tabs)");
    } else if (!isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn]);

  if (!loaded || !isLoaded) {
    return <View />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="otp"
        options={{
          headerTitle: "Enter Your Phone Number",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="verify/[phone]"
        options={{
          headerTitle: "Verify Your Phone Number",
          headerBackTitle: "Edit Phone Number",
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ClerkProvider publishableKey={CLERK_KEY!} tokenCache={tokenCache}>
        <BottomSheetModalProvider>
          <InitialLayout />
        </BottomSheetModalProvider>
      </ClerkProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayoutNav;
