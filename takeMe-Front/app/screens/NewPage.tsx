import React from "react"
import { View, ViewStyle, Text, ImageBackground, ImageStyle } from "react-native"
import { colors } from "../theme"
import { Card } from "react-bootstrap"
import Menu from "app/components/Menu"
import AdvertCard from "app/components/AdvertCard"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParams } from "app/navigators/MenuNavigator"
import TopDrawerNavigation from "app/components/TopDrawerNavigation"
import { TouchableOpacity } from "react-native-gesture-handler"



const image = { uri: 'https://images.unsplash.com/photo-1462212210333-335063b676bc?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

type Props = NativeStackScreenProps<RootStackParams, "NewPage">

export const NewPage = ({ navigation }: Props) => {
  return (
    <React.Fragment>
      <View style={$container}>
        <ImageBackground source={image} style={$imagebg}>
          <TopDrawerNavigation />

          <TouchableOpacity style={$searchBar}>
            <Text>Le bonheur est dans la rue !</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </React.Fragment>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,

}
const $imagebg: ImageStyle = {
  height: "100vh",
  width: "100%",

}

const $searchBar: ImageStyle = {
  flex: 1,
  backgroundColor: colors.background,
  borderRadius: '40px',
  width: '300px',
  margin: '20px',
  padding: '20px',
  justifyContent: 'center',
  alignItem: 'center'

}
export default NewPage
