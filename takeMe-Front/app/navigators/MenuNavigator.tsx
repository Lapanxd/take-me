import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AddAdvertScreen, NewPage, Adverts, AdvertDetailScreen } from "../screens"
import { createDrawerNavigator } from "@react-navigation/drawer";


export type RootStackParams = {
  // AuthStack: undefined
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

// export type AuthStackParams = {
//   Login: undefined;
//   Register: undefined;
// };

// const AuthStack = createNativeStackNavigator<AuthStackParams>();
// const AuthScreenStack = () => {
//   return (
//     <AuthStack.Navigator>
//       <AuthStack.Screen name="Login" component={LoginScreen}></AuthStack.Screen>
//       <AuthStack.Screen name="Register" component={RegisterScreen}></AuthStack.Screen>
//     </AuthStack.Navigator>
//   );
// };



export function MenuNavigator() {
  // const user = useSelector(
  //   (state: Appstate) => { state.currentUser}
  // )
  // const renderContent = () => {
  //   const isLoggedIn = false

  //    if (isLoggedIn) {
  //     return <>



  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="NewPage"
        screenOptions={({ route }) => ({
          headerShown: false,
          drawerActiveTintColor: "#e67a15",
          drawerInactiveTintColor: "gray",
        })}
      >
        <RootStack.Screen name="AdvertsStack" component={AdvertScreenStack}
        />

        <RootStack.Screen name="NewPage" component={NewPage} />


        <RootStack.Screen name="AddAdvert" component={AddAdvertScreen}
        />


      </RootStack.Navigator>

    </NavigationContainer>
  )

  // return <AuthScreenStack />;
}

export default MenuNavigator
