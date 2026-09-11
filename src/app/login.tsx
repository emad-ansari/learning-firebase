import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
    const router = useRouter();

    return (
        <View className = "flex-1 items-center justify-center">
            <Text>this  is login screen</Text>
            <TouchableOpacity onPress = {() => router.push('/')} className = "bg-blue-500 p-4 rounded-md mt-4">
                <Text>Go to Home screen</Text>
            </TouchableOpacity>
        </View>
    )

}