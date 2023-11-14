import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import AdvertCard from '../components/AdvertCard';
import React, { useEffect, useState } from 'react';
import { View, Text, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigators/MenuNavigator';
import Map from '../components/Map';
import { Header } from '../components';
import { useNavigation } from '@react-navigation/native';
import { advertService } from '../core/services/api';

export const Adverts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const { width } = useWindowDimensions();

  const [adverts, setAdverts] = useState([]);
  const [geocodes, setGeocodes] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    advertService.findAll().then((adverts) => {
      setAdverts(adverts);
      setGeocodes(adverts.map((advert) => advert.geocode));
      setNames(adverts.map((item) => item.name));
    });
  }, []);

  function mapWidth() {
    if (width > 1500) return 3.2;
    if (width > 1200) return 2;
    if (width > 900) return 1.5;
    if (width > 700) return 1;
  }

  return (
    <>
      <Header />
      <View style={{ flexDirection: width > 700 ? 'row' : 'column' }}>
        <View style={styles.advertList}>
          <Text style={styles.title}>Toutes les annonces</Text>
          <ScrollView>
            <View style={styles.advertItems}>
              {adverts.map((advert, index) => (
                <View key={index} style={{ width: '50%' }}>
                  <AdvertCard
                    name={advert.name}
                    image={
                      advert.images.find((image) => image.id === 1)?.url ||
                      'https://placehold.co/400'
                    }
                    description={advert.description}
                    geocode={advert.geocode}
                    objectType={advert.objectType}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={{ flex: mapWidth() }}>
          <Map geocodes={geocodes} names={names} />
        </View>
      </View>

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
    </>
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
  title: { fontWeight: 'bold', fontSize: 25, marginTop: 15, marginBottom: 15 },
  advertItems: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' },
  addAdvertButton: {
    backgroundColor: '#212121',
    position: 'fixed',
    bottom: 30,
    right: 30,
    borderRadius: 7,
    padding: 15,
  },
});

export default Adverts;
