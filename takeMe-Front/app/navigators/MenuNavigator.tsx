import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AddAdvertScreen, NewPage } from "../screens"
import Adverts from "app/screens/Adverts";
import AdvertDetailScreen from "app/screens/AdvertDetailScreen";


export type RootStackParams = {
    AddAdvert: undefined
    NewPage: undefined
    Adverts: undefined
    // AdsStack: NavigatorScreenParams<AdsStackParams>;
    AdvertDetailScreen: {
        name: string;
        // id: string
    }
}


const RootStack = createNativeStackNavigator<RootStackParams>()

// export type AdsStackParams = {
//     Adverts: undefined;
//     AdvertDetailScreen: {
//         name: string;
//     };
// };
// const AdsStack = createNativeStackNavigator<AdsStackParams>();

// const AdScreenStack = () => {
//     return (
//         <AdsStack.Navigator initialRouteName="Adverts" screenOptions={{
//             headerShown: false,
//           }}>
//             <AdsStack.Screen
//                 name="Adverts"
//                 component={Adverts}
//             />
//             <AdsStack.Screen
//                 name="AdvertDetailScreen"
//                 component={AdvertDetailScreen}
//             />
//         </AdsStack.Navigator>
//     );
// };

export function MenuNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="NewPage" screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#e67a15',
        tabBarInactiveTintColor: 'gray',
      })}>
                <RootStack.Screen
                    name="Adverts"
                    component={Adverts}/>
                <RootStack.Screen
                    name="AddAdvert"
                    component={AddAdvertScreen} />
                <RootStack.Screen
                    name="NewPage"
                    component={NewPage} />
                <RootStack.Screen
                    name="AdvertDetailScreen"
                    component={AdvertDetailScreen} />
            </RootStack.Navigator> 
        </NavigationContainer>
    )
}


export default MenuNavigator;
