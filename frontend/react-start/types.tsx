import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: undefined;
  Home: undefined;
  Timeline: undefined;
  Alan: undefined;
}

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
}