import React from "react";
import {
    Text,
    View,
    TextStyle,
    ViewStyle,
    TouchableOpacity
} from "react-native";
import { colors } from "../theme";


interface Props {
    name: string;
    onPress: (name: string) => void;
  }

const AdvertCard: React.FC<Props> = ({name, onPress}) => {
  
    return (
      <TouchableOpacity onPress={() => onPress(name)}>
        <View style={$container}>
          <Text style={$name}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  };



const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.cardbg,
    padding: 16,
    marginTop: 8,
}

const $name: TextStyle = {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
}



export default AdvertCard;
