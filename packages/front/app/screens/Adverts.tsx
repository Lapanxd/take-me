import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import AdvertCard from '../components/AdvertCard';
import React from 'react';
import {
  TextStyle,
  View,
  ViewStyle,
  FlatList,
  Text,
  useWindowDimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, spacing } from '../theme';
import { RootStackParams } from '../navigators/MenuNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';
import { useStores } from '../core';
import Map from '../components/Map';
import { Header } from '../components';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParams, 'AdvertsStack'>;

export const Adverts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 800;
  const annonces = [
    {
      name: 'Chaise en bois',
      description:
        'Chaise en bon état, couleur marron, Chaise en bon état, couleur marron; Chaise en bon état, couleur marron',
      geocode: [44.858, -0.5667],
      objectType: {
        id: 1,
        name: 'meuble',
      },
      image:
        'https://images.unsplash.com/photo-1562113530-57ba467cea38?auto=format&fit=crop&q=80&w=1299&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Étagère blanche',
      description: 'Étagère blanche, 1m50',
      geocode: [44.8375, -0.5667],
      objectType: {
        id: 1,
        name: 'meuble',
      },
      image:
        'https://www.lafoirfouille.fr/medias/sys_master/images/images/h20/hc8/8892827336734/10000180640-0-1200Wx1200H.jpg',
    },
    {
      name: 'Canapé 3 places',
      description: 'A nettoyer, bon état',
      objectType: {
        id: 1,
        name: 'meuble',
      },
      geocode: [44.8279, -0.567],
      image: 'https://rouen.blogs.com/.a/6a00e551daa20b88330133ee6b474d970b-700wi',
    },
    {
      name: 'Étagère rouge',
      description: 'Étagère blanche, 1m50',
      geocode: [44.8375, -0.5667],
      objectType: {
        id: 1,
        name: 'meuble',
      },
      image:
        'https://www.lafoirfouille.fr/medias/sys_master/images/images/h20/hc8/8892827336734/10000180640-0-1200Wx1200H.jpg',
    },
    {
      name: 'Canapé 2 places',
      description: 'A nettoyer, bon état',
      objectType: {
        id: 1,
        name: 'meuble',
      },
      geocode: [44.8279, -0.567],
      image: 'https://rouen.blogs.com/.a/6a00e551daa20b88330133ee6b474d970b-700wi',
    },
    {
      name: 'Chaise en bois',
      description:
        'Chaise en bon état, couleur marron, Chaise en bon état, couleur marron; Chaise en bon état, couleur marron',
      geocode: [44.858, -0.5667],
      objectType: {
        id: 1,
        name: 'meuble',
      },
      image:
        'https://images.unsplash.com/photo-1562113530-57ba467cea38?auto=format&fit=crop&q=80&w=1299&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Canapé 2 places',
      description: 'A nettoyer, bon état',
      objectType: {
        id: 1,
        name: 'meuble',
      },
      geocode: [44.8279, -0.567],
      image: 'https://rouen.blogs.com/.a/6a00e551daa20b88330133ee6b474d970b-700wi',
    },
    {
      name: 'Chaise en bois',
      description:
        'Chaise en bon état, couleur marron, Chaise en bon état, couleur marron; Chaise en bon état, couleur marron',
      geocode: [44.858, -0.5667],
      objectType: {
        id: 1,
        name: 'meuble',
      },
      image:
        'https://images.unsplash.com/photo-1562113530-57ba467cea38?auto=format&fit=crop&q=80&w=1299&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const geocodes = annonces.map((item) => item.geocode);
  const names = annonces.map((item) => item.name);

  const detail = (
    <>
      {/* <ScrollView> */}

      {/* </ScrollView> */}
    </>
  );

  function mapWidth() {
    if (width > 1500) return 3.2;
    if (width > 1200) return 2;
    if (width > 900) return 1.5;
    if (width > 700) return 1;
  }

  return (
    <View style={$container}>
      <Header />
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            marginLeft: 15,
            marginRight: 10,
            height: '92.5vh',
            backgroundColor: '#f3f3f3',
            marginTop: 3,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15, marginBottom: 15 }}>
            Toutes les annonces
          </Text>
          <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
              {annonces.map((item, index) => (
                <View key={index} style={{ width: '50%' }}>
                  <AdvertCard
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    geocode={item.geocode}
                    objectType={item.objectType}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={{ flex: mapWidth(), backgroundColor: 'blue', height: '95%' }}>
          <Map geocodes={geocodes} names={names} />
        </View>
      </View>

      {/*  <View style={isSmallScreen ? $advertsContentSmall : $advertsContentLarge}>*/}
      {/*    <View style={isSmallScreen ? $advertsListSmall : $advertsListLarge}>{detail}</View>*/}
      {/*    {isSmallScreen && (*/}
      {/*      <View style={$mapBlocSmall}>/!*<Map geocodes={geocodes} names={names} />*!/</View>*/}
      {/*    )}*/}

      {/*    {!isSmallScreen && (*/}
      {/*      <View style={$mapBlocLarge}>*/}
      {/*        <Map geocodes={geocodes} names={names} />*/}
      {/*      </View>*/}
      {/*    )}*/}
      {/*  </View>*/}
      {width < 915 ? (
        <TouchableOpacity style={styles.addAdvertButton}>
          <Text
            style={{ color: '#ffffff', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('AddAdvert')}
          >
            + Ajouter une annonce
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};
// const $header: ViewStyle = {
//   flexDirection: 'row',
//   justifyContent: 'flex-end',
//   alignItems: 'center',
//   marginBottom: 16,
// };
//
// const $mapBlocSmall: ViewStyle = {
//   flex: 1,
//   width: '100%',
//   height: '100vh',
//   backgroundColor: colors.background,
// };
//
// const $mapBlocLarge: ViewStyle = {
//   width: '95%',
//   height: '100vh',
//   backgroundColor: colors.background,
// };
//
// const $advertsContentSmall: ViewStyle = {
//   flexDirection: 'column',
//   backgroundColor: colors.background,
// };
//
// const $advertsContentLarge: ViewStyle = {
//   flexDirection: 'row',
//   backgroundColor: colors.background,
// };
//
// const $advertsListSmall: ViewStyle = {
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '100%',
//   backgroundColor: colors.background,
// };
//
// const $advertsListLarge: ViewStyle = {
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '30%',
//   height: '100vh',
//   backgroundColor: colors.background,
// };

const styles = {
  addAdvertButton: {
    backgroundColor: '#212121',
    position: 'fixed',
    bottom: 30,
    right: 30,
    borderRadius: 7,
    padding: 15,
  },
};
export default Adverts;

//          <FlatList
//             data={annonces}
//             numColumns={2} // Affiche deux éléments par ligne
//             renderItem={({ item }) => (
//               <View style={{ flex: 1, gap: 10 }}>
//                 <AdvertCard
//                   name={item.adname}
//                   image={item.image}
//                   description={item.description}
//                   geocode={item.geocode}
//                   objectType={item.objectType.name}
//                 />
//               </View>
//             )}
//             keyExtractor={(item, index) => index.toString()}
//             ListFooterComponent={<View style={{ flex: 1, width: '50%' }} />} // Ajout d'un composant vide pour assurer la dernière ligne a toujours deux cartes
//           />
