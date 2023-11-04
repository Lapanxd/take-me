import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AdvertCard from '../components/AdvertCard';
import React from 'react';
import { TextStyle, View, ViewStyle, FlatList, Text, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, spacing } from '../theme';
import { RootStackParams } from '../navigators/MenuNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';
import Map from '../components/Map';

type Props = NativeStackScreenProps<RootStackParams, 'AdvertsStack'>;

export const Adverts = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 800;
  const annonces = [
    {
      adname: 'Chaise en bois',
      description: 'Chaise en bon état, couleur marron, Chaise en bon état, couleur marron; Chaise en bon état, couleur marron',
      geocode: [44.858, -0.5667],
      objectType: {
        id: 1,
        name: "meuble"
      },
      image:
        'https://images.unsplash.com/photo-1562113530-57ba467cea38?auto=format&fit=crop&q=80&w=1299&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      adname: 'Étagère blanche',
      description: 'Étagère blanche, 1m50',
      geocode: [44.8375, -0.5667],
      objectType: {
        id: 1,
        name: "meuble"
      },
      image:
        'https://www.lafoirfouille.fr/medias/sys_master/images/images/h20/hc8/8892827336734/10000180640-0-1200Wx1200H.jpg',
    },
    {
      adname: 'Canapé 3 places',
      description: 'A nettoyer, bon état',
      objectType: {
        id: 1,
        name: "meuble"
      },
      geocode: [44.8279, -0.567],
      image: 'https://rouen.blogs.com/.a/6a00e551daa20b88330133ee6b474d970b-700wi',
    },
    {
      adname: 'Étagère rouge',
      description: 'Étagère blanche, 1m50',
      geocode: [44.8375, -0.5667],
      objectType: {
        id: 1,
        name: "meuble"
      },
      image:
        'https://www.lafoirfouille.fr/medias/sys_master/images/images/h20/hc8/8892827336734/10000180640-0-1200Wx1200H.jpg',
    },
    {
      adname: 'Canapé 2 places',
      description: 'A nettoyer, bon état',
      objectType: {
        id: 1,
        name: "meuble"
      },
      geocode: [44.8279, -0.567],
      image: 'https://rouen.blogs.com/.a/6a00e551daa20b88330133ee6b474d970b-700wi',
    },
  ];

  const geocodes = annonces.map((item) => item.geocode);
  const names = annonces.map((item) => item.adname);


  const detail = (
    <>
              <ScrollView>
            <FlatList
              data={annonces}
              renderItem={({ item }) => (
                <AdvertCard
                  name={item.adname}
                  image={item.image}
                  description={item.description}
                  geocode={item.geocode}
                  objectType={item.objectType.name}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
    </>
  )

  return (
    <View style={$container}>
      <View style={$header}>
        <TopDrawerNavigation />
      </View>
      <Text style={$welcomeHeading}>Toutes les annonces</Text>
      <View style={isSmallScreen ? $advertsContentSmall : $advertsContentLarge}>
        <View style={isSmallScreen ? $advertsListSmall : $advertsListLarge} >
{detail}
         </View>
          {isSmallScreen && (
            <View style={$mapBlocSmall}>
              <Map geocodes={geocodes} names={names} />
            </View>
          )}

          {!isSmallScreen && (
            <View style={$mapBlocLarge}>
              <Map geocodes={geocodes} names={names} />
            </View>
          )}
      </View>
    </View >
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};
const $header: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: 16,
};

const $mapBlocSmall: ViewStyle = {
  flex: 1,
  width: '100%',
  height: '100vh',
  backgroundColor: colors.background,
};

const $mapBlocLarge: ViewStyle = {
  width: '95%',
  height: '100vh',
  backgroundColor: colors.background,
};

const $advertsContentSmall: ViewStyle = {
  flexDirection: 'column',
  backgroundColor: colors.background,
};

const $advertsContentLarge: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: colors.background,
};

const $advertsListSmall: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: colors.background,
};

const $advertsListLarge: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
  height: '100vh',
  backgroundColor: colors.background,
};

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
  fontSize: 44,
  fontWeight: 'bold',
  padding: 16,
  marginLeft: 50
};
export default Adverts;
