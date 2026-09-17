import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(auth)" />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
