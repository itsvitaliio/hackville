import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: undefined
  Home: undefined
  Plan: undefined
  Alan: undefined
  NotFound: undefined
}

export type RootTabParamList = {
  TabOne: undefined
  TabTwo: undefined
}