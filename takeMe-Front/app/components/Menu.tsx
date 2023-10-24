import React from "react";
import {
    Text,
    View,
    TextStyle,
    ViewStyle,
    TouchableOpacity
} from "react-native";
import { colors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "app/navigators/MenuNavigator";


const Menu = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    return (
        <View style={$container}>
            <Text style={$title}>
                Navigation
            </Text>
            <TouchableOpacity
                onPress={() => {
                    //go to add annonce
                    navigation.navigate("Adverts");
                }}>
                <Text style={$link}>
                    Toutes les annonces
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    //go to add annonce
                    navigation.navigate("AddAdvert");
                }}>
                <Text style={$link}>
                    Ajouter une annonce
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    //go to add annonce
                    navigation.navigate("NewPage");
                }}>
                <Text style={$link}>
                   New Page
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    marginTop: 8,
}

const $title: TextStyle = {
    fontSize: 16,
}


const $link: TextStyle = {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 'bold',
    color: '#097ade',
}
export default Menu;
