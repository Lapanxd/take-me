import React from "react";
import { Text, View, TextStyle, ViewStyle, Image, TouchableOpacity, ImageStyle } from "react-native";
import { colors, spacing } from "../theme";

interface Props {
  name: string;
  image: string; // Ajout de la prop image
  onPress: (name: string) => void;
}

export const AdvertCard: React.FC<Props> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={$container}>
        <View style={$adcard}>
          {/* Ajout de l'Image */}
          <Image source={{ uri: image }} style={$image} />
          <Text style={$name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  padding: 16,
  marginTop: 8,
};

const $adcard: ViewStyle = {
  padding: spacing.md,
  marginTop: spacing.md,
  minHeight: 120,
  flexDirection: "row", // Aligner le texte et l'image horizontalement
};

const $name: TextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginTop: 4,
  color: colors.text,
  backgroundColor: colors.transparent,
};

const $image: ImageStyle = {
  width: 100, // Taille de l'image (ajuster selon vos besoins)
  height: 100, // Taille de l'image (ajuster selon vos besoins)
  marginRight: 8, // Marge à droite pour l'espace entre l'image et le texte
};


export default AdvertCard
