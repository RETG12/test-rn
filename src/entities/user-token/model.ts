import { create } from 'zustand';
import * as Keychain from 'react-native-keychain';
import axios from 'axios';

type Store = {
    isAuth: boolean,
    setToken: (token: string) => void,
    clearToken: () => void,
    loadToken: () => Promise<void>,
}

export const useUserToken = create<Store>((set, get) => ({
    isAuth: false,
    setToken: (token) => {
        Keychain.setGenericPassword('Token', token);
        set({ isAuth: true });
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    clearToken: () => {
        Keychain.resetGenericPassword();
        set({ isAuth: false });
        axios.defaults.headers.common.Authorization = undefined;
    },
    loadToken: () => Keychain.getGenericPassword().then((credentials) => {
        const { setToken } = get();
        if (credentials) {
            setToken(credentials.password);
        }
    }),
}));
