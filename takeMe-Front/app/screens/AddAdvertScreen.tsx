import React from 'react';
import AdForm from './AdvertFormScreen';
import { View, ViewStyle } from "react-native";
import { colors } from "../theme";
import { Card } from 'react-bootstrap'

export const AddAdvertScreen = () => {
  const handleOnSubmit = (advert) => {
    console.log(advert);
  };

  return (
    <React.Fragment>
        <View style={$container}>
        <Card style={{ width: 400 }}>
      <Card.Body>
        <Card.Title>Ajouter une annonce</Card.Title>
        <AdForm handleOnSubmit={handleOnSubmit} />
      </Card.Body>
    </Card>

      </View>
    </React.Fragment>
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: "center",
  alignItems: "center",
}
export default AddAdvertScreen;
