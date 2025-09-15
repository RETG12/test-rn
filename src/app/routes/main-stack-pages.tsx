import { DocsPage } from '@/pages/docs-page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const MainStackPages = createNativeStackNavigator({
    screens: {
        DocsPage: {
            screen: DocsPage,
            options: {
                title: 'Docs',
            },
        },
    },
});
