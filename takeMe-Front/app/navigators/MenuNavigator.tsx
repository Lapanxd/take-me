import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AddAdvertScreen, NewPage } from "../screens"
import Adverts from "app/screens/Adverts"
import AdvertDetailScreen from "app/screens/AdvertDetailScreen"
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ExploreIcon from "app/icons/ExploreIcon"
import RestaurantIcon from "app/icons/RestaurantIcon"
import ProfileIcon from "app/icons/ProfileIcon"

export type RootStackParams = {
  AddAdvert: undefined
  NewPage: undefined
  // Adverts: undefined
  AdvertsStack: NavigatorScreenParams<AdvertsStackParams>;
  AdvertDetailScreen: {
    name: string
    // id: string
  }
}

const RootStack = createDrawerNavigator<RootStackParams>()

export type AdvertsStackParams = {
  Adverts: undefined;
  AdvertDetailScreen: {
    name: string;
  };
};
const AdvertsStack = createNativeStackNavigator<AdvertsStackParams>();

const AdvertScreenStack = () => {
  return (
    <AdvertsStack.Navigator initialRouteName="Adverts" screenOptions={{
      headerShown: false,
    }}>
      <AdvertsStack.Screen
        name="Adverts"
        component={Adverts}
      />
      <AdvertsStack.Screen
        name="AdvertDetailScreen"
        component={AdvertDetailScreen}
      />
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
          tabBarActiveTintColor: "#e67a15",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <RootStack.Screen name="AdvertsStack" component={AdvertScreenStack}
          options={{
              drawerIcon: ({ color, size }) => <ExploreIcon color={color} size={size} />,
          drawerLabel: "Adverts"
        }} />
        <RootStack.Screen name="AddAdvert" component={AddAdvertScreen} 
                options={{
                  drawerIcon: ({ color, size }) => <RestaurantIcon color={color} size={size} />,
                  drawerLabel: "Ajouter"
                }}
              />
        <RootStack.Screen name="NewPage" component={NewPage} options={{
          drawerIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />,
          drawerLabel: "Profile"
        }} />
        {/* <RootStack.Screen name="AdvertDetailScreen" component={AdvertDetailScreen} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default MenuNavigator
