import React from "react"
import { View, ViewStyle, Text, ImageBackground, ImageStyle } from "react-native"
import { colors } from "../theme"
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
          <View style={$header}>
            <TopDrawerNavigation />
          </View>
          <View style={$centerBox}>
          <TouchableOpacity style={$searchBar}>
            <Text>Le bonheur est dans la rue !</Text>
          </TouchableOpacity>
          </View>
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
const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: 'flex-end',
  alignItems: "center",
  marginBottom: 16,
};

const $centerBox: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'center',
}

const $searchBar: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: '40px',
  width: '300px',
  margin: '20px',
  padding: '20px',
}
export default NewPage
