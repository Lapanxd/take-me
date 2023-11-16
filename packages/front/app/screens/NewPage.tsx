import React, { useState } from 'react';
import {
  View,
  ViewStyle,
  Text,
  ImageBackground,
  ImageStyle,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import { colors } from '../theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigators/MenuNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchBar } from 'react-native-elements';

const image = {
  uri: 'https://images.unsplash.com/photo-1462212210333-335063b676bc?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

type Props = NativeStackScreenProps<RootStackParams, 'NewPage'>;

export const NewPage = ({ navigation }: Props) => {
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 855;

  const [search, setSearch] = useState('');

  async function test() {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
  }

  return (
    <ImageBackground source={image} style={[styles.container, { height }]}>
      {/* Colonne de droite avec le formulaire */}
      <View style={isSmallScreen ? styles.rightColumnSmall : styles.rightColumnLarge}>
        <View style={styles.$header}>
          <TopDrawerNavigation />
        </View>
        <View style={styles.$centerBox}>
          <SearchBar
            placeholder="Rechercher..."
            onChangeText={(text) => setSearch(text)}
            value={search}
            containerStyle={[styles.$searchBarContainer, { width: isSmallScreen ? '80%' : '40%' }]}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  rightColumnSmall: {
    top: '30%',
    alignSelf: 'center',
  },
  rightColumnLarge: {
    flex: 1,
    width: '50%',
    top: '20%',
    padding: 40,
  },

  $centerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: '20%',
    backgroundColor: 'grey',
  },
  $header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  $searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
});

export default NewPage;
