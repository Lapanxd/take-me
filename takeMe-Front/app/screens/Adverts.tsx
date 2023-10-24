import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AdvertCard from "app/components/AdvertCard";
import Menu from "app/components/Menu";
import React from "react";
import {
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { colors } from "../theme"
import { RootStackParams } from "app/navigators/MenuNavigator";


type Props = NativeStackScreenProps<RootStackParams, "Adverts">

export const Adverts = ({ navigation }: Props) => {
  return (
    <View style={$container}>

      <ScrollView>
        <AdvertCard
          name="Annonce objet 1"
          onPress={name => {
            navigation.navigate('AdvertDetailScreen', { name });
          }}
        />
        <AdvertCard
          name="Annonce objet 2"
          onPress={name => {
            navigation.navigate('AdvertDetailScreen', { name });
          }}
        />
        <AdvertCard
          name="Annonce objet 3"
          onPress={name => {
            navigation.navigate('AdvertDetailScreen', { name });
          }}
        />
        <AdvertCard
          name="Annonce objet 4"
          onPress={name => {
            navigation.navigate('AdvertDetailScreen', { name });
          }}
        />
        {/* <Text style={$name}>
        Navigation
      </Text> */}
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
  fontWeight: 'bold',
  marginTop: 4,
}

const $title: TextStyle = {
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 8,
}

export default Adverts;






