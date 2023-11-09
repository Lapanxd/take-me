import { Button, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { typography } from '../theme';
import { useStores } from '../core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProfilTest = () => {
  const {
    authenticationStore: { checkAuthentication },
  } = useStores();

  async function logOut() {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    await checkAuthentication();
  }

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 3, flexDirection: 'row' }}>
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
              gap: 5,
            }}
            placeholderTextColor="gray"
            placeholder="Rechercher un objet"
          />
          <TouchableOpacity style={styles.addAdvertButton}>+ Ajouter un objet</TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.addAdvertButton} onPress={logOut}>
            Log out
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  header: {
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
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  addAdvertButton: {
    backgroundColor: '#212121',
    borderRadius: 7,
    color: 'white',
    flex: 1,
    marginBottom: 11,
    marginLeft: 9,
    marginRight: 9,
    marginTop: 11,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: typography.primary.medium,
    fontSize: 15,
  },
};

export default ProfilTest;
