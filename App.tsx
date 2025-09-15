import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Toast from 'react-native-toast-message';
import { MainAppNavigation } from '@/app/routes/main-app-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

axios.defaults.baseURL = 'https://test-rn.developeri.us/';

const queryClient = new QueryClient();

dayjs.locale('ru');

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <MainAppNavigation />
        <StatusBar barStyle='dark-content' />
        <Toast />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
