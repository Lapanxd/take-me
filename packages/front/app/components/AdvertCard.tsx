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
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  name: string;
  image: string;
  description: string;
  geocode: [number, number];
  objectType: IObjectType;
}

export const AdvertCard: React.FC<Props> = ({ name, image, description, geocode, objectType }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ padding: 7 }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View>
          <View style={$adcard}>
            <Image source={{ uri: image }} style={$image} />
            <Text style={$name}>{name}</Text>
            {/*<Text style={$button}>*/}
            {/*  Regarder le détail <IconEye color={'black'} size={20} />*/}
            {/*</Text>*/}
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

const $adcard: ViewStyle = {
  borderRadius: 10,
  flexDirection: 'column',
  justifyContent: 'center',
};

const $name: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 4,
  marginBottom: 4,
  color: colors.text,
  backgroundColor: colors.transparent,
};

const $image: ImageStyle = {
  borderRadius: 12,
  width: '100%',
  height: 230,
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
