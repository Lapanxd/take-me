import React from 'react';
import { View, ViewStyle, Text } from "react-native";
import { colors } from "../theme";
import { Card } from 'react-bootstrap'

export const NewPage = () => {
  return (
    <React.Fragment>
        <View style={$container}>
        <Card style={{ width: 400 }}>
      <Card.Body>
        <Card.Title>Test affichageune annonce</Card.Title>
        <Text>Ceci est ma nouvelle page</Text>
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
export default NewPage;