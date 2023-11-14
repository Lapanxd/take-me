import { Image, View, useWindowDimensions, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStores } from '../core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TopDrawerNavigation from './TopDrawerNavigation';
import { Text } from './Text';
import { RootStackParams } from '../navigators';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const logo = require('../../assets/images/logooo.png');

export const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const {
    authenticationStore: { checkAuthentication, isAuthenticated },
  } = useStores();

  const { width } = useWindowDimensions();
  async function logOut() {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    await checkAuthentication();
  }
  return (
    <View style={styles.header}>
      {width > 750 ? (
        <View
          style={{
            flex: 1,
            width: '100%',
            paddingLeft: '5%',
            paddingRight: '5%',
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image source={logo} style={{ width: 140, height: 43 }} />
          </View>
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <TextInput
              style={{
                flex: width > 1300 ? 4 : 2,
                marginTop: 11,
                marginRight: 9,
                marginLeft: 9,
                marginBottom: 11,
                paddingRight: 20,
                paddingLeft: 20,
                backgroundColor: '#d2d2d2',
                borderRadius: 7,
                fontWeight: 'bold',
                gap: 5,
              }}
              placeholderTextColor="gray"
              placeholder="Rechercher un objet"
            />
            {isAuthenticated && width > 915 ? (
              <TouchableOpacity
                style={styles.addAdvertButton}
                onPress={() => navigation.navigate('AddAdvert')}
              >
                <Text style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bold' }}>
                  Ajouter une annonce
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TopDrawerNavigation />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            maxWidth: 750,
          }}
        >
          <View
            style={{
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image source={logo} style={{ width: 140, height: 43 }} />
          </View>
          <View style={{ flex: 3 }}></View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          >
            <TopDrawerNavigation />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = {
  header: {
    height: 70,
    backgroundColor: '#f3f3f3',
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  addAdvertButton: {
    backgroundColor: '#212121',
    borderRadius: 7,
    flex: 1,
    marginBottom: 11,
    marginLeft: 9,
    marginRight: 9,
    marginTop: 11,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 13,
  },
};

export default Header;
