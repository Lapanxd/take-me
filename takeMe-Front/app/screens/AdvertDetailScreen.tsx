import React from "react"
import { View, ViewStyle, Text } from "react-native"
import { colors } from "../theme"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParams } from "app/navigators/MenuNavigator"
import Menu from "app/components/Menu"
import TopBackNavigation from "app/components/TopBackNavigation"

type Props = NativeStackScreenProps<RootStackParams, "AdvertDetailScreen">

export const AdvertDetailScreen = ({ route }) => {
  const { name } = route.params
  return (
    <View style={$container}>
      <TopBackNavigation />
      <Text>{name}</Text>
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
