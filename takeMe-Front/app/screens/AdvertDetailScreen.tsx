import React from "react"
import { View, ViewStyle, Text } from "react-native"
import { colors } from "../theme"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParams } from "app/navigators/MenuNavigator"
import Menu from "app/components/Menu"
import TopBackNavigation from "app/components/TopBackNavigation"
import TopDrawerNavigation from "app/components/TopDrawerNavigation"

type Props = NativeStackScreenProps<RootStackParams, "AdvertDetailScreen">

// export const AdvertDetailScreen = ({ route }) => {
export const AdvertDetailScreen = ({ route, navigation }) => {
  const { item } = route.params
  // const { item } = navigation.getParam
  return (
    <View style={$container}>
      <TopDrawerNavigation />
      <TopBackNavigation />
      <Text>{item.adname}</Text>
      <Text>{item.description}</Text>
      <Text>{item.quantity}</Text>
      <Text>{item.latitude}</Text>
      <Text>{item.longitude}</Text>
      <Menu />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: "center",
  alignItems: "center",
}

export default AdvertDetailScreen
