import React, { useState } from 'react';
import {
  Text,
  View,
  TextStyle,
  ViewStyle,
  Image,
  TouchableOpacity,
  ImageStyle,
  Modal,
} from 'react-native';
import { colors } from '../theme';
import IconEye from '../icons/IconEye';
import AdvertDetail from './AdvertDetail';
import { IObjectType } from '../core/models/ObjectType';

interface Props {
  name: string;
  image: string;
  description: string;
  geocode: number;
  objectType: IObjectType;
}

export const AdvertCard: React.FC<Props> = ({ name, image, description, geocode, objectType }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={$container}>
          <View style={$adcard}>
            <Text style={$name}>{name}</Text>
            <Image source={{ uri: image }} style={$image} />
            <Text style={$button}>Regarder le détail <IconEye color={'black'} size={20} /></Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <AdvertDetail
          name={name}
          image={image}
          description={description}
          geocode={geocode}
          objectType={objectType}
          onClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
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

const $button: TextStyle = {
  marginTop: 10,
  marginBottom: 4,
  color: colors.text,
  backgroundColor: colors.transparent,
  justifyContent: 'center',
  alignItems: 'center',
};


export default AdvertCard;
