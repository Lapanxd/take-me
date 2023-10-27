import { NativeStackScreenProps } from "@react-navigation/native-stack"
import AdvertCard from "app/components/AdvertCard"
import React, { useState } from "react"
import { TextStyle, View, ViewStyle, FlatList, TouchableOpacity, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { colors } from "../theme"
import { RootStackParams } from "app/navigators/MenuNavigator"
import Menu from "app/components/Menu"
import TopDrawerNavigation from "app/components/TopDrawerNavigation"

type Props = NativeStackScreenProps<RootStackParams, "AdvertsStack">

export const Adverts = ({ navigation }: Props) => {

  const [annonces, setAnnonces] = useState([
    {
      adname: "Chaise en bois",
      description: "chaise bon état marron",
      quantity: "1",
      latitude: "6777.9009",
      longitude: "79798.90909",
    },
    {
      adname: "Etagere banche",
      description: "Etagere banche 1m50 bon état 3 étages",
      quantity: "1",
      latitude: "6877.9339",
      longitude: "99798.90509",
    }
  ]);
  return (
    <View style={$container}>
      <TopDrawerNavigation />
      <ScrollView>
        <FlatList
          data={annonces}
          renderItem={({ item }) => (
            <AdvertCard
              //  key={item.guid}
              //  advert={item}
              name={item.adname}
              onPress={(name) => {
                navigation.navigate('Advert', { item: item })
              }}
            />
          )}
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
