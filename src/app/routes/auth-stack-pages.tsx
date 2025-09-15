import { AuthPage } from '@/pages/auth-page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const AuthStackPages = createNativeStackNavigator({
    screens: {
        AuthPage: {
            screen: AuthPage,
            options: {
                headerShown: false,
            },
        },
    },
});
