import React from "react"
import { Text, View, TextStyle, ViewStyle, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParams } from "../navigators/MenuNavigator"

interface MenuProps {
  onClose: () => void; // Fonction pour fermer le burger menu
}

const Menu : React.FC<MenuProps> = ({ onClose }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const navigateAndClose = (screenName: keyof RootStackParams) => {
    navigation.navigate(screenName);
    onClose(); // Appel de la fonction de fermeture
  };

  return (
    <View style={$container}>
      <Text style={$title}>Menu</Text>

    <TouchableOpacity onPress={() => navigateAndClose("Adverts")}>
        <Text style={$link}>Toutes les annonces</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateAndClose("AddAdvert")}>
      <Text style={$link}>Ajouter une annonce</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateAndClose("NewPage")}>
        <Text style={$link}>Accueil</Text>
      </TouchableOpacity>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  // backgroundColor: colors.background,
  padding: 16,
  margin: 8,
}

const $title: TextStyle = {
  fontSize: 36,
  marginTop: 16,
  marginBottom: 18,
  color: "orange",
  fontWeight: "bold",
}

const $link: TextStyle = {
  fontSize: 36,
  marginTop: 14,
  fontWeight: "bold",
  color: "black",
}
export default Menu
