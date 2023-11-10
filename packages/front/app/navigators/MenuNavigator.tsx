import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AddAdvertScreen, NewPage, Adverts } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type RootStackParams = {
  AddAdvert: undefined;
  NewPage: undefined;
  Profil: undefined;
  Adverts: undefined;
  Connect: undefined;
  Inscription: undefined;
  AdvertsStack: NavigatorScreenParams<AdvertsStackParams>;
};

const RootStack = createDrawerNavigator<RootStackParams>();

export type AdvertsStackParams = {
  Adverts: undefined;
};
const AdvertsStack = createNativeStackNavigator<AdvertsStackParams>();

const AdvertScreenStack = () => {
  return (
    <AdvertsStack.Navigator
      initialRouteName="Adverts"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AdvertsStack.Screen name="Adverts" component={Adverts} />
    </AdvertsStack.Navigator>
  );
};

export function MenuNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="NewPage"
        screenOptions={({ route }) => ({
          headerShown: false,
          drawerActiveTintColor: '#e67a15',
          drawerInactiveTintColor: 'gray',
        })}
      >
        <RootStack.Screen name="AdvertsStack" component={AdvertScreenStack} />
        <RootStack.Screen name="NewPage" component={NewPage} />
        <RootStack.Screen name="AddAdvert" component={AddAdvertScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default MenuNavigator;
