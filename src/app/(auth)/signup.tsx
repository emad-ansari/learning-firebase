import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log("username", username);
  

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="items-center justify-center mt-20">
        <Text className="text-2xl font-bold text-blue-500 mb-1">Taskly</Text>
        <Text className="text-gray-500">Create your account</Text>
      </View>

      {/* form */}
      <View className="flex-1 p-6">
        <View className="mb-4">
          <Text className="text-gray-500 mb-2 ">Username</Text>
          <TextInput
            placeholder="John Doe"
            className="border border-gray-300 p-4 rounded-2xl "
            placeholderTextColor="#9ca3af"
            value = {username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View className="mb-4">
          <Text className="text-gray-500 mb-2 ">Email</Text>
          <TextInput
            placeholder="jhon@example.com"
            className="border border-gray-300 p-4 rounded-2xl "
            placeholderTextColor="#9ca3af"
            value = {email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View className="mb-4">
          <Text className="text-gray-500 mb-2">Password</Text>
          <TextInput
            placeholder="●●●●●●●●"
            secureTextEntry
            className="border border-gray-300 p-4 rounded-2xl "
            placeholderTextColor="#9ca3af"
            value = {password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity
          className="bg-blue-500 hover:bg-blue-500 p-4 rounded-2xl items-center justify-center mb-4"
          activeOpacity={0.9}
        >
          <Text className="text-md font-medium text-white">Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1  items-center"
          onPress={() => router.push("/login")}
          activeOpacity={0.9}
        >
          <Text className="text-sm font-normal ">
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
