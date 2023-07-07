import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

const SignUp = () => {
    return (
        <SafeAreaView className="bg-[#fdf7fd] h-full">
            <StatusBar style="auto" />
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <Text className="text-3xl text-center text-[#4b164c] font-bold">Create an Account</Text>
        </SafeAreaView>
    );
};

export default SignUp;
