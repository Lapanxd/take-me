import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AdvertCard from "app/components/AdvertCard";
import React, { useState } from "react";
import { TextStyle, View, ViewStyle, FlatList, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors, spacing } from "../theme"
import { RootStackParams } from "app/navigators/MenuNavigator";
import TopDrawerNavigation from "app/components/TopDrawerNavigation";
import "leaflet/dist/leaflet.css";
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

type Props = NativeStackScreenProps<RootStackParams, "AdvertsStack">;

export const Adverts = ({ navigation }: Props) => {
  const [annonces, setAnnonces] = useState([
    {
      adname: "Chaise en bois",
      description: "Chaise en bon état, couleur marron",
      quantity: "1",
      latitude: "6777.9009",
      longitude: "79798.90909",
      image: 'https://images.unsplash.com/photo-1562113530-57ba467cea38?auto=format&fit=crop&q=80&w=1299&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      adname: "Étagère blanche",
      description: "Étagère blanche, 1m50, bon état, 3 étages, marque Ikea, en bois",
      quantity: "1",
      latitude: "6877.9339",
      longitude: "99798.90509",
      image: 'https://www.lafoirfouille.fr/medias/sys_master/images/images/h20/hc8/8892827336734/10000180640-0-1200Wx1200H.jpg',
    }
  ]);
// markers
const markers = [
  {
    geocode: [44.8580, -0.5667],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [44.8375, -0.5667],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [44.8279, -0.5670],
    popUp: "Hello, I am pop up 3"
  }
];
  // create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});
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
      <View style={$mapcontent}>
      {/* <ScrollView> */}
      <MapContainer center={[44.8378, -0.5667]} zoom={13} style={{ width: "100%", height: "80vh" }}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

<MarkerClusterGroup
         chunkedLoading
        //  iconCreateFunction={createClusterCustomIcon}
       >
         {/* Mapping through the markers */}
         {markers.map((marker) => (
           <Marker position={marker.geocode} icon={customIcon}>
             <Popup>{marker.popUp}</Popup>
           </Marker>
         ))}
       </MarkerClusterGroup>
    </MapContainer>
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
  flexDirection: "row",
  justifyContent: 'flex-end',
  alignItems: "center",
  marginBottom: 16,
};

const $advertscontent: ViewStyle = {
  flexDirection: "row",
};

const $advertslist: ViewStyle = {
  flexDirection: "column",
  width: 700,
  height: 500,
};

const $mapcontent: ViewStyle = {
  flexDirection: "column",
  width: 500,
  height: 300,
};

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
  fontSize: 44,
  fontWeight: 'bold',
  padding: 16,
}
export default Adverts;
