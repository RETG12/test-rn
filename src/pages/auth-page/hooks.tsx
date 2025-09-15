import { useUserToken } from '@/entities/user-token';
import { ApiError } from '@/shared/api/api-error-response';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Toast from 'react-native-toast-message';

type MutationVariables = {
    code: number,
}

export const useCodeVerify = () => {
    const { setToken } = useUserToken();

    const {
        mutate: validateCode,
        isPending: isValidating,
    } = useMutation<any, ApiError, MutationVariables>({
        mutationFn: (payload) =>
            axios.post('/api/pincode', payload),
        onSuccess: (response) => {
            if (response.data?.token) {
                setToken(response.data.token);
            }
        },
        onError: (error) => {
            Toast.show({
                type: 'error',
                text1: error.response?.status === 404 ? 'PIN code not found' : 'Error, please try again later',
            });
        }
    });

    return { validateCode, isValidating };
};
