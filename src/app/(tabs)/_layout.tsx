import { Home03Icon, User03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon icon={Home03Icon} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon icon={User03Icon} color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
