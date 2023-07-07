import { useRouter } from 'expo-router';
import { View, Image, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Auth = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="h-full">
            <Image source={require('../../assets/screen.png')} className="w-full" />
            <View className="px-8 mt-[-55]">
                <Text className="text-center text-[#22172A] font-bold text-3xl">
                    Make friends with the people like you
                </Text>
                <Text className="text-center text-[#22172A] font-bold text-xl">
                    Interact with people with the same interest like you
                </Text>
            </View>
            <View className="absolute w-full bottom-0 gap-2 px-8">
                <Pressable
                    className="bg-[#4f1d51] py-4 rounded-3xl flex items-center"
                    onPress={() => {
                        router.push('/auth/login');
                    }}
                >
                    <Text className="text-white font-semibold">Login</Text>
                </Pressable>
                <Pressable
                    className="bg-[#f9f1f8] py-4 rounded-3xl flex items-center"
                    onPress={() => {
                        router.push('/auth/signup');
                    }}
                >
                    <Text className="text-[#4f1d51] font-bold">SignUp</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Auth;
