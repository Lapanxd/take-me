import React from 'react';
import AdvertForm from './AdvertFormScreen';
import { View, ViewStyle, TextStyle, Text } from 'react-native';
import { colors } from '../theme';
import TopDrawerNavigation from 'app/components/TopDrawerNavigation';
import { ScrollView } from 'react-native-gesture-handler';

export const AddAdvertScreen = () => {
  const handleOnSubmit = (advert) => {
    console.log(advert);
  };

  return (
    <React.Fragment>
      <View style={$container}>
        <View style={$header}>
          <TopDrawerNavigation />
        </View>
        <ScrollView>
          <View style={$adcard}>
            <Text style={$title}>Ajouter une annonce</Text>
            <AdvertForm handleOnSubmit={handleOnSubmit} />
          </View>
        </ScrollView>
      </View>
    </React.Fragment>
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
const $adcard: ViewStyle = {
  width: '50%',
  backgroundColor: 'white',
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  marginLeft: 50,
  padding: '36px',
  // flexDirection: 'row',
};
const $title: TextStyle = {
  fontSize: 34,
  marginBottom: 18,
  color: 'orange',
  fontWeight: 'bold',
  backgroundColor: colors.transparent,
};
export default AddAdvertScreen;
