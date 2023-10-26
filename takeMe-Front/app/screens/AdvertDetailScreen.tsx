import React from "react"
import { View, ViewStyle, Text } from "react-native"
import { colors } from "../theme"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParams } from "app/navigators/MenuNavigator"

type Props = NativeStackScreenProps<RootStackParams, "AdvertDetailScreen">

export const AdvertDetailScreen = ({ route }) => {
  const { name } = route.params
  return (
    <View style={$container}>
      <Text>{name}</Text>
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
