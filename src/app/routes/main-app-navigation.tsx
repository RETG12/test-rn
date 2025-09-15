import { createStaticNavigation } from '@react-navigation/native';
import { useUserToken } from '@/entities/user-token';
import { useEffect, useState } from 'react';
import { LoadingPage } from '@/shared/ui/loading-page';
import { AuthStackPages } from './auth-stack-pages';
import { MainStackPages } from './main-stack-pages';

const AuthNavigation = createStaticNavigation(AuthStackPages);
const MainNavigation = createStaticNavigation(MainStackPages);

export const MainAppNavigation = () => {
    const { isAuth, loadToken, clearToken } = useUserToken();
    const [isReady, setIsReady] = useState(true);

    useEffect(() => {
        loadToken().finally(() => setIsReady(false));
    }, [loadToken, clearToken]);

    if (isReady) {
        return <LoadingPage />;
    }

    if (!isAuth) {
        return <AuthNavigation />;
    }

    return <MainNavigation />;
};