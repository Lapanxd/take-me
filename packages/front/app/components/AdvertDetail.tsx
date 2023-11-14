import React from 'react';
import { View, Text, Image, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Map from '../components/Map';
import { IObjectType } from '../core/models/ObjectType';
import Header from './Header';

interface Props {
  name: string;
  image: string;
  description: string;
  geocode: [number, number];
  objectType: IObjectType;
  onClose: () => void;
}

export const AdvertDetail: React.FC<Props> = ({
  name,
  image,
  description,
  geocode,
  objectType,
  onClose,
}) => {
  const { width } = useWindowDimensions();
  function mapWidth() {
    if (width > 1500) return 3.2;
    if (width > 1200) return 2;
    if (width > 900) return 1.5;
    if (width > 700) return 1;
  }

  return (
    <View>
      <Header></Header>
      <View
        style={{
          flexDirection: width > 700 ? 'row' : 'column',
          backgroundColor: '#f3f3f3',
          gap: width > 700 ? 0 : 30,
        }}
      >
        <View style={styles.advertList}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.backButton}>{'< retour'}</Text>
          </TouchableOpacity>
          <Text style={styles.advertName}>{name}</Text>
          <Text style={styles.advertObjectType}>Type: {objectType?.name}</Text>
          <Image source={{ uri: image }} style={styles.advertImage} />
          <View>
            <Text style={styles.advertDescription}>{description}</Text>
          </View>
        </View>
        <View style={{ flex: mapWidth() }}>
          <Map geocodes={[geocode]} names={[name]} selectedGeocode={geocode} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  advertList: {
    flex: 1,
    marginLeft: 15,
    marginRight: 10,
    height: '92.5vh',
    backgroundColor: '#f3f3f3',
    marginTop: 3,
  },
  backButton: { fontSize: 20, color: '#6e6969' },
  advertName: { fontWeight: 'bold', fontSize: 25, marginTop: 15 },
  advertObjectType: { marginBottom: 10 },
  advertImage: { width: '100%', height: 300, borderRadius: 10 },
  advertDescription: { fontSize: 16, marginTop: 15 },
});

export default AdvertDetail;
