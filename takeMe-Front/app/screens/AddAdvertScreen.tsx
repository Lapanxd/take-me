import React from "react"
import AdForm from "./AdvertFormScreen"
import { View, ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import { Card } from "react-bootstrap"
import TopDrawerNavigation from "app/components/TopDrawerNavigation"

export const AddAdvertScreen = () => {
  const handleOnSubmit = (advert) => {
    console.log(advert)
  }

  return (
    <React.Fragment>
      <View style={$container}>
      <View style={$header}>
            <TopDrawerNavigation />
          </View>
        <Card style={{ width: 400, marginLeft: 50 }}>
          <Card.Body>
            <Card.Title>Ajouter une annonce</Card.Title>
            <AdForm handleOnSubmit={handleOnSubmit} />
          </Card.Body>
        </Card>
      </View>
    </React.Fragment>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}
const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: 'flex-end',
  alignItems: "center",
  marginBottom: 16,
};

export default AddAdvertScreen
