import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AddAdvertScreen, AdvertListScreen, NewPage } from "../screens"
import Adverts from "app/screens/Adverts";
import AdvertDetailScreen from "app/screens/AdvertDetailScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export type RootStackParams = {
    AdvertList: undefined
    AddAdvert: undefined
    NewPage: undefined
    Adverts: undefined
    AdvertDetailScreen: {
        name: string;
        // id: string
    }
}


const RootStack = createBottomTabNavigator<RootStackParams>()

export function MenuNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Adverts"
                    component={Adverts} />
                <RootStack.Screen
                    name="AddAdvert"
                    component={AddAdvertScreen} />
                <RootStack.Screen
                    name="AdvertList"
                    component={AdvertListScreen} />
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


export type AdsStackParams = {
    Adverts;
    AdvertDetailScreen: {
        name: string;
    };
};
const AdsStack = createNativeStackNavigator<AdsStackParams>();

const AdScreenStack = () => {
    return (
        <AdsStack.Navigator>
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