import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: undefined
  Home: undefined
  Calendar: undefined
  Plan: undefined
  Notes: undefined
  Meditate: undefined
  Reminders: undefined
  Music: undefined
  Alan: undefined
  NotFound: undefined
}

export type RootTabParamList = {
  TabOne: undefined
  TabTwo: undefined
}