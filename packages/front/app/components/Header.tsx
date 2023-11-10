import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { typography } from '../theme';
import { useStores } from '../core';
import ProfilTest from '../screens/ProfilTest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerMenuIcon from '../icons/DrawerMenuIcon';
import ProfileIcon from '../icons/ProfileIcon';

export const Header = () => {
  const {
    authenticationStore: { checkAuthentication },
  } = useStores();

  async function logOut() {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    await checkAuthentication();
  }
  return (
    <View
      style={{
        height: 80,
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
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row', marginLeft: '7%', marginRight: '7%' }}>
        <View style={{ flex: 1, backgroundColor: '#acf2c2' }}></View>
        <View style={{ flex: 10, flexDirection: 'row', backgroundColor: '#f2b1ac' }}>
          <TextInput
            style={{
              flex: 5,
              marginTop: 11,
              paddingRight: 20,
              paddingLeft: 20,
              marginRight: 9,
              marginLeft: 9,
              marginBottom: 11,
              backgroundColor: '#d2d2d2',
              borderRadius: 7,
              fontWeight: 'bold',
              fontSize: 16,
              gap: 5,
            }}
            placeholderTextColor="gray"
            placeholder="Rechercher un objet"
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#212121',
              borderRadius: 7,
              flex: 1,
              marginBottom: 11,
              marginLeft: 9,
              marginRight: 9,
              marginTop: 11,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                color: '#ffffff',
                fontFamily: typography.primary.medium,
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              Ajouter un objet
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: '#f2edac' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#d2d2d2',
              borderRadius: 7,
              flex: 1,
              marginBottom: 11,
              marginLeft: 9,
              marginRight: 9,
              marginTop: 11,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 20,
            }}
            onPress={logOut}
          >
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <ProfileIcon color={'#212121'} size={25}></ProfileIcon>
              <DrawerMenuIcon color={'#212121'} size={25}></DrawerMenuIcon>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  headerContainer: {},
  addAdvertButton: {
    // à mettre dans le text du button
    // fontFamily: typography.primary.medium,
    // textAlign: 'center',
  },
};

export default Header;
