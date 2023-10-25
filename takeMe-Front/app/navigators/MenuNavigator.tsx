import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AddAdvertScreen, AdvertListScreen, NewPage } from "../screens"
import Adverts from "app/screens/Adverts";
import AdvertDetailScreen from "app/screens/AdvertDetailScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreIcon from 'app/icons/ExploreIcon';


export type RootStackParams = {
    AddAdvert: undefined
    NewPage: undefined
    AdsStack: NavigatorScreenParams<AdsStackParams>;
    AdvertDetailScreen: {
        name: string;
        // id: string
    }
}


const RootStack = createBottomTabNavigator<RootStackParams>()

export type AdsStackParams = {
    Adverts: undefined;
    AdvertDetailScreen: {
        name: string;
    };
};
const AdsStack = createNativeStackNavigator<AdsStackParams>();

const AdScreenStack = () => {
    return (
        <AdsStack.Navigator initialRouteName="Adverts" screenOptions={{
            headerShown: false,
          }}>
            <AdsStack.Screen
                name="Adverts"
                component={Adverts}
            />
            <AdsStack.Screen
                name="AdvertDetailScreen"
                component={AdvertDetailScreen}
            />
        </AdsStack.Navigator>
    );
};

export function MenuNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="NewPage" screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#e67a15',
        tabBarInactiveTintColor: 'gray',
      })}>
                <RootStack.Screen
                    name="AdsStack"
                    component={AdScreenStack} options={{
                        tabBarIcon: ({ color, size }) => <ExploreIcon color={color} size={size} />,
                        tabBarLabel: "Explore"
                      }} />
                <RootStack.Screen
                    name="AddAdvert"
                    component={AddAdvertScreen} />
                <RootStack.Screen
                    name="NewPage"
                    component={NewPage} />
                {/* <RootStack.Screen
                    name="AdvertDetail"
                    component={AdvertDetailScreen} /> */}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}


export default MenuNavigator;
