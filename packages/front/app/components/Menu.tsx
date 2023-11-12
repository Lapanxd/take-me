import React from 'react';
import { Text, View, TextStyle, ViewStyle, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigators/MenuNavigator';
import { useStores } from '../core';

interface MenuProps {
  onClose: () => void; // Fonction pour fermer le burger menu
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const {
    authenticationStore: { isAuthenticated },
  } = useStores();

  const navigateAndClose = (screenName: keyof RootStackParams) => {
    navigation.navigate(screenName);
    onClose(); // Appel de la fonction de fermeture
  };

  return (
    <View style={$container}>
      <Text style={$title}>Menu</Text>
      <TouchableOpacity onPress={() => navigateAndClose('NewPage')}>
        <Text style={$link}>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateAndClose('Adverts')}>
        <Text style={$link}>Voir les annonces</Text>
      </TouchableOpacity>

      {isAuthenticated ? (
        <TouchableOpacity onPress={() => navigateAndClose('Profil')}>
          <Text style={$link}>Profil</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigateAndClose('Connect')}>
            <Text style={$link}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateAndClose('Inscription')}>
            <Text style={$link}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  // backgroundColor: colors.background,
  padding: 16,
  margin: 8,
};

const $title: TextStyle = {
  fontSize: 36,
  marginTop: 16,
  marginBottom: 18,
  color: 'orange',
  fontWeight: 'bold',
};

const $link: TextStyle = {
  fontSize: 36,
  marginTop: 14,
  fontWeight: 'bold',
  color: 'black',
};
export default Menu;
