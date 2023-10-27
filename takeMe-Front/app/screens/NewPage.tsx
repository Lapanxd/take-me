import React from "react"
import { View, ViewStyle, Text, ImageBackground, ImageStyle } from "react-native"
import { colors } from "../theme"
import { Card } from "react-bootstrap"
import Menu from "app/components/Menu"
import AdvertCard from "app/components/AdvertCard"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParams } from "app/navigators/MenuNavigator"
import TopDrawerNavigation from "app/components/TopDrawerNavigation"



const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

type Props = NativeStackScreenProps<RootStackParams, "NewPage">

export const NewPage = ({ navigation }: Props) => {
  return (
    <React.Fragment>
         <ImageBackground source={image} resizeMode="cover">
      <View style={$container}>
        <TopDrawerNavigation />
     
          <Card style={{ width: 400 }}>
            <Card.Body>
              <Card.Title>Test affichage card</Card.Title>
              <Text>Ceci est ma nouvelle page</Text>
            </Card.Body>
          </Card>

          <AdvertCard
            name="Annonce objet 1"
            onPress={(name) => {
              navigation.navigate("AdvertDetailScreen", { name })
            }}
          />
</View>
        </ImageBackground>
      
    </React.Fragment>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}
// const $imagebg: ImageStyle = {
//   height: "100%",
//   width: "100%",

// }
export default NewPage
