import { subscribeToAuthChanges } from "@/services/firebase/authListener";
import { useAuth } from "@/store/authStore";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
  const router = useRouter();

  const { loading, user } = useAuth();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges();

    return unsubscribe;
  }, []);

  if (loading) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard = {!!user}>
              <Stack.Screen name="(tabs)" />
            </Stack.Protected>

            <Stack.Protected guard = {!user}>
              <Stack.Screen name="(auth)" />
            </Stack.Protected>
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
