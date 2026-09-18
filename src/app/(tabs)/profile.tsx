import { useAuth } from "@/store/authStore";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { logout } = useAuth();
  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <View className="items-center justify-center mt-20">
        <Text className="text-2xl font-bold text-blue-500 mb-1">Taskly</Text>
        <Text className="text-gray-500">Welcome to your profile</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-red-500/10 rounded-2xl  w-full h-14  items-center justify-center"
          onPress={logout}
        >
          <Text className="text-red-500 ">Logout </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
