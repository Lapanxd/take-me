import React from "react"
import { Text, View, TextStyle, ViewStyle, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParams } from "app/navigators/MenuNavigator"

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
      <Text style={$title}>Navigation</Text>

    <TouchableOpacity onPress={() => navigateAndClose("Adverts")}>
        <Text style={$link}>Toutes les annonces</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateAndClose("AddAdvert")}>
      <Text style={$link}>Ajouter une annonce</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateAndClose("NewPage")}>
        <Text style={$link}>New Page</Text>
      </TouchableOpacity>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  // backgroundColor: colors.background,
  padding: 16,
  marginTop: 8,
}

const $title: TextStyle = {
  fontSize: 16,
}

const $link: TextStyle = {
  fontSize: 16,
  marginTop: 4,
  fontWeight: "bold",
  color: "#097ade",
}
export default Menu
