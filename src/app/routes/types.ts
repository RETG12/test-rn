import { StaticParamList } from '@react-navigation/native';
import { AuthStackPages } from './auth-stack-pages';
import { MainStackPages } from './main-stack-pages';

type AuthStackParamList = StaticParamList<typeof AuthStackPages>;

type MainParamList = StaticParamList<typeof MainStackPages>;

type AllNavParams = AuthStackParamList & MainParamList;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AllNavParams { }
    }
}
