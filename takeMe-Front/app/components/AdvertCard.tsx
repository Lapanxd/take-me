import React from "react"
import { Text, View, TextStyle, ViewStyle, TouchableOpacity } from "react-native"
import { colors, spacing } from "../theme"


interface Props {
  name: string
  onPress: (name: string) => void
}

export const AdvertCard: React.FC<Props> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={$container}>
        <View style={$adcard}>
        <Text style={$name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  padding: 16,
  marginTop: 8,
}
const $adcard: ViewStyle = {
  padding: spacing.md,
  marginTop: spacing.md,
  minHeight: 120,
}

const $name: TextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginTop: 4,
  color: colors.text,
  backgroundColor: colors.transparent,

}

export default AdvertCard
