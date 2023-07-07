import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
    return (
        <View className="h-full bg-[#fdf7fd]">
            <StatusBar style="light" />
            <Text>Login Page</Text>
        </View>
    );
};

export default Login;
