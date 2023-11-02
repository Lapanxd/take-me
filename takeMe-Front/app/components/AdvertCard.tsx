import React from "react";
import { Text, View, TextStyle, ViewStyle, Image, TouchableOpacity, ImageStyle } from "react-native";
import { colors } from "../theme";

interface Props {
  name: string;
  image: string; // Ajout de la prop image
  description: string,
  onPress: (name: string) => void;
}

export const AdvertCard: React.FC<Props> = ({ name, image, description, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={$container}>
        <View style={$adcard}>
          {/* Ajout de l'Image */}
          <Image source={{ uri: image }} style={$image} />
          <View style={$adcontent}>
          <Text style={$name}>{name}</Text>
          <View style={{ flexDirection: 'row'}}>
          <Text style={$description}>{description}</Text>
          </View>
          </View>
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
  // width: "50%",
  backgroundColor: "white",
  borderRadius: 8,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  marginLeft: 50,
  padding: 16,
  flexDirection: 'row',
};

const $adcontent: ViewStyle = {
  padding: 16,
  
};

const $name: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  marginTop: 4,
  color: colors.text,
  backgroundColor: colors.transparent,
};
const $description: TextStyle = {
  fontSize: 14,
  marginTop: 4,
  color: colors.text,
  backgroundColor: colors.transparent,
  flexShrink: 1,
  flexWrap: 'wrap'
};

const $image: ImageStyle = {
  width: 200, 
  height: 200,
  marginRight: 8,
  borderRadius: 8,
};


export default AdvertCard
