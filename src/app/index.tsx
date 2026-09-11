import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from "react-native";


export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className= "flex-1 items-center justify-center bg-red-500">
      <Text className = "text-2xl font-bold text-black">checking  native wind is working or not </Text>
      <TouchableOpacity onPress = {() => router.push('/login')} className = "bg-green-500 p-4 rounded-md mt-4">
        <Text>Go to login screen</Text>
      </TouchableOpacity>
    </View>

  );
}
