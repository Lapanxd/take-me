import React from 'react';
import { View, ViewStyle, Text } from "react-native";
import { colors } from "../theme";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from "app/navigators/MenuNavigator";


type Props = NativeStackScreenProps<RootStackParams, "AdvertDetailScreen">;

export const AdvertDetailScreen = ({ route }: Props) => {
    return (
        <View style={$container}>
            <Text>{route.params.name}</Text>
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