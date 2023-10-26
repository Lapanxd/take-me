import { NativeStackScreenProps } from "@react-navigation/native-stack"
import AdvertCard from "app/components/AdvertCard"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { colors } from "../theme"
import { RootStackParams } from "app/navigators/MenuNavigator"
import Menu from "app/components/Menu"
import TopDrawerNavigation from "app/components/TopDrawerNavigation"

type Props = NativeStackScreenProps<RootStackParams, "AdvertsStack">

export const Adverts = ({ navigation }: Props) => {
  return (
    <View style={$container}>
            <TopDrawerNavigation />
      <ScrollView>
        <AdvertCard
          name="Annonce objet 1"
          onPress={(name) => {
            navigation.navigate("Advert", { name: name })
          }}
        />
        <AdvertCard
          name="Annonce objet 2"
          onPress={(name) => {
            navigation.navigate("Advert", { name })
          }}
        />
        <AdvertCard
          name="Annonce objet 3"
          onPress={(name) => {
            navigation.navigate("Advert", { name })
          }}
        />
        <AdvertCard
          name="Annonce objet 4"
          onPress={(name) => {
            navigation.navigate("Advert", { name })
          }}
        />
      </ScrollView>
      <Menu />
    </View>
  )
}
const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  padding: 16,
  marginTop: 8,
}

const $name: TextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginTop: 4,
}

export default Adverts
