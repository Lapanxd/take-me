import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AddAdvertScreen, Adverts } from '../screens';
import { colors, spacing, typography } from '../theme';
import { AppStackParamList, AppStackScreenProps } from './AppNavigator';

export type AdvertTabParamList = {
  AdvertList: undefined;
  AddAdvert: undefined;
};

export type AdvertTabScreenProps<T extends keyof AdvertTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<AdvertTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>;

const Tab = createBottomTabNavigator<AdvertTabParamList>();

export function AdvertNavigator() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen name="AddAdvert" component={AddAdvertScreen} />
      <Tab.Screen name="AdvertList" component={Adverts} />
    </Tab.Navigator>
  );
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
};

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
};

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
};
