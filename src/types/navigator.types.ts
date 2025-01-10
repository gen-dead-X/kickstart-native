import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
  DemoNavigation: undefined;
};
export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  BottomTabDemoScreenA: undefined;
  BottomTabDemoScreenB: undefined;
};

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};
