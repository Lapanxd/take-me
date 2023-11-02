import React from 'react';
import { View, ViewStyle, Text, Image, ImageStyle, TextStyle } from 'react-native';
import { colors } from '../theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from 'app/navigators/MenuNavigator';
import TopBackNavigation from 'app/components/TopBackNavigation';
import TopDrawerNavigation from 'app/components/TopDrawerNavigation';
import { ScrollView } from 'react-native-gesture-handler';
// import 'leaflet/dist/leaflet.css';
// import leaflet from 'leaflet';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from 'leaflet';

type Props = NativeStackScreenProps<RootStackParams, 'AdvertDetailScreen'>;

export const AdvertDetailScreen = ({ route }: Props) => {
  const { item } = route.params;

  // const customIcon = new Icon({
  //   iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
  //   iconSize: [38, 38],
  // });

  return (
    <View style={$container}>
      <View style={$header}>
        <TopBackNavigation />
        <TopDrawerNavigation />
      </View>
      <View style={$advertcontent}>
        <View style={$advertbloc}>
          <ScrollView>
            <View style={$adcard}>
              <Image source={{ uri: item.image }} style={$image} />
              <View style={$adcontent}>
                <Text style={$title}>{item.adname}</Text>
                <Text style={$label}>Description:</Text>
                <View style={$contentdescription}>
                  <Text style={$description}>{item.description}</Text>
                </View>
                <Text style={$label}>Quantity:</Text>
                <Text style={$text}>{item.quantity}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={$mapcontent}>
          {/* <MapContainer
            center={[44.8378, -0.5667]}
            zoom={13}
            style={{ width: '100%', height: '80vh' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={item.geocode} icon={customIcon}>
              <Popup>{item.adname}</Popup>
            </Marker>
          </MapContainer> */}
        </View>
      </View>
    </View>
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
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16,
};

const $label: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 4,
};

const $text: TextStyle = {
  fontSize: 16,
  marginBottom: 8,
};
const $adcard: ViewStyle = {
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
  padding: 20,
  flexDirection: 'row',
};

const $adcontent: ViewStyle = {
  padding: 16,
};

const $title: TextStyle = {
  fontSize: 34,
  marginBottom: 8,
  color: 'orange',
  fontWeight: 'bold',
  backgroundColor: colors.transparent,
};

const $contentdescription: ViewStyle = {
  flexDirection: 'row',
};
const $description: TextStyle = {
  fontSize: 16,
  marginTop: 4,
  color: colors.text,
  backgroundColor: colors.transparent,
  flex: 1,
  flexWrap: 'wrap',
};

const $image: ImageStyle = {
  width: 300,
  height: 300,
  marginRight: 8,
  borderRadius: 8,
};

const $advertcontent: ViewStyle = {
  flexDirection: 'row',
};

const $advertbloc: ViewStyle = {
  flexDirection: 'column',
  width: 700,
  height: 500,
  justifyContent: 'center',
  alignItems: 'center',
};

const $mapcontent: ViewStyle = {
  flexDirection: 'column',
  width: 500,
  height: 300,
};

export default AdvertDetailScreen;
