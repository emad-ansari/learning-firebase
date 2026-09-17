import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center mt-20">
        <Text className="text-2xl font-bold text-blue-500 mb-1">Taskly</Text>
        <Text className="text-gray-500">Welcome to your profile</Text>
      </View>
    </SafeAreaView>
  );
}
