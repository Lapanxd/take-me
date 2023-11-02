import React from 'react';
import {
  Text,
  View,
  TextStyle,
  ViewStyle,
  Image,
  TouchableOpacity,
  ImageStyle,
} from 'react-native';
import { colors } from '../theme';

interface Props {
  name: string;
  image: string; 
  description: string;
  onPress: (name: string) => void;
}

export const AdvertCard: React.FC<Props> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={$container}>
        <View style={$adcard}>
          <Text style={$name}>{name}</Text>
          <Image source={{ uri: image }} style={$image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  padding: 16,
  marginTop: 8,
};

const $adcard: ViewStyle = {
  backgroundColor: 'white',
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  padding: 16,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const $name: TextStyle = {
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 4,
  marginBottom: 4,
  color: colors.text,
  backgroundColor: colors.transparent,
};

const $image: ImageStyle = {
  width: 200,
  height: 200,
  marginRight: 8,
  borderRadius: 8,
};

export default AdvertCard;
