import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AdvertCard from '../components/AdvertCard';
import React, { useState } from 'react';
import { TextStyle, View, ViewStyle, FlatList, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, spacing } from '../theme';
import { RootStackParams } from '../navigators/MenuNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';
import Map from '../components/Map';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon } from 'leaflet';

type Props = NativeStackScreenProps<RootStackParams, 'AdvertsStack'>;

export const Adverts = ({ navigation }: Props) => {
  const annonces = [
    {
      adname: 'Chaise en bois',
      description: 'Chaise en bon état, couleur marron',
      quantity: '1',
      geocode: [44.858, -0.5667],
      image:
        'https://images.unsplash.com/photo-1562113530-57ba467cea38?auto=format&fit=crop&q=80&w=1299&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      adname: 'Étagère blanche',
      description: 'Étagère blanche, 1m50',
      quantity: '1',
      geocode: [44.8375, -0.5667],
      image:
        'https://www.lafoirfouille.fr/medias/sys_master/images/images/h20/hc8/8892827336734/10000180640-0-1200Wx1200H.jpg',
    },
    {
      adname: 'Canapé 3 places',
      description: 'A nettoyer, bon état',
      quantity: '1',
      geocode: [44.8279, -0.567],
      image: 'https://rouen.blogs.com/.a/6a00e551daa20b88330133ee6b474d970b-700wi',
    },
  ];

  const geocodes = annonces.map((item) => item.geocode);
  const names = annonces.map((item) => item.adname);

  return (
    <View style={$container}>
      <View style={$header}>
        <TopDrawerNavigation />
      </View>
      <Text style={$welcomeHeading}>Toutes les annonces</Text>
      <View style={$advertscontent}>
        <View style={$advertslist}>
          <ScrollView>
            <FlatList
              data={annonces}
              renderItem={({ item }) => (
                <AdvertCard
                  name={item.adname}
                  image={item.image}
                  description={item.description}
                  onPress={() => {
                    navigation.navigate('Advert', { item: item });
                  }}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
        <ScrollView>
            <Map geocodes={geocodes} names={names} />
          </ScrollView>
    </View>
    </View >
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  padding: 16,
  marginTop: 8,
};
const $header: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: 16,
};

const $advertscontent: ViewStyle = {
  flexDirection: 'row',
};

const $advertslist: ViewStyle = {
  flexDirection: 'column',
  width: 700,
  height: 500,
};

const $mapcontent: ViewStyle = {
  flexDirection: 'column',
  width: 500,
  height: 300,
};

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
  fontSize: 44,
  fontWeight: 'bold',
  padding: 16,
};
export default Adverts;
