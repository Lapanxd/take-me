import React, { useEffect, useState } from 'react';
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
import { IAdvert } from '../core/models/Advert';

export const AdvertCard: React.FC<IAdvert> = ({
  name,
  image,
  description,
  geocode,
  objectType,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [advertImage, setAdvertImage] = useState('');

  useEffect(() => {
    image.base64
      ? setAdvertImage(`data:${image.mime};base64,${image.base64}`)
      : setAdvertImage('https://placehold.co/600x400');
  }, []);

  return (
    <View style={{ padding: 7 }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View>
          <View style={{ borderRadius: 10, flexDirection: 'column', justifyContent: 'center' }}>
            <Image
              source={{ uri: advertImage }}
              style={{ borderRadius: 12, width: '100%', height: 230 }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 4,
                marginBottom: 4,
                color: colors.text,
              }}
            >
              {name}
            </Text>
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
          image={advertImage}
          description={description}
          geocode={geocode}
          objectType={objectType}
          onClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

export default AdvertCard;
