import React from 'react';
import { View, ViewStyle, Text } from "react-native";
import { colors } from "../theme";
import { Card } from 'react-bootstrap'
import Menu from 'app/components/Menu';
import AdvertCard from 'app/components/AdvertCard';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "app/navigators/MenuNavigator";


type Props = NativeStackScreenProps<RootStackParams, "NewPage">

export const NewPage = ({ navigation }: Props) => {
  return (
    <React.Fragment>
      <View style={$container}>
        <Card style={{ width: 400 }}>
          <Card.Body>
            <Card.Title>Test affichageune annonce</Card.Title>
            <Text>Ceci est ma nouvelle page</Text>
          </Card.Body>
        </Card>
        <AdvertCard
          name="Annonce objet 1"
          onPress={name => {
            navigation.navigate('AdvertDetailScreen', { name });
          }}
        />
        <Menu />
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