import { subscribeToAuthChanges } from "@/services/firebase/authListener";
import { useAuth } from "@/store/authStore";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
  const { loading, user } = useAuth();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges();

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#2b7fff" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={!!user}>
              <Stack.Screen name="(tabs)" />
            </Stack.Protected>

            <Stack.Protected guard={!user}>
              <Stack.Screen name="(auth)" />
            </Stack.Protected>
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
