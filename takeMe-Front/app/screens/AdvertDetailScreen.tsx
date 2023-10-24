import React from 'react';
import { View, ViewStyle } from "react-native";
import { colors } from "../theme";
import { Card } from 'react-bootstrap'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from "app/navigators/MenuNavigator";


type Props = NativeStackScreenProps<RootStackParams, "AdvertDetailScreen">;

const AdvertDetailScreen = ({route, navigation}: Props) => {
    return (
        <View style={$container}>
        <Card style={{ width: 400 }}>
            <Card.Body>
                <Card.Title>
                    {route.params.name}
                </Card.Title>
            </Card.Body>
        </Card>

    </View>
    )
   
};

const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
}

export default AdvertDetailScreen;